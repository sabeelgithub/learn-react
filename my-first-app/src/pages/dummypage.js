import React from 'react'

class Dummypage extends React.Component{
    componentDidMount() {
        console.log('componentDidMount',this.props.name)
    }
    componentWillUnmount() {
        console.log('componentWillUnmount',this.props.name)
    }
    render() {
        return (
            <div>
            {this.props.name}
            </div>
        )
    }
}
  

export default Dummypage