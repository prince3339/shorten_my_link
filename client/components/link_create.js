import React, { Component } from 'react';

class LinkCreate extends Component {
    handleSubmit(event) {
        event.preventDefault();
        
        console.log(this.refs.link.value);
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

                <button className="btn btn-primary">Shorten!</button>
            </form>
        );
        //here ref works like angular ng-model
    }
}

export default LinkCreate;