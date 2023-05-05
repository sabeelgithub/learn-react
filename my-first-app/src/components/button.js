import React from "react";
import '../components/Tools.css'

class Button extends React.Component {
    render () {
        const {
            onAgain
        } = this.props
        return (
            <button onClick={onAgain} className="refresh">Refresh</button>
        )
    }
}
export default Button