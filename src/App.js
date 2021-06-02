import "./App.css";
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment } from "./Redux/Actions/action";

function App() {
    const value = useSelector((state) => state.count)
    console.log(value)
    const dispatch=  useDispatch()
    return (
        <div className="App">
          <button onClick={()=>dispatch(increment)} >+</button> 
          <h1> count:  {value}</h1> 
          <button onClick={()=>dispatch(decrement)} >-</button>
        </div>
    )
}

export default App;
