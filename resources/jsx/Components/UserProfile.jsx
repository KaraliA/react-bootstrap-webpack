import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import Table from './Table.jsx';
import { UserAPI } from './UserAPI.jsx';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.refs.form.checkValidity()) {
            //this.refs.required.removeAttribute('hidden');
        } else {
            const newUser = {
                firstName: this.refs.firstName.value,
                lastName: this.refs.lastName.value,
                userName: this.refs.userName.value,
                password: this.refs.password.value,
                email: this.refs.email.value
            }
            UserAPI.save(newUser, this.props.match.params.userName);
            this.props.history.push('/');
        }
    }
    render() {
        const user = UserAPI.get(this.props.match.params.userName);
        return (
            <div id="userProfile" className="col-sm-12 col-md-8">
                <h4>User Profile</h4>
                <form className="form-group needs-validation" onSubmit={this.handleSubmit} ref="form" noValidate>
                    <div className="mb-3">
                        <label className="col-form-label" htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" id="firstName" ref="firstName" placeholder="Your name" defaultValue={ user.firstName } required/>
                        <div class="invalid-feedback" ref="required" hidden>
                            Valid first name is required.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label" htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control" id="lastName" ref="lastName" placeholder="Your surname" defaultValue={ user.lastName } required/>
                        <div class="invalid-feedback" ref="required" hidden>
                            Valid first name is required.
                        </div>
                    </div> 
                    <div className="mb-3">
                        <label className="col-form-label" htmlFor="Email">E-mail</label>
                        <input type="text" className="form-control" id="email" ref="email" defaultValue={ user.email } required/>
                        <div class="invalid-feedback" ref="required" hidden>
                            Valid first name is required.
                        </div>
                    </div> 
                    <div className="mb-3">
                        <label className="col-form-label" htmlFor="userName">User name</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" id="userName" ref="userName" defaultValue={ user.userName } required/>
                            <div class="invalid-feedback" ref="required" hidden>
                                Valid first name is required.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label" htmlFor="Password">Password</label>
                        <input type="text" className="form-control" id="password" ref="password" defaultValue={ user.password } required/>
                        <div class="invalid-feedback" ref="required" hidden>
                            Valid first name is required.
                        </div>
                    </div>
                    <div className="mb-3">
                        <p>Have an account? <a href="">Sign in</a></p>
                    </div>
                    <div>
                        <button className="btn btn-primary" type="submit"> Save</button>                    
                    </div>
                </form>
            </div>
        );
    }
}
export default withRouter(UserProfile);