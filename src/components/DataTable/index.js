import React, { Component } from 'react';




class DataTable extends Component {
    state = {
        name: "",
        dob: "",
    };





    getSortName() {
        const sortedEmps = this.props.currentState.emps;
        sortedEmps.sort((a, b) => (

            a.emp.name.last.toLowerCase() > b.emp.name.last.toLowerCase() ? 1 : -1

        ));
        if (!this.setState({ name: 'asc' })) {
            this.setState({ name: 'desc' })
        }
        else {
            this.setState({ name: 'asc' });
        };
        this.props.onSort(sortedEmps);

    }


    render() {
        return (
            <div>
                <p>
                    sort by name!
            </p>
                {/* {this.getSortName()} */}
                <table striped bordered hover responsive>
                    <thead className="text-center">
                        <tr onClick={this.tableHeaderClick}>
                            <th id="pic">Profile Picture</th>
                            <th id="name">Name </th>
                            <th id="phone">Phone</th>
                            <th id="email">Email </th>
                            <th id="dob">Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.currentState.employee.map((emp) => {
                            return (
                                <tr key={emp.id}>
                                    <td className="align-middle">
                                        <img src={emp.picture.medium} alt={emp.name.last} />
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