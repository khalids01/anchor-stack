import images from "../../constants/images";
import { useState } from "react";
import { validateEmail } from "../../utils/validation";
import { Link } from "react-router-dom";
import { CheckBox, EmailInput, PasswordInput } from "../../components/sub";
import AuthLayout from "../AuthLayout";
import { useAuth } from "../../hooks";

const Signup = () => {
  const [agreeToTermsCondition, setAgreeToTermsCondition] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { signupMutation, signupLoading } = useAuth();

  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
    valid: false,
  });
  const [name, setName] = useState({
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
      valid: password.value.length >= 8,
    });

    setName({
      ...name,
      valid: name.value?.length !== 0,
    });

    if (
      !validateEmail(email.value) ||
      password.value.length < 8 ||
      name.value?.length === 0
    ) {
      return;
    }

    signupMutation({
      email: email.value,
      userName: name.value,
      password: password.value,
    });
  };


  return (
    <AuthLayout>
      <section className="container-xsm mt-[123px]">
        <h1 className="auth-title">Getting Started</h1>
        <p className="auth-sub-title">Create an account to continue</p>
        <div className="flex justify-between gap-x-30px">
          <button className="auth-btn">
            <img
              src={images.google}
              alt="G"
              className="auth-btn-img w-[25px] h-[25px]"
            />
            <span>Sign Up with Google</span>
          </button>

          <button className="auth-btn">
            <img
              src={images.apple}
              alt="Apple"
              className="auth-btn-img w-[20px] h-[24px]"
            />
            <span>Sign Up with Apple ID</span>
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

          <div className="group relative">
            <img src={images.name} className="input-icon" />
            <input
              required
              placeholder="Your Name"
              className={`input ${
                !name.valid && name.isTouched && submitted ? "error" : ""
              }`}
              type={"text"}
              value={name.value}
              onChange={(e) => {
                if (submitted) {
                  setSubmitted(false);
                }
                setName({
                  ...name,
                  value: e.target.value.trim(),
                  isTouched: e.target.value?.trim().length !== 0,
                });
              }}
            />
            {name.isTouched && !name.valid && submitted ? (
              <p className="error text-danger -mt-4 mb-6">Name is required</p>
            ) : null}
          </div>

          <PasswordInput
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
            label="I agree to the Terms & Condition"
            checked={agreeToTermsCondition}
            onChange={(e: any) => setAgreeToTermsCondition(e.target.checked)}
          />

          <div className="group">
            <button
              disabled={signupLoading}
              type="submit"
              className="submit-btn"
            >
              Sign Up
            </button>
          </div>

          <div className="group flex justify-center">
            <p className="text-muted mr-1">Already have an account?</p>
            <Link to="/signin" className="text-primary ">
              Sign In
            </Link>
          </div>
        </form>
      </section>
    </AuthLayout>
  );
};

export default Signup;
