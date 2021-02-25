// Code CoordinatesButton Component Here
import React from "react";

export default function CoordinatesButton(props) {

    const logCoordinates = (e) => {
        const coords = [e.clientX, e.clientY]
        props.onReceiveCoordinates(coords)
    }

    return (
        <div>
            <button onClick={logCoordinates}>Coordinates</button>
        </div>
    )

}