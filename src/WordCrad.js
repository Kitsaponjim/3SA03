import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import _, { attempt } from "lodash";

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false,
        timer: 0,
    }
}

export default function WordCrad(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value))
    const [results, setResults] = useState("")

    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        let interval;
        if (isActive) {
          interval = setInterval(() => {
            setCount((prev) => prev + 1);
          }, 1000);
        } else if (!isActive && count !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [count, isActive]);

    function toggle(val) {
        setIsActive(val);
    }

    const reset = () => {
        setState({ ...state, guess: "", attempt: state.attempt + 1 });
        setCount(0)
        setResults("")
      }

    const activationHandler = c =>{ 
        console.log(`${c} has been activated.`)
            let guess = state.guess + c
            setState({...state, guess})
            toggle(true)

            if(guess.length == state.word.length){
                if(guess == state.word){
                    console.log('yeah!')
                    setState({...state, guess:'', completed:true})
                    toggle(false);
                    setResults("!!!!YEAH!!!!")
                }else {
                    console.log('reset')
                    setState({...state, guess:'', attempt: state.attempt + 1})
                    toggle(false);
                    setResults("Pleace try again")
                }
            }
        }
    

    return (
        <>
        {results != "" &&(
            <>
                <div>{results}</div>
                <div>Time is {count} seconds</div>
                <button onClick={reset}>RESET</button>
            </>
        )}
                <div>
                    {state.chars.map((c, i) =><CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>)}
                </div>
        <h3>
            {count} Second
        </h3>
        </>
    )
}