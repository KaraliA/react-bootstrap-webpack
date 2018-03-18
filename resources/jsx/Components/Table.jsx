import React from "react";
import ReactDOM from "react-dom";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import "/Users/arinakarali/Documents/work/react-bootstrap-webpack/react-bootstrap-webpack-Boilerplate/node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css";
import { Link } from 'react-router-dom'

const dataSet = [
    {
        firstName: "Arina",
        lastName: "Karali",
        userName: "AKarali",
        password: "311",
        email: "example@gmail.com"
    }, {
        firstName: "Yana",
        lastName: "Marienko",
        userName: "YMarienko",
        password: "312",
        email: "example@gmail.com"
    }, {
        firstName: "Max",
        lastName: "Gromov",
        userName: "MGromov",
        password: "313",
        email: "example@gmail.com"
    }, {
        firstName: "Ivan",
        lastName: "Karaev",
        userName: "IKaraev",
        password: "314",
        email: "example@gmail.com"
    }, {
        firstName: "Yan",
        lastName: "Markov",
        userName: "YanMar",
        password: "315",
        email: "example@gmail.com"
    }, {
        firstName: "Anna",
        lastName: "Ivanova",
        userName: "AIvanova",
        password: "316",
        email: "example@gmail.com"
    }, {
        firstName: "Marina",
        lastName: "Petrova",
        userName: "MPetrova",
        password: "317",
        email: "example@gmail.com"
    }, {
        firstName: "Katya",
        lastName: "Hordienko",
        userName: "KHordienko",
        password: "318",
        email: "example@gmail.com"
    }, {
        firstName: "Maxim",
        lastName: "Karlash",
        userName: "MKarlash",
        password: "319",
        email: "example@gmail.com"
    }, {
        firstName: "Mykola",
        lastName: "Kovtun",
        userName: "MKovtun",
        password: "320",
        email: "example@gmail.com"
    }, {
        firstName: "Yaroslav",
        lastName: "Isaev",
        userName: "YIsaev",
        password: "321",
        email: "example@gmail.com"
    }, {
        firstName: "Alina",
        lastName: "Horbenko",
        userName: "AHorbenko",
        password: "322",
        email: "example@gmail.com"
    }
];

class Table extends React.Component {
    render() {
        return (
        <BootstrapTable data={ dataSet } search={ true } pagination={ true }>
            <TableHeaderColumn dataField='' dataFormat={ this.makeFullName } 
            dataSort={ true } sortFunc={ this.sortFullName }>Full Name</TableHeaderColumn>
            <TableHeaderColumn dataField='userName' dataSort={ true } isKey={true}>User Name</TableHeaderColumn>
            <TableHeaderColumn dataField='password' dataSort={ true }>Password</TableHeaderColumn>
            <TableHeaderColumn dataField='email' dataSort={ true }>Email</TableHeaderColumn>
        </BootstrapTable>
       );
    } 
    makeFullName(cell, row) {
       // return <a id={`_id_${row.userName}`} href='/userProfile'>{`${row.firstName} ${row.lastName}`}</a>;
        return <Link id={`_id_${row.userName}`} to={{
           pathname: '/userProfile',
            hash: '#'}}>{`${row.firstName} ${row.lastName}`}</Link>
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