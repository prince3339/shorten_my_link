import React, { Component } from 'react';

class LinkCreate extends Component {
    handleSubmit() {
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label className="">
                        Link to shorten
                    </label>
                    <input className="form-control" /> 
                </div>

                <button className="btn btn-primary">Shorten!</button>
            </form>
        );
    }
}

export default LinkCreate;