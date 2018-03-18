import React from "react";
import ReactDOM from "react-dom";

class UserProfile extends React.Component {
    render() {
        return (
            <div id="userProfile" class="col-sm-12 col-md-8">
            <h4>User Profile</h4>
            <form class="form-group needs-validation" novalidate>
                    <div class="mb-3">
                        <label class="col-form-label" for="firstName">First name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="Your name" required/>
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="col-form-label" for="lastName">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="Your surname" required/>
                        <div class="invalid-feedback">
                            Valid last name is required.         
                        </div>
                    </div> 
                    <div class="mb-3">
                        <label class="col-form-label" for="Email">E-mail</label>
                        <input type="text" class="form-control" id="email" required/>
                        <div class="invalid-feedback">
                            Valid e-mail is required.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="col-form-label" for="userName">User name</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">@</span>
                            </div>
                            <input type="text" class="form-control" id="userName" required/>
                            <div class="invalid-feedback">
                                Valid user name is required.
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="col-form-label" for="Password">Password</label>
                        <input type="text" class="form-control" id="password" required/>
                        <div class="invalid-feedback">
                            Valid password is required.
                        </div>
                    </div>
                    <div class="mb-3">
                        <p>Have an account? <a href="">Sign in</a></p>
                    </div>
                    <div>
                        <button class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default UserProfile;