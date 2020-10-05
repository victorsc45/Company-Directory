import React, { Component } from 'react';

import { Table, Image } from 'react-bootstrap';


class DataTable extends Component {

    state = {
        ordered: true,
        currentSort: true,
        sortedEmps: [],


    };


    componentDidMount() {
        if (this.state.sortedEmps.length < 1) {
            this.setState({
                sortedEmps: this.props.currentState.employee,
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentState.employee !== prevProps.currentState.employee) {
            this.setState({
                sortedEmps: this.props.currentState.employee,
            });
        }
    }


    onSortName = () => {
        let sortEmp = [];
        if (!this.state.ordered) {
            sortEmp = this.props.currentState.employee.sort((a, b) => {
                let nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });

            this.setState({
                ordered: !this.props.currentState.ordered,
                sortedEmps: sortEmp,
            });
        }
        else if (this.state.ordered) {
            sortEmp = this.props.currentState.employee.sort((a, b) => {
                let nameA = a.name.last.toLowerCase(),
                    nameB = b.name.last.toLowerCase();
                if (nameA > nameB) return -1;
                if (nameA < nameB) return 1;
                return 0;
            });

            this.setState({
                ordered: this.props.currentState.ordered,
                sortedEmps: sortEmp,
            });
        }


    };

    onSortDOB = () => {
        let sortEmp = [];

        if (!this.state.currentSort) {
            sortEmp = this.props.currentState.employee.sort((a, b) => {
                let nameA = a.dob.date,
                    nameB = b.dob.date;
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
            this.setState({
                currentSort: !this.props.currentState.currentSort,
                sortedEmps: sortEmp,
            });
        }
        else if (this.state.currentSort) {
            sortEmp = this.props.currentState.employee.sort((a, b) => {
                let nameA = a.dob.date,
                    nameB = b.dob.date;
                if (nameA > nameB) return -1;
                if (nameA < nameB) return 1;
                return 0;
            });
            this.setState({
                currentSort: this.props.currentState.currentSort,
                sortedEmps: sortEmp,
            });

        }

    };

    render() {

        return (
            <div>

                <Table striped bordered hover responsive="sm">
                    <thead className="text-center">
                        <tr>
                            <th id="pic">Profile Picture</th>
                            <th id="name" onClick={this.onSortName} className="name">Name</th>
                            <th id="phone">Phone</th>
                            <th id="email">Email </th>
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
                        )};</tbody>
                </Table>

            </div>
        );
    }
}
export default DataTable;