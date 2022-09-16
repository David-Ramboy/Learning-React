import React from "react";
import Joke from './components/Joke'

export default function App(){
    return(
        <div>
            <Joke  punchLine=" It’s hard to explain puns to kleptomaniacs because they always take things literally."
                    isPun = {true}
                    upvotes = {10}
                    downvotes = {2}
                    commments = {[{author:"", body:"", title:""}]}
            />

            <Joke setup=" I got my daughter a fridge for her birthday." punchLine=" I can't wait to see her face light up when she opens it."/>
            <Joke setup=" How did the hacker escape the police?" punchLine=" He just ransomware!"/>
            <Joke setup=" Why don't pirates travel on mountain roads?" punchLine=" Scurvy."/>
            <Joke setup=" Why do bees stay in the hive in the winter?" punchLine=" Swarm."/>
        </div>
    )
}