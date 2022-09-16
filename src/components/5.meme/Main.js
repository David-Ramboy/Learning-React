import React from "react";
import MemeData from '../memeData'

export default function Main(){
    const [meme, setmeme] = React.useState({topText: '', bottomText: '', randomImage: "https://i.imgflip.com/9vct.jpg"})

    const [allmemeImage, setAllmemeImage] = React.useState(MemeData.data.memes)

    // const memeData = MemeData.data.memes
    // const [memeImage, setMemeImage] = React.useState('')
    function handleOnClick(){
        // let randomMeme = Math.floor(Math.random() * memeData.length)
        let randomImageMeme = Math.floor(ma)
        console.log(allmemeImage)
        // setMemeImage((prevUrl) => {
        //      return memeData[randomMeme].url
        // })
        // let imageHolder = document.querySelector('.image-holder')

    }

    const [firstInput, setFirstInput] = React.useState('')
    function handleFirstInput(e){
        console.log(e)
    }

    return(
        <main>
            <div className="main--container">
                <div className="main--input">
                    <input className="first--input" type="text" onChange={handleFirstInput}/>
                    <input className="second--input" type="text" />
                </div>
                <button onClick={handleOnClick} className="main--button">Get a new meme image </button>
            </div>
            <div  className="image--holder" style={{backgroundImage:`url(${meme.randomImage})`}}>
                <p className="upper--text">Shut up</p>
                <p className="lower--text">And take my money</p>
            </div>
        </main>
    )
}