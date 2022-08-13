import React from "react";
import CharacterCard from "./CharacterCard";

export default function WordCrad(props) {
    return (
        <div>
            {Array.from(props.value).map((c, i) =><CharacterCard value={c} key={i}/>)}
        </div>
    )
}