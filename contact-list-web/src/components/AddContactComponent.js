import React, { Component } from 'react';

class AddContactComponent extends Component {
        
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }

        // Binding form handler
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.addContact = this.addContact.bind(this);

    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value})
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value})
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value})
    }

    addContact = (e) => {
        e.preventDefault();
        let contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };
        console.log('contact = ' + JSON.stringify(contact));
    }

    cancel() {
        this.props.history.push('/contacts');

    }
    
    render() {
        return (
            <div className="main">
                <h2 className="text-center">Add Contact</h2>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.addContact}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

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