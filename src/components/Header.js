import React from 'react'
import { NavLink } from "react-router-dom";
import { logout } from "../herpers/initAuth"

export default function Header() {
    const logOut = () => {
        console.log("logout çalıştı")
        logout()

    }
    return (
        <div id="navbar" className="navbar top">
            <h1 className="logo">
                <span className="text-success"><i className="fas fa-book-open"></i> 
                <NavLink activeClassName="active" exact to="/">Stok</NavLink>
                </span>Urun Takip
            </h1>
            <nav>
                <ul>
                
                    <NavLink activeClassName="active" exact to="/urun_ekle">URUN GIRISI</NavLink>
                    <NavLink activeClassName="active" exact to="/urun_cikisi">URUN_CIKISI</NavLink>
                    <NavLink activeClassName="active" exact to="/urun_listesi">URUN_LISTESI</NavLink>                 
                    <NavLink className="logOut" onClick={logOut} exact to="/auth">LogOut</NavLink>
                </ul>
            </nav>
        </div>
    )
}
