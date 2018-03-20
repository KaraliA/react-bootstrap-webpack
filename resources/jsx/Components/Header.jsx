import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import "/Users/arinakarali/Documents/work/react-bootstrap-webpack/react-bootstrap-webpack-Boilerplate/node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css";
import "/Users/arinakarali/Documents/work/react-bootstrap-webpack/react-bootstrap-webpack-Boilerplate/node_modules/bootstrap/dist/css/bootstrap.css"

class Header extends React.Component {
    render() {
        return(
            <header>
                <h1>Users Data Table</h1>
			  	<p>This example shows the student's name in the first column, 
				  	student's surname, department, group, scholarship
					Here is a simple example of sign up form, which is constructed with using Bootstrap 4
				</p>
            </header>
        );
    }
}
export default Header;