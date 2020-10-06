// import react and bootstrap for table components
import React, { Component } from 'react';
import { Table, Image } from 'react-bootstrap';

// class for data table component
class DataTable extends Component {
    // declaration of react variable items
    state = {
        ordered: true,
        currentSort: true,
        sortedEmps: [],
        onSort: '',
        empFilter: [],
    };
    // component update on previous props change in employee
    componentDidUpdate(prevProps) {
        if (this.props.currentState.empFilter !== prevProps.currentState.empFilter) {
            this.setState({
                empFilter: this.props.currentState.empFilter,
            });
            console.log("update", this.props.currentState.empFilter)
        }
    }
    // sort function for name based on first and last from employee
    onSortName = () => {
        let sortEmp = [];
        if (!this.state.ordered) {
            sortEmp = this.props.currentState.empFilter.sort((a, b) => {
                let nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
            // set state on ordered to false so that sort will toggle truthy or falsey
            this.setState({
                ordered: !this.props.currentState.ordered,
                sortedEmps: this.props.currentState.sortEmp,
            });
            console.log("name1", { sortedEmps: sortEmp })
        }
        else if (this.state.ordered) {
            sortEmp = this.props.currentState.empFilter.sort((a, b) => {
                let nameA = a.name.last.toLowerCase(),
                    nameB = b.name.last.toLowerCase();
                if (nameA > nameB) return -1;
                if (nameA < nameB) return 1;
                return 0;
            });
            // set state on ordered to true so that sort will toggle truthy or falsey
            this.setState({
                ordered: this.props.currentState.ordered,
                sortedEmps: this.props.currentState.sortEmp,
            });
            console.log("name2", { sortedEmps: sortEmp })
        }
    };
    // sort table column phone by numeric order
    onSortPhone = () => {

        let sortEmp = [];

        if (!this.state.currentSort) {
            sortEmp = this.props.currentState.empFilter.sort((a, b) => {
                let nameA = a.phone,
                    nameB = b.phone;
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
            // set state on current sort to false so that sort will toggle truthy or false
            this.setState({
                currentSort: !this.props.currentState.currentSort,
                sortedEmps: this.props.currentState.sortEmp,
            });
            console.log("phone1", sortEmp)
        }
        else if (this.state.currentSort) {
            sortEmp = this.props.currentState.empFilter.sort((a, b) => {
                let nameA = a.phone,
                    nameB = b.phone;
                if (nameA > nameB) return -1;
                if (nameA < nameB) return 1;
                return 0;
            });
            // set state on current sort to true so that sort will toggle truthy or false
            this.setState({
                currentSort: this.props.currentState.currentSort,
                sortedEmps: this.props.currentState.sortEmp,
            });
            console.log("phone2", sortEmp)
        }

    };
    // sort date of birth numerically by input 
    onSortDOB = () => {
        let sortEmp = [];
        if (!this.state.currentSort) {
            sortEmp = this.props.currentState.empFilter.sort((a, b) => {
                let nameA = a.dob.date,
                    nameB = b.dob.date;
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
            // set state on current sort to false so that sort will toggle truthy or false
            this.setState({
                currentSort: !this.props.currentState.currentSort,
                sortedEmps: this.props.currentState.sortEmp,
            });
            console.log("dob1", sortEmp)
        }
        else if (this.state.currentSort) {
            sortEmp = this.props.currentState.empFilter.sort((a, b) => {
                let nameA = a.dob.date,
                    nameB = b.dob.date;
                if (nameA > nameB) return -1;
                if (nameA < nameB) return 1;
                return 0;
            });
            // set state on current sort to true so that sort will toggle truthy or false
            this.setState({
                currentSort: this.props.currentState.currentSort,
                sortedEmps: this.props.currentState.sortEmp,
            });
            console.log("dob2", sortEmp)
        }

    };
    // render the table for the DataTable component by mapping over empFiltered data 
    // table style striped and hover responsive
    // on click method calls each sort function as user clicks table header
    // DataTable component used on home.js
    render() {

        return (
            <div>
                <Table striped bordered hover responsive="sm">
                    <thead className="text-center">
                        <tr>
                            <th id="pic" onClick={this.onSortName} className="pic">Profile Picture</th>
                            <th id="name" onClick={this.onSortName} className="name">Name</th>
                            <th id="phone" onClick={this.onSortPhone} className="phone" >Phone</th>
                            <th id="email" onClick={this.onSortName} className="email">Email</th>
                            <th id="dob" onClick={this.onSortDOB} className="dob">date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.currentState.empFilter.map((emp) => {
                            return (
                                <tr responsive="sm" key={emp.id.value}>
                                    <td className="align-middle"><Image fluid="true" src={emp.picture.large} alt={emp.name.last} /></td>
                                    <td className="align-middle">{emp.name.first} {emp.name.last}</td>
                                    <td className="align-middle">{emp.phone}</td>
                                    <td className="align-middle">{emp.email}</td>
                                    <td className="align-middle">{new Date(emp.dob.date).toLocaleDateString()}</td>
                                </tr>
                            );
                        }
                        )}</tbody>
                </Table>

            </div>
        );
    }
}
export default DataTable;