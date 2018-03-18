import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return(
            <header>
                <h1>Users Data Table</h1>
			  	<p>This example shows the student's name in the first column, 
				  	student's surname, department, group, scholarship
					Here is a simple example of sign up form, which is constructed with using Bootstrap 4
				</p>
                <nav>
      <ul>
        <li><Link to='/'>Table</Link></li>
        <li><Link to='/userProfile'>User Profile</Link></li>

      </ul>
    </nav>
            </header>
        );
    }
}
export default Header;