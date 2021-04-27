import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import "./Phonetic.css"

export default function Phonetic (props){
    return(
        <div className="Phonetic">
            <p>{props.phonetic.text}</p>
            <ReactAudioPlayer src={props.phonetic.audio} crossOrigin="" controls={true} Access-Control-Allow-Origin="*"/>
        </div>
    );
}