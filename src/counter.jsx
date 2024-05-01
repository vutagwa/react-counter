import React, {useState} from "react"

function Counter(){
const [count, setCount] = useState(0);
const increment= () =>{
    setCount(count+1)
}
const decrement= () =>{
    setCount(count-1)
}

return(

    <>
    <div className="comp">
        <h2>count: {count}</h2>
    <button onClick={increment}>Increament</button>
    <button onClick={decrement}>Decreament</button>

    </div>
    </>
)

}
export default Counter