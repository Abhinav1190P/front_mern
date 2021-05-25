import React, { Component } from 'react'
import '../css/app.css'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
 class Home extends Component {

state = {
    name:'',
    lastname:''
}

nameHanle = (event) =>{
event.preventDefault();
this.setState({
    name: event.target.value
})

}    
lastnameHandle = (event) =>{
    event.preventDefault();
    this.setState({
        lastname: event.target.value
    })
}
submitHandle = (event) =>{
event.preventDefault();
this.props.postuser(this.state)

}


    render() {
   
        return (
            <div className ="main">
                <form>
    <input type = "text" value = {this.state.name} onChange={this.nameHanle} placeholder="Enter name"/>
    <br/>
    <br/>
    <input type = "text" value={this.state.lastname} onChange={this.lastnameHandle} placeholder = "Enter lastname"/><br/>
    <br/>
    <br/>
    <button onClick={this.submitHandle} type="submit" >Submit</button>
</form>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    
    return{
        data: state.users
    }
}


export default connect(mapStateToProps,actions)(Home);