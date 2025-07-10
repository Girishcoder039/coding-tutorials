import React, { Component } from "react";

export class SmallCard extends Component {
    render() {
        const { title, body, children, image } = this.props;

        return (
            <div>
                <h1>{title}</h1>
                {body}
                <br/>
                <button>{children}</button>
                <img src={image} alt='nope' width="50px" height="50px"></img>
            </div>
        );
    }
}

export default SmallCard;