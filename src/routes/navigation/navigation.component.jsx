import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as Crown } from "./../../assets/crown.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="logo-container">
          <Link to='/'><Crown /></Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/shop">Shop</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
