import React, { useRef, useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import loginPage from "../../images/login/login_prev_ui.png";
import googleIcon from "../../images/icons/google.png";
import githubIcon from "../../images/icons/github.png";
import facbookIcon from "../../images/icons/fecbook.png";
import "./Login.css";

const Login = () => {
  const { users,error ,signInWithGoogle,signInWithGithub, registerWithEmailAndPassword,loginWithEmailAndPassword,resetPassword } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState("true");
  //use-react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    criteriaMode: "all",
  });
  //password-verify
  const password = useRef({});
  password.current = watch("password", "");
//toggle-the-users
  const handleToggleLogin = (e) => {
    setIsLoggedIn(e.target.checked);
  };
  const handleResetPassword=()=>{
      resetPassword(users.email);
  }
  const onSubmit = (data) => {
    const{name,email,password}=data;
    isLoggedIn?loginWithEmailAndPassword(email,password) :registerWithEmailAndPassword(name,email,password)
  };

  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <img src={loginPage} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6 mx-auto pt-5 mt-3">
            <h1 className="pb-3" style={{ color: "#91b3fa" }}> Please {isLoggedIn?"Login":"Register"}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="px-5">
            {
                isLoggedIn?"" :<>
                  <input
                {...register("name", { required: true })}
                className="form-control"
                placeholder="Name"
              />
              {errors.name && <span className="text-danger">This name field is required</span>}
                </>
            }
              <input
                type="email"
                {...register("email", { required: true })}
                className="form-control"
                placeholder="Email"
              />
              {errors.email && <span className="text-danger">This email field is required</span>}
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: "This password field is required.",
                  pattern: {
                    value: /\d+/,
                    message: "This password is number only.",
                  },
                  minLength: {
                    value: 6,
                    message: "This input must exceed 6 characters",
                  },
                })}
                className="form-control"
                placeholder="Password"
              />

              <ErrorMessage
                errors={errors}
                name="password"
                render={({ messages }) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <span className="text-danger" key={type}>{message}</span>
                      ))
                    : null;
                }}
              />
               {
                   isLoggedIn?"":<>
                   <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                {...register("confirmPassword",{
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <span className="text-danger">{errors.confirmPassword.message}</span>
              )}
                   </>
               }

              <input type="submit" value={isLoggedIn?"Login":"Register"} className="form-control submit-btn" />
            </form>
            <div className="form-check">
              <input
                className="form-check-input d-none"
                onClick={handleToggleLogin}
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label toggle-button" htmlFor="flexCheckDefault" style={{color:"#4f52ff",fontWeight:"500"}}>
                {isLoggedIn ?  "New User ?"  : "Already have an account ?"}
              </label>
             {
                 isLoggedIn?  <button type="button" className="btn text-white ms-2" onClick={handleResetPassword} style={{backgroundColor:"#91b3fa"}}>Reset Password ?</button> :""
             }
            </div>
            <p className="text-danger">{error}</p>
            {isLoggedIn ? (
              <div>
                <p className="login-Or">
                  ---------------------OR------------------
                </p>
                <div className="d-flex flex-column px-5 login">
                  <button onClick={signInWithGoogle}>
                    <img src={googleIcon} alt="" />
                    GoogleSignIn
                  </button>
                  {/* <button>
                    <img src={githubIcon} alt="" />
                    FacbookSignIn
                  </button> */}
                  <button onClick={signInWithGithub}>
                    <img src={facbookIcon} alt="" />
                    GithubSignIn
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
