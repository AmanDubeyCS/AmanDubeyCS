import "./Login-signup.css";
import img from "./bit.jpg";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="container">
        <div className="container-1">
          <div className="Logo">
            <img src="https://securedapp.io/static/media/logoblacktextsdlogowhite-1@2x.53eda1d22556001891e3.png" alt="" />
          </div>
          <div className="Form-container">
            <Outlet />
          </div>
        </div>
        <div className="img-container"></div>
      </div>
    </>
  );
};

export default Layout;