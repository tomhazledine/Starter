import React from "react";

import { ExampleProvider } from "../state/example-context";

const StateWrapper = ({ children }) => {
    return <ExampleProvider>{children}</ExampleProvider>;
};

export default StateWrapper;
