import React, { Component} from "react";

export default class DelayedButton extends Component {

    delay = (e) => {
        e.persist()
        const callback = () => this.props.onDelayedClick(e)
        setTimeout(() => {callback()}, this.props.delay)
    }

    render(){
        return(
            <div>
                <button onClick={ this.delay }>Delayed</button>
            </div>
        )
    }
}

