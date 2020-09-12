import React, { Component } from 'react'
import axios from "axios"

export default class Uruncikar extends Component {
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
    OnSignIn = (e) => {
        e.preventDefault();    
        console.log(this.state)
        axios.post("https://reacturunekleme.firebaseio.com/products.json",this.state)
     
        this.setState({
            email: "",
            password: ""
        })
    }
    render() {
        return (
            <div className="form-container" >
                <div className="container " >
                    <div className="row ">
                        <div className="col-md-6 col-sm-10  offset-3 offset login-form ">
                            <h3>ürün ekle </h3>
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
                                    <button onClick={this.OnSignIn} type="button" className="btn btn-outline-success pl-5 pr-5">Urun Ekle</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}