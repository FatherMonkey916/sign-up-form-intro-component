import { useForm } from "react-hook-form";
import "./Form.css";

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserInfo>();

  const onSubmit = (data: UserInfo) => {
    console.log("data", data);
    reset();
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            {...register("firstName", { required: true })}
            autoFocus
          />
          {errors.firstName && <p>First Name cannot be empty</p>}
        </div>

        <div className="field">
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <p>Last Name cannot be empty</p>}
        </div>

        <div className="field">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            {...register("email", {
              required: true,
              pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            })}
          />
          {errors?.email?.type === "required" && <p>Email cannot be empty</p>}
          {errors?.email?.type === "pattern" && (
            <p>Looks like this is not an email</p>
          )}
        </div>

        <div className="field">
          <input
            type="password"
            id="pwd"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>Password cannot be empty</p>}
        </div>

        <button type="submit">Claim Your Free Trial</button>
      </form>
      <p className="Form-terms">
        By clicking the button, you are agreeing to our{" "}
        <a
          href="http://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms and Services
        </a>
      </p>
    </div>
  );
}
