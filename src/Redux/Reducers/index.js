import { DECREMENT, INCREAMENT } from "../Actions/action";
import { counters } from "../counters";


  const reducer = (state =counters,action )=>{
     switch (action.type) {
         case INCREAMENT :
          return {...state, count:state.count+1};   
          case DECREMENT:
          return {...state, count:state.count-1};       
     default:
        return state;    
     }
    
};
export default reducer