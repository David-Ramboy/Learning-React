//Imperative
const h1 = document.createElement('h1')
h1.textContent = "This is imperative way to program "
h1.className = "header"
document.getElementById('root').append(h1)

//declarative
ReactDOM.render(<h1>Hello,ReactWorld</h1>, document.getElementById('root'))
