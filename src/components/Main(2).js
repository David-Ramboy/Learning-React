import React from "react";
import MemeData from '../memeData'

export default function Main(){
    const [meme, setmeme] = React.useState({topText: '', bottomText: '', randomImage: "https://i.imgflip.com/9vct.jpg"})

    // const [allmemeImage, setAllmemeImage] = React.useState(MemeData.data.memes)
    const [imgeApi, setImageApi] = React.useState([]);

    React.useEffect(()=>{
         async function getMeme(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data =  await res.json()
            setImageApi(data.data.memes)

        }
        getMeme();
    },[])
    
    function handleOnClick(){
       
        let randomImageMeme = Math.floor(Math.random() * imgeApi.length)
        console.log(imgeApi[randomImageMeme].url)
        setmeme(prevMeme => ({...prevMeme, randomImage: imgeApi[randomImageMeme].url }))
     

    }
    const [firstInput, setFirstInput] = React.useState({
        topText:"",
        bottomText:""
    })
    function handleInput(event){
        const {name, value} = event.target 
        
        setFirstInput(prev => {
            return {
                ...prev,
                [name] : value
            }
         })
    }
  
    console.log(imgeApi)
    return(
        <main>
            <div className="main--container">
                <div className="main--input">
                    <input className="first--input" type="text" name="topText" onChange={handleInput}
                    value={firstInput.topText}
                    />
                    
                    <input className="second--input" type="text" 
                    value={firstInput.bottomText}
                    name="bottomText" onChange={handleInput}
                    />
                </div>
                <button onClick={handleOnClick} className="main--button">Get a new meme image </button>
            </div>
            <div  className="image--holder" style={{backgroundImage:`url(${meme.randomImage})`}}>
                <p className="upper--text">{firstInput.topText}</p>
                <p className="lower--text">{firstInput.bottomText}</p>
            </div>
        </main>
    )
}