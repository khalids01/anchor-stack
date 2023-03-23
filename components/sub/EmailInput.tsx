import images from "../../constants/images";

interface Email {
  value: string;
  isTouched: boolean;
  valid: boolean;
}

const EmailInput = ({
  email,
  onChange,
  submitted,
}: {
  email: Email;
  onChange: any;
  submitted: boolean;
}) => {
  return (
    <div className="group relative">
      <img src={`../../assets/${images.at}`} className="input-icon" />
      <input
        required
        placeholder="Your Email"
        className={`input ${
          !email.valid && email.isTouched && submitted ? "error" : ""
        }`}
        type={"email"}
        value={email.value}
        onChange={onChange}
      />
      {!email.valid && email.isTouched && submitted ? (
        <p className="error text-danger mb-6 -mt-4">
          Please enter a valid email
        </p>
      ) : null}
    </div>
  );
};

export default EmailInput;
