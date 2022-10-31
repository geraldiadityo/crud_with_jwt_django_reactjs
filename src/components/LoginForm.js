import React from "react";
import PropTypes from "prop-types";


class LoginForm extends React.Component {
    state = {
        username:'',
        password:'',
        
    };

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = {...prevstate};
            newState[name] = value;
            return newState;
        });
    };

    render() {
        return (
            <div className="container col-lg-6 col-md-6">
                <h2 className="display-3 text-center">Geraldi Company</h2>
                <h4 className="text-center display-3">Login State</h4>
                <form onSubmit={e => this.props.handle_login(e, this.state)}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handle_change} placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handle_change} placeholder="password"/>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary text-center">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;

LoginForm.propTypes = {
    handle_login:PropTypes.func.isRequired,
};