import React from "react";
import "./Meaning.css";

export default function Meaning(props){
    return (
        <div className="Meaning">
            <h3># {props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index){
                return (
                    <div key={index}>
                        <p className="definition">
                            <strong>{index + 1}:</strong> {definition.definition}
                        </p>
                        <p className="example"><em>"{definition.example}"</em></p>
                    </div>
                );
            })}
        </div>
    );
}