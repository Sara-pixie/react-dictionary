import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results (props){
    if (props.info){
        console.log(props.info);
        return (
        <div className="Results">
            <h2>{props.info[0].word}</h2>
            {props.info[0].meanings.map(function (meaning, index){
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                )
            })}
        </div>
    );
    } else {return null;}
}