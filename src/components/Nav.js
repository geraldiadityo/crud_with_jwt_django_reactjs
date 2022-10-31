import React from "react";
import PropTypes from "prop-types";

function Nav(props){
    const logged_out_nav = (
        <div className="login-signup container">
            <span>Click Here To login</span>
            <button className="btn btn-primary" onClick={() => props.display_form('login')}>Login</button>
            <span onClick={() => props.display_form('signup')}>Click Here To Singup</span>
        </div>
    );

    const logged_in_nav = (
        <div className="logout-btn">
            <button className="btn btn-primary" onClick={props.handle_logout} type="button">Logout</button>
        </div>
    );

    return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
    logged_in:PropTypes.bool.isRequired,
    display_form:PropTypes.func.isRequired,
    handle_logout:PropTypes.func.isRequired,
};
