import React from "react";
import ReactDOM from "react-dom";

import Example from "./components/Example";
import StateWrapper from "./components/StateWrapper";

import "../scss/main.scss";

const App = ({}) => {
    return (
        <StateWrapper>
            <div className="example-wrapper stack--large">
                <div className="app__wrapper stack--large">
                    <h1>Example App</h1>
                    <div className="stack--small">
                        <p>
                            An example application with Webpack, React, and
                            SASS.
                        </p>
                        <Example />
                    </div>
                </div>
            </div>
        </StateWrapper>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
