import images from "../../constants/images";
import { useState } from "react";
import AuthLayout from "../AuthLayout";
import { validateEmail } from "../../utils/validation";
import { Link } from "react-router-dom";
import { CheckBox, EmailInput, PasswordInput } from "../../components/sub";
import { useAuth } from "../../hooks";

const SignIn = () => {
  const [agreeToTermsCondition, setAgreeToTermsCondition] = useState(false);
  const { signInMutation } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
    valid: false,
  });

  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
    valid: false,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);

    setEmail({
      ...email,
      valid: validateEmail(email.value),
    });
    setPassword({
      ...password,
      valid: password.value?.length > 8,
    });

    if (!validateEmail(email.value) || password.value?.length < 8) {
      return;
    }

    signInMutation({
      email: email.value,
      password: password.value,
    });
  };


  return (
    <AuthLayout>
      <section className="container-xsm mt-[123px]">
        <h1 className="auth-title">Sign In</h1>
        <p className="auth-sub-title">Welcome back, {"you've"} been missed!</p>
        <div className="flex justify-between gap-x-30px">
          <button className="auth-btn">
            <img
              src={`../../assets/${images.google}`}
              alt="G"
              className="auth-btn-img w-[25px] h-[25px]"
            />
            <span>Sign In with Google</span>
          </button>

          <button className="auth-btn">
            <img
              src={`../../assets/${images.apple}`}
              alt="Apple"
              className="auth-btn-img w-[20px] h-[24px]"
            />
            <span>Sign In with Apple ID</span>
          </button>
        </div>

        <div className="divider">
          <span className="relative bg-white inline-block z-[2] px-[23px]">
            OR
          </span>
        </div>

        <form className="form pb-20" onSubmit={handleSubmit}>
          <EmailInput
            submitted={submitted}
            email={email}
            onChange={(e: any) => {
              if (submitted) {
                setSubmitted(false);
              }
              setEmail({
                ...email,
                value: e.target.value.trim(),
                isTouched: e.target.value?.trim().length !== 0,
              });
            }}
          />

          <PasswordInput
            withStrengthBar={false}
            submitted={submitted}
            password={password}
            onChange={(e: any) => {
              if (submitted) {
                setSubmitted(false);
              }
              setPassword({
                ...password,
                value: e.target.value.trim(),
                isTouched: e.target.value?.trim().length !== 0,
              });
            }}
          />

          <CheckBox
            label="Remember Me"
            checked={agreeToTermsCondition}
            onChange={(e: any) => setAgreeToTermsCondition(e.target.checked)}
          />

          <div className="group">
            <button className="submit-btn">Sign In</button>
          </div>

          <div className="group flex justify-center">
            <p className="text-muted mr-1">{"Don't"} have an account?</p>
            <Link to="/" className="text-primary ">
              Sign Up
            </Link>
          </div>
        </form>
      </section>
    </AuthLayout>
  );
};

export default SignIn;
