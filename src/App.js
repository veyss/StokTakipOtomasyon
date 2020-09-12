import React, { Component } from 'react'
import './App.css';
import "./assets/style.css"

import { Route, Switch,withRouter } from 'react-router-dom';
import Header from "./components/Header"
import Anasayfa from "./page/Anasayfa"
import Urunekle from "./page/Urunekle"
import Uruncikar from "./page/Uruncikar"
import Urunlistesi from "./page/Urunlistesi"
import Login from "./page/auth/Login"
import Register from "./page/auth/Register"
import {initAuth} from "./herpers/initAuth"
import PrivateRoute from './page/auth/PrivateRoute'


class App extends Component {
  componentDidMount() {    
    initAuth(this.props)
  }
  render() {
    const durum = localStorage.getItem("token")
    return (
      <div className="fruid">
        {durum && <Header />}

        <Switch>
          <Route exact path='/auth' component={Login}></Route>
          <Route exact path='/register' component={Register}></Route>
          <PrivateRoute exact path='/' component={Anasayfa}></PrivateRoute>
          <PrivateRoute exact path='/urun_ekle' component={Urunekle}></PrivateRoute>
          <PrivateRoute exact path='/urun_cikisi' component={Uruncikar}></PrivateRoute>
          <PrivateRoute exact path='/urun_listesi' component={Urunlistesi}></PrivateRoute>
     
        </Switch>
      </div>
    )
  }
}
export default  withRouter(App);



