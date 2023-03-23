import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { me as getMe } from "../services/userService";
import { removeUser, retrieveUser, storeUser } from "../utils/userStore";
import { useSelector } from "react-redux";
import { RootState } from "../redux";

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const useUser = () => {
  const [me, setMe] = useState<User | null>(null);
  const { id } = useSelector((state: RootState) => state.userId);
  useEffect(() => {
    if (!id) return;

    fetchAndSetMe();
  }, []);

  const { refetch: fetchAndSetMe } = useQuery(
    ["me"],
    () => getMe(id as string),
    {
      enabled: false,
      onSuccess(data) {
        storeUser(data?.data?.data as User);
        setMe(data?.data?.data);
      },
    }
  );

  return {
    parseMe: retrieveUser(),
    me,
    fetchAndSetMe,
    removeUser,
    retrieveUser,
  };
};

export default useUser;
