import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import "./styles/Phonetic.css"

export default function Phonetic (props){
    return(
        <div className="Phonetic">
            <p>{props.phonetic.text}</p>
            <ReactAudioPlayer src={props.phonetic.audio} controls={true} />
        </div>
    );
}