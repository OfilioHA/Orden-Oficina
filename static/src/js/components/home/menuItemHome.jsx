import { useState } from "react";
import { Link } from "react-router-dom";
import aguaSvg from '../../../img/agua.svg'

export function MenuItemHome(props){
    return(
        <Link to="/agua" className="m-3">
            <div className="card card-custom">
                <div className="card-body card-custom">
                    <img className="img-fluid" src={aguaSvg} alt="" />
                </div>
                <div className="card-hover">
                    <h3>Tienda</h3>
                </div>
            </div>
        </Link>
    );
}