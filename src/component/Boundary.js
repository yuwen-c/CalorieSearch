import React, {Component} from 'react';

class Boundary extends Component {
    constructor(props){   //must use 'props'
        super(props);
        this.state = {
            hasError:  false,
        }
    }

    // if there is an error...catch it
    componentDidCatch(error, errorInfo){
        console.log('sth went wrong',error, errorInfo); 
        this.setState({hasError: true});
    }

    render(){
        if (this.state.hasError === true){
            return(
                <h1>sth goes wrong.</h1>
            )
        }
        return this.props.children
    }
}


export default Boundary;