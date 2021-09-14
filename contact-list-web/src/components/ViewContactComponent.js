import React, { Component } from 'react';
import ContactService from '../services/ContactService';

class ViewContactComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            contact: {

            }     
        }

    }

    
    componentDidMount() {
        // Making the REST API call
        ContactService.getContactById(this.state.id).then( res => {
            this.setState({contact: res.data});
        });

    }

    backHome() {
        this.props.history.push('/contacts');
    }
    
    render() {
        return (
            <div className="main">
                <h2 className="text-center">View Contact Details</h2>
                <div className="card col-md-6 offset-md-3">
                    <div className="card-body">
                        <div className="row d-flex justify-content-between">
                            <label>First Name: </label>
                            <div> {this.state.contact.firstName}</div>
                        </div>
                        <div className="row d-flex justify-content-between">
                            <label>Last Name: </label>
                            <div> {this.state.contact.lastName}</div>
                        </div>
                        <div className="row d-flex justify-content-between">
                            <label>Email: </label>
                            <div> { this.state.contact.email}</div>
                        </div>
                        <div className="row d-flex justify-content-between">
                            <label>Details: </label>
                            <div> .... </div>
                        </div>

                        <div className="text-center">
                            <button className="btn btn-info" style={{marginTop: 30}} onClick={this.backHome.bind(this)}>Back</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewContactComponent;