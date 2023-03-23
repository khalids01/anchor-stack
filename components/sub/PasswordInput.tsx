import { useState } from "react";
import images from "../../constants/images";
import { getPasswordStrength } from "../../utils/validation";

interface Password {
  value: string;
  isTouched: boolean;
  valid: boolean;
}
const PasswordInput = ({
  submitted,
  password,
  onChange,
  withStrengthBar = true,
}: {
  submitted: boolean;
  password: Password;
  onChange: any;
  withStrengthBar?: boolean;
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="group relative">
      <img src={`../../assets/${images.lock}`} className="input-icon" />
      <input
        required
        placeholder="Password"
        className={`input password ${
          !password.valid && password.isTouched && submitted ? "error" : ""
        }`}
        type={show ? "text" : "password"}
        value={password.value}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className={`password-show-btn ${show ? "show" : "hide"}`}
      >
        <img src={`../../assets/${show ? images.eye : images.eyeHide}`} />
      </button>
      {password.isTouched && !password.valid && submitted ? (
        <p className="error text-danger mb-6 mb-6 -mt-4">
          {getPasswordStrength(password.value, true)}
        </p>
      ) : null}

      {withStrengthBar ? (
        <div
          className={`password-strength-bars mt-2 mb-[35px] ${
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
      ) : null}
    </div>
  );
};

export default PasswordInput;
