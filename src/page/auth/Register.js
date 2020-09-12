import React, { Component } from 'react'
import {SignUp} from "../../store/actions/LoginAction"
import { connect } from 'react-redux';

class Register extends Component {
    state = {
        email: "",
        password: ""
    }
    Onchange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }
    OnSignUp = (e) => {
        e.preventDefault();    
        this.props.SignUp({...this.state})     
        this.setState({
            email: "",
            password: ""
        })}
    
    render() {
        return (
            <div className="form-container " >
            <div className="container" >
                <div className="row">
                    <div className="col-md-6 col-sm-10  offset-3 offset login-form register_border">
                        <h3>Register fom From</h3>                            
                        <form>
                        <div className="form-group">
                                    <input name="email" type="text" className="form-control" placeholder="Your Email *"
                                        value={this.state.email} onChange={this.Onchange} />
                                </div>
                                <div className="form-group">
                                    <input name="password" type="password" className="form-control" placeholder="Your Password *"
                                        value={this.state.password} onChange={this.Onchange} />
                                </div>
                            <div className="form-group">
                                <button onClick={this.OnSignUp} type="button" className="btn btn-outline-success  pl-5 pr-5">Sign Up</button>

                            </div>                          
                        </form>
                    </div>
                </div>
            </div>
        </div >
        )
    }
}
const mapDispatchToProps = {
    SignUp
  };
export default connect("", mapDispatchToProps)(Register);
