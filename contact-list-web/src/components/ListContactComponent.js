import React, { Component } from 'react';
import ContactService from '../services/ContactService';

class ListContactComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contacts: []
        }

        this.addContact = this.addContact.bind(this);
        this.editContact = this.editContact.bind(this);
    }

    editContact(id) {
        this.props.history.push(`/add-contact/${id}`);
    }

    componentDidMount() {
        ContactService.getContacts().then((res) => {
            this.setState({ contacts: res.data });
        });
    }

    addContact() {
        this.props.history.push('/add-contact/new');
    }

    render() {
        return (
            <div className="main">
                <h2 className="text-center">Contact List</h2>
                <div className="row">
                    <button className="btn btn-success btn-add" onClick={this.addContact}>ADD CONTACT</button>
                </div>

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
                                        <td> <button className="btn btn-primary" onClick={()=> this.editContact(contact.id)}>UPDATE</button> </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>


                </div>
                
            </div>
        );
    }
}

export default ListContactComponent;