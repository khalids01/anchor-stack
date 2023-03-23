import { RootState } from "./../redux/index";
import { storeToken, removeToken, retrieveToken } from "../utils/tokenStore";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useToken from "./useToken";
import useUser from "./useUser";
import {
  signin,
  signup,
  logout as logoutService,
} from "../services/authService";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/slice/userSlice";

const useAuth = () => {
  const navigate = useNavigate();
  const { clearToken, setToken } = useToken();
  const { removeUser } = useUser();
  const dispatch = useDispatch();

  //   signup mutation
  const { mutate: signupMutation, isLoading: signupLoading } = useMutation(
    signup,
    {
      onMutate: () => {
        toast.loading("Please wait.");
      },
      onSuccess: (data) => {
        setToken(data?.data?.token);

        dispatch(setUserId(data?.data?.id));

        toast.dismiss();
        toast.success("Successfully signed up");
        navigate("/dashboard");
      },
      onError: (error: AxiosError) => {
        toast.clearWaitingQueue();
        // @ts-ignore
        toast.error(error?.response?.data?.error ?? "Failed  to signup");
      },
    }
  );

  //   sign in mutation
  const { mutate: signInMutation, isLoading: signinLoading } = useMutation(
    signin,
    {
      onMutate: () => {
        toast.loading("Processing your request");
      },
      onSuccess: (data) => {
        setToken(data?.data?.token);

        dispatch(setUserId(data?.data?.id));

        toast.dismiss();
        toast.success("Successfully signed in");
        navigate("/dashboard");
      },
      onError: (error: AxiosError) => {
        toast.clearWaitingQueue();
        // @ts-ignore
        toast.error(error?.response?.data?.error ?? "Failed  to signup");
      },
    }
  );

  const { refetch: logoutRequest } = useQuery(
    ["logout"],
    () => logoutService(),
    {
      enabled: false,

      onSuccess() {
        toast.success("You have been logged out");

        navigate("/signin");
      },
    }
  );

  const logout = () => {
    clearToken();
    removeUser();
    dispatch(setUserId(null));

    logoutRequest();
  };

  return {
    signupMutation,
    signupLoading,
    signInMutation,
    signinLoading,
    logout,
  };
};

export default useAuth;
