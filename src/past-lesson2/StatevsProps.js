
    Greeting('David')

    function Greeting(name){
    
    let date = new Date()
    let time = date.getHours() % 12 || 12
    const ampm = (date.getHours() >= 12) ? 'PM' : 'AM'

    let timeofday = time + ampm ;
    let response;
    if(time >= 4 && time < 12){
        if(ampm === 'AM'){
            response = 'morning'
        }
        
    }
    if(time >= 12 && time < 5){
        console.log(true)

        if(ampm === 'PM'){
            response = 'Afternoon'
        }

    }
    if(time >= 5 && time < 8){
        console.log(true)

        if(ampm === 'PM'){
            response ="Evening"
        }

    }
    if((time >= 8 && time < 12 )|| time < 4){
        console.log(true)

        if(ampm === 'AM' || ampm === 'PM'){
            response = 'Night'
        }
    }
    
    return console.log(`Good ${response} ${name} it is currently ${timeofday}`)
    }
/*
1. How would you describe the concept of "state"?
is like a variable inside a function we can mutable
    - A way for React to o remember saved values from within a component.
    this is similar to declaring variable from within a component,
    with a few added bonuses 

2. When would you want to use props instead of state?
when you have immutable parameter like object so we need to use props
    Anytime you want to pass data into a component so that
    component can determine what will get displayed on the screen.

3. When would you want to use state instead of props?
when i want to store data to a variable to mutable it and later use is
    -Anytime you want a component to maintain some values from within the component.(And "remember" those values even when React re-renders the component).

4. What does "immutable" mean? Are props immutable? Is state immutable?
    -Unchanging.Props are immutable. nStae is mutable
immutable is must not be changed. props is immutable and state is mutable   
 */