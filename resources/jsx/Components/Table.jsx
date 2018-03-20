import React from "react";
import ReactDOM from "react-dom";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link, Switch, Route } from 'react-router-dom'
import UserProfile from './UserProfile.jsx';
import { UserAPI } from './UserAPI.jsx';

class Table extends React.Component {
    render() {
        return (
        <BootstrapTable data={ UserAPI.users } search={ true } pagination={ true }>
            <TableHeaderColumn dataField='' dataFormat={ this.makeFullName } 
            dataSort={ true } sortFunc={ this.sortFullName }>Full Name</TableHeaderColumn>
            <TableHeaderColumn dataField='userName' dataSort={ true } isKey={true}>User Name</TableHeaderColumn>
            <TableHeaderColumn dataField='password' dataSort={ true }>Password</TableHeaderColumn>
            <TableHeaderColumn dataField='email' dataSort={ true }>Email</TableHeaderColumn>
        </BootstrapTable>
       );
    } 
    makeFullName(cell, row) {
       //return <a id={`_id_${row.userName}`} href='/userProfile'>{`${row.firstName} ${row.lastName}`}</a>;
        return <Link id={`_id_${row.userName}`} to={`/userProfile/${row.userName}`}> {`${row.firstName} ${row.lastName}`} </Link>
    }
    sortFullName(a, b, order) {
        a = `${a.firstName} ${a.lastName}`;
        b = `${b.firstName} ${b.lastName}`;
        if (order === "desc") {
            return a.localeCompare(b);
        } else {
            return b.localeCompare(a);
        }
    }
};
export default Table;