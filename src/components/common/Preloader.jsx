import React from "react";
import preloader from "../../img/preloader.svg";

let Preloader = () => {
    return (
        <div className="preloader" >
            <img src={preloader} />
        </div>
    );
}

export default Preloader;