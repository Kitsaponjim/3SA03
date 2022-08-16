import React from "react";
import CharacterCard from "./CharacterCard";

export default function WordCrad(props) {

    const activationHandler = c =>{ console.log(`${c} has been acticated.`)}

    return (
        <div>
            {Array.from(props.value).map((c, i) =><CharacterCard value={c} key={i} activationHandler={activationHandler}/>)}
        </div>
    )
}