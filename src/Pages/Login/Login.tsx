import styles from "./Login.module.css";
import Logo from "../../assets/Logo.png";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  type Inputs = {
    email: string;
    password: string;
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert("Loged In!")
  };

  return (
    <>
      <img src={Logo} className={styles["logo-icon"]} alt="logo" />
      <div className={styles["container"]}>
        <h2 className={styles["container-title"]}>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["input-div"]}>
            <input
              className={styles["input"]}
              type="email"
              placeholder="Email address"
              {...register("email", {
                required: {
                  value: true,
                  message: "Can’t be empty",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Looks like this is not an email",
                },
              })}
            />
            {errors.email && (
              <span className={styles["error-message"]}>
                {errors.email.message}
              </span>
            )}
          </div>
          <div className={styles["input-div"]}>
            <input
              className={styles["input"]}
              type="password"
              placeholder="Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Can’t be empty",
                },
                minLength: {
                  value: 8,
                  message: "Minimum required length is 8",
                }
              })}
            />
            {errors.password && (
              <span className={styles["error-message"]}>{errors.password.message}</span>
            )}
          </div>
          <button className={styles["submit-btn"]} type="submit">
            Login to your account
          </button>
          <p className={styles["footer-p"]}>
            Don’t have an account?
            <span className={styles["footer-span"]}>Sign Up</span>
          </p>
        </form>
      </div>
    </>
  );
}
