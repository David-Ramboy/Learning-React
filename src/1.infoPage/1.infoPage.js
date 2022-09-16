import React, {useState} from 'react'
import Nav from './components/1.InfoPage/Navbar'
import Main from './components/1.InfoPage/Main'

export default function App(){
    const [lightMode, setLightMode] = useState({headerNav: "",headerMain:"", circle:"", parag:"", container:"",switch:"",toggle: true})
    const handlePageMode = function(){
        setLightMode(prev => {
            if(prev.toggle){
                return{...prev,
                    headerNav: "",headerMain:"", circle:"", parag:"", container:"",switch:"",
                toggle: false
                }
            }else{
                return {
                    ...prev,
                    parag:"parag--lightmode",
                    switch:"switch--lightmode",
                    circle: "circle--lightmode",
                    headerNav: "nightmode--headerNav",
                    container:"container--lightmode",
                    toggle: true

                }
            }
           
        })
    }
    console.log(lightMode.toggle)
    return(
        <>
            <Nav lightMode={lightMode} handlePageMode={handlePageMode} />
            <Main lightMode={lightMode}/>
        </>
    )
}
