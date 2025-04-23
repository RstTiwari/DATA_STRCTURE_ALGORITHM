import "./App.css";
import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import UseTransition from "./Use_Transition/index";
import Test from "./Test";

function App() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef();
    const increaseCounter = () => {
        setCount((count) => count + 1);
    };
    const start = () => {
        intervalRef = setInterval(() => {
            increaseCounter();
        }, 1000);
    };

    const stop = () => {
        clearInterval(intervalRef);
    };
    const reset = () => {
        setCount(0);
    };
    return (
        <div>
            <p>{count}</p>
            <br />

            <button onClick={() => start()}>START</button>
            <button>STOP</button>
            <button onClick={() => reset()}>RESET</button>
        </div>
    );
}
export default App;
