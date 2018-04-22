import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

class LinkCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { error: '' };
    }

    handleSubmit(event) {
        event.preventDefault();
        
        console.log(this.refs.link.value);
        Meteor.call('links.insert', this.refs.link.value, (err) => {
            if(err) {
                this.setState({ error: "Enter a valid URL" });
            }else {
                this.setState({ error: "" });
                this.refs.link.value = "";
            }
            console.log(err);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label className="">
                        Link to shorten
                    </label>
                    <input ref="link" 
                           className="form-control" /> 
                </div>
                <div className="text-danger">
                    { this.state.error }
                </div>
                <button className="btn btn-primary">Shorten!</button>
            </form>
        );
        //here ref works like angular ng-model
    }
}

export default LinkCreate;