import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../../redux/features/counter/counterSlice";
import { useState } from "react";


const SafeDuya = () => {
    const {count} = useSelector((state) => state.counter); 
    const dispatch = useDispatch();
    const [buttonDisable, setButtonDisable] = useState(false);

    const handleButton = () => {
        if (count === 6){
            setButtonDisable(true);
        }
    };

    return (
        <div>
            <button onClick={() =>{dispatch(increment ()); handleButton();}}  disabled={buttonDisable}>আল্লাহুম্মা আজিরনি মিনান্নার</button>
            <h1>{count}</h1>
        </div>
    );
};

export default SafeDuya;