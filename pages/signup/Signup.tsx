import images from "../../constants/images";
import { useState } from "react";
import {
  validateEmail,
  validatePassword,
  getPasswordStrength,
} from "../../utils/validation";
import { Link } from "react-router-dom";

const Signup = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState({
    value: "",
    error: "",
    isTouched: false,
    valid: false,
  });
  const [name, setName] = useState({
    value: "",
    error: "",
    isTouched: false,
    valid: false,
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
    isTouched: false,
    valid: false,
  });

  const handleSubmit = async () => {};

  return (
    <section className="container-xsm mt-[123px]">
      <h1 className="auth-title">Getting Started</h1>
      <p className="auth-sub-title">Create an account to continue</p>
      <div className="flex justify-between gap-x-30px">
        <button className="auth-btn">
          <img
            src={`../../assets/${images.google}`}
            alt="G"
            className="auth-btn-img w-[25px] h-[25px]"
          />
          <span>Sign Up with Google</span>
        </button>

        <button className="auth-btn">
          <img
            src={`../../assets/${images.apple}`}
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

      <form className="form pb-20">
        <div className="group relative">
          <img src={`../../assets/${images.at}`} className="input-icon" />
          <input
            placeholder="Your Email"
            className={`input ${
              !email.valid && email.isTouched && submitted ? "error" : ""
            }`}
            type={"email"}
            value={email.value}
            onChange={(e) => {
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
          {email.isTouched && !email.valid && submitted ? (
            <p className="error text-danger">Please enter a valid email</p>
          ) : null}
        </div>

        <div className="group relative">
          <img src={`../../assets/${images.name}`} className="input-icon" />
          <input
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
            <p className="error text-danger">Please enter your name</p>
          ) : null}
        </div>

        <div className="group relative">
          <img src={`../../assets/${images.lock}`} className="input-icon" />
          <input
            placeholder="Create Password"
            className={`input ${
              !password.valid && name.isTouched && submitted ? "error" : ""
            }`}
            type={"text"}
            value={password.value}
            onChange={(e) => {
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
          {password.isTouched && !password.valid && submitted ? (
            <p className="error text-danger mb-6">
              {getPasswordStrength(password.value, true)}
            </p>
          ) : null}

          <div
            className={`password-strength-bars mt-2 ${
              password.value ? getPasswordStrength(password.value) : "empty"
            }`}
          >
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="group flex justify-start align-center my-[35px]">
          <input
            type={"checkbox"}
            id="terms&condition"
            className="bg-border rounded-[8px] h-[28px] w-[28px] mr-[17px] terms_condition"
          />
          <label htmlFor="terms&condition" className="text-muted">
            I agree to the Terms & and condition
          </label>
        </div>

        <div className="group">
          <button className="submit-btn">Sign Up</button>
        </div>

        <div className="group flex justify-center">
          <p className="text-muted mr-1">Already have an account?</p>
          <Link to="/signin" className="text-primary ">
            Sign In
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Signup;
