import React, { Component } from "react";

export default class SerchBar extends Component {
    state = { term: "" };
    onFormSubmit=(event)=>      {
        event.preventDefault();
       this.props.onSubmit(this.state.term);

    };

    render() {
        return (
            <div className="ui segment">
                <form action="" className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="filed">
                        <label htmlFor="searchbar">Image Search</label>
                        <input
                            type="text"
                            id="searchbar"
                            onChange={(e) => {
                                this.setState({ term: e.target.value });
                            }}
                            value={this.state.term}
                        />

                    </div>
                </form>
            </div>
        );
    }
}
