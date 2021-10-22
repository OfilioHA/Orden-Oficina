import { useState } from "react";
import { Link } from "react-router-dom";
import '../../assets/sass/index.scss';

export function MenuItemHome(props){
    const { url, image } = props;
    const title = url.charAt(1).toUpperCase() + url.slice(2);;
    
    return(
        <Link to={url} className="my-3 col-sm-6 col-md-3">
            <div className="card card-custom">
                <div className="card-body card-custom">
                    <img className="img-fluid" src={image} alt="" />
                </div>
                <div className="card-hover">
                    <h3>{title}</h3>
                </div>
            </div>
        </Link>
    );
}