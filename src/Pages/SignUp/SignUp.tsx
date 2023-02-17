import styles from "./SignUp.module.css";
import Logo from "../../assets/Logo.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [isPasswordsMatch, setIsPasswordsMatch] = useState(true)

  type Inputs = {
    email: string;
    password: string;
    confirm_password: string,
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isPasswordsMatch) {
      alert("Sign Up Completed!")
    }
  };

  useEffect(() => {
    if (watch("confirm_password") !== watch("password") && watch("confirm_password") !== "") {
      setIsPasswordsMatch(false)
    } else {
      setIsPasswordsMatch(true)
    }
  }, [watch("confirm_password")])

  return (
    <>
      <img src={Logo} className={styles["logo-icon"]} alt="logo" />
      <div className={styles["container"]}>
        <h2 className={styles["container-title"]}>Sign Up</h2>
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
          <div className={styles["input-div"]}>
            <input
              className={styles["input"]}
              type="password"
              placeholder="Repeat password"
              {...register("confirm_password", {
                required: {
                  value: true,
                  message: "Can’t be empty",
                }
              })}
            />
            {errors.confirm_password && (
              <span className={styles["error-message"]}>{errors.confirm_password.message}</span>
            )}
            {isPasswordsMatch ? null : <span className={styles["error-message"]}>Not Match!</span>}
          </div>
          <button className={styles["submit-btn"]} type="submit">
            Create an account
          </button>
          <p className={styles["footer-p"]}>
            Already have an account?
            <span className={styles["footer-span"]}>Login</span>
          </p>
        </form>
      </div>
    </>
  );
}
