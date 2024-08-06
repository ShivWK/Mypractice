function Counter(){
    
    let [counter, setCounter] = React.useState(0);

    const increment = ()=> setCounter(counter + 1);

    return (
        <div>
            <p>Count: {counter}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
    // return React.createElement(
    //     "div", 
    //     null, 
    //     React.createElement("p",  null, `count: ${counter}`), 
    //     React.createElement("button" , {onClick : increment}, 'Increment')
    // )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(React.createElement(Counter));
root.render(<Counter/>);