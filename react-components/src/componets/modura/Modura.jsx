import React from "react";
import './Modura.css'

function Modura(props) {
    if (props.direction === "top")
    {
        return (
            <>
                <div className="bg-yellow top"></div>
            </>
        )
    }
    else if (props.direction === "bottom")
    {
        return (
            <>
                <div className="bg-yellow bottom"></div>
            </>
        )
    }
}

export default Modura;