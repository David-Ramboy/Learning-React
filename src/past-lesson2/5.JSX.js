//JSX - javascript xhml

// const h1 = document.createElement('h1')
// h1.textContent = "This is imperative way to program "
// h1.className = "header"
// document.getElementById('root').append(h1)
// console.log(h1)
// <h1 class:header;>

// const element = <h1 className="header">Hello,ReactWorld</h1>;
// console.log(element)
// {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}

// ReactDOM.render(element, document.getElementById('root'))
// const element = (<div><h1>This is JSX</h1><p>this is a paragraph</p></div>)
// console.log(element)

// ReactDOM.render(element, document.getElementById('root'))

const element = (
    <nav>
        <h1>My Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(element, document.getElementById('root'))
