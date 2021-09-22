import React, { Component } from 'react';
import ContactService from '../services/ContactService';

class AddContactComponent extends Component {
        
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: '',
            label: '',
            notes: ''
        }

        // Binding form handler
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeLabelHandler = this.changeLabelHandler.bind(this);
        this.changeNotesHandler = this.changeNotesHandler.bind(this);
        this.saveOrUpdateContact = this.saveOrUpdateContact.bind(this);
    }

    componentDidMount() {

        if (this.state.id === 'new') {
            document.querySelector(".first-field").focus();
            return;
        } else {
            ContactService.getContactById(this.state.id).then(res=> {
                let contact = res.data;
                this.setState({
                    firstName: contact.firstName,
                    lastName: contact.lastName,
                    email: contact.email,
                    label: contact.label,
                    notes: contact.notes
                });
            });
            document.querySelector(".first-field").focus();
        }
        
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changeLabelHandler = (event) => {
        this.setState({label: event.target.value});
    }

    changeNotesHandler = (event) => {
        this.setState({notes: event.target.value});
    }

    saveOrUpdateContact = (e) => {
        e.preventDefault();
        let contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            label: this.state.label,
            notes: this.state.notes
        };
        console.log('contact = ' + JSON.stringify(contact));

        if (this.state.id === 'new') {
            // add
            ContactService.saveContact(contact).then(res => {
                if (res.status === 200) {
                    this.props.history.push('/contacts');
                } else if (res.status === 404) {
                    console.log(res.data);
                } else if (res.status === 500) {
                    console.log(res.data);
                }
            });      
        } else {
            // update
            ContactService.updateContact(contact, this.state.id).then(res => {
                if (res.status === 202) {
                    this.props.history.push('/contacts');
                } else if (res.status === 404) {
                    console.log(res.data);
                } else if (res.status === 500) {
                    console.log(res.data);
                }
            });
        }

    }

    cancel() {
        this.props.history.push('/contacts');
    }
    
    render() {
        return (
            <div className="main">
                <h2 className="text-center">{ this.state.id === 'new' ? 'Add' : 'Update' } Contact</h2>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control first-field" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Label: </label>
                                        <input placeholder="Label" name="label" className="form-control" value={this.state.label} onChange={this.changeLabelHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Notes: </label>
                                        <input placeholder="Notes" name="notes" className="form-control" value={this.state.notes} onChange={this.changeNotesHandler} />
                                    </div>

                                    <div className="d-flex justify-content-between">
                                    <button className="btn btn-success" onClick={this.saveOrUpdateContact}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AddContactComponent;