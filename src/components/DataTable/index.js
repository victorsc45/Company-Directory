import React, { Component } from 'react';




class DataTable extends Component {

    state = {
        ordered: true,
        ascending: true,
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
        if (this.props.currentState.employee.ordered) {
            sortEmp = this.props.currentState.employee.sort((a, b) => {
                let nameA = a.name.last.toLowerCase(),
                    nameB = b.name.last.toLowerCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
        } else {
            sortEmp = this.props.currentState.employee.sort((a, b) => {
                let nameA = a.name.last.toLowerCase(),
                    nameB = b.name.last.toLowerCase();
                if (nameA > nameB) return -1;
                if (nameA < nameB) return 1;
                return 0;
            });
        }
        this.setState({
            ordered: !this.props.currentState.employee.ordered,
            sortedEmps: sortEmp,
        });
    };

    onSortDOB = () => {
        let sortEmp = [];

        if (this.props.currentState.ascending) {
            sortEmp = this.props.currentState.employee.sort((a, b) => {
                let nameA = a.dob.date,
                    nameB = b.dob.date;
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
        }
        if (!this.props.currentState.ascending) {
            sortEmp = this.props.currentState.employee.sort((a, b) => {
                let nameA = a.dob.date,
                    nameB = b.dob.date;
                if (nameA > nameB) return -1;
                if (nameA < nameB) return 1;
                return 0;
            });
        }
        this.setState({
            ascending: !this.props.currentState.employee.ascending,
            sortedEmps: sortEmp,
        });
    };

    render() {
        return (
            <div>

                <table striped bordered hover responsive>
                    <thead className="text-center">
                        <tr>
                            <th id="pic">Profile Picture</th>
                            <th id="name" onClick={this.onSortName} className="name">Name </th>
                            <th id="phone">Phone</th>
                            <th id="email">Email </th>
                            <th id="dob" onClick={this.onSortDOB} className="dob">date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.currentState.empFilter.map((emp) => {
                            return (
                                <tr key={emp.id}>
                                    <td className="align-middle">
                                        <img src={emp.picture.large} alt={emp.name.last} />
                                    </td>
                                    <td className="align-middle">
                                        {emp.name.first} {emp.name.last}
                                    </td>
                                    <td className="align-middle">

                                        {emp.phone}
                                    </td>
                                    <td className="align-middle">
                                        {emp.email}
                                    </td>
                                    <td className="align-middle">{new Date(emp.dob.date).toLocaleDateString()}</td>
                                </tr>
                            );
                        }
                        )};
                </tbody>
                </table>

            </div>
        );
    }
}
export default DataTable;