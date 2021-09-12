import React, { Component } from 'react';
import ContactService from '../services/ContactService';

class ListContactComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        ContactService.getContacts().then((res) => {
            this.setState({ contacts: res.data });
        });
    }

    render() {
        return (
            <div className="main">
                <h2 className="text-center">Contact List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>E-Mail</th>
                                <th>Actions</th>
                            </tr>
                        </thead>  
                        <tbody>
                            {
                                this.state.contacts.map(
                                    contact => 
                                    <tr key = {contact.id}>
                                        <td> {contact.firstName} </td>
                                        <td> {contact.lastName} </td>
                                        <td> {contact.email} </td>
                                    </tr>
                                )
                            }



                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>


                </div>
                
            </div>
        );
    }
}

export default ListContactComponent;