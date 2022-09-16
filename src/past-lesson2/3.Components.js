function MainComponent(){
    return (
        <h1>I'm learning React! starting today</h1>
    )
}

ReactDOM.render(
    <div>
        {/* the component must be pascalcase or primary case */}
        < MainComponent />
    </div>, document.getElementById('root')
)