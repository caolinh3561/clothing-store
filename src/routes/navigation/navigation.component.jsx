import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as Crown } from "./../../assets/crown.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {

  const {currentUser} = useContext(UserContext);

  console.log("nav currentUser ",currentUser);

  const handleSignOut = () => {
    console.log("handleSignOut")
    signOutAuthUser();
  }

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crown className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser == null? <Link className="nav-link" to="/auth">
            SIGN IN
          </Link> : <Link className="nav-link" onClick={handleSignOut}>
            SIGN OUT
          </Link>}
          
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
