import React, { createContext, useContext, useReducer } from "react";

import { exampleReducer } from "./example-reducer";

const ExampleContext = createContext();

export const ExampleProvider = props => {
    const [example, dispatch] = useReducer(exampleReducer, { value: 0 });
    const value = [example, dispatch];
    return <ExampleContext.Provider value={value} {...props} />;
};

export const useExample = () => {
    const context = useContext(ExampleContext);
    if (!context) {
        throw new Error("useExample must be used within a ExampleProvider");
    }
    return context;
};
