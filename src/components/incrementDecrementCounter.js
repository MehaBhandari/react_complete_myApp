import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementNumber, decrementNumber } from "../action";

export default function Counter() {
    const counterValue = useSelector( (state) => state.changeInputNumber);
    const dispatch = useDispatch();
    return (
        <>
            <h2>Increment/Decrement Counter</h2>
            <h4>Using Redux and React</h4>

            <div>
                <button onClick={()=>dispatch(incrementNumber())}> + </button>
                <input type="text" value={counterValue} />
                <button onClick={()=>dispatch(decrementNumber())}> - </button>
            </div>
        </>
    )
}