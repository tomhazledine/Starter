import React from "react";

import { useExample } from "../state/example-context";

const Example = ({}) => {
    const [example, dispatchExample] = useExample();

    const handleIncrement = () => {
        dispatchExample({ type: "INCREMENT" });
    };
    const handleDecrement = () => {
        dispatchExample({ type: "DECREMENT" });
    };
    const handleIncrementByFive = () => {
        dispatchExample({ type: "INCREMENT_BY_N", value: 5 });
    };

    return (
        <div>
            <h2>Example component</h2>
            <p>
                <code>{example.value}</code>
            </p>
            <button type="button" onClick={handleIncrement}>
                Increment
            </button>
            <button type="button" onClick={handleDecrement}>
                Decrement
            </button>
            <button type="button" onClick={handleIncrementByFive}>
                Increment by 5
            </button>
        </div>
    );
};

export default Example;
