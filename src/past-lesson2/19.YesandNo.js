 //----------Using Yes or No-----------
 const [isGoingOut, setIsGoingOut] = React.useState("Yes")

 function hHandleClick(){
     setIsGoingOut((previsGoingOut) => {
        if(previsGoingOut == "Yes"){
         return "No"
        }else{
         return "Yes"
        }
     })  
 }

 //---------using Boolean-----------------

 // const [isGoingOut, setIsGoingOut] = React.useState(true)
 // function hHandleClick(){
 //     setIsGoingOut((previsGoingOut) => {
 //        if(previsGoingOut == true){
 //         return false
 //        }else{
 //         return true
 //        }
 //     })
 
 // }