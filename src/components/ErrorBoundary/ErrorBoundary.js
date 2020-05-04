import React,{Component} from './node_modules/react'

class ErrorBoundary extends Component{
    state ={
        hasError:false,
        errorMessage:''
    }
    componentDidCatch = (error , info) =>{
        this.setState({
            hasError : true,
            errorMessage : error
            
        })
    }
    render(){
        if(this.state.hasError){
            return <h1>{this.error}</h1> 
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary