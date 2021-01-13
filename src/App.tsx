import * as React from "react";
import RecursiveExample from "./Recursive/RecursiveExample";
import IterativeExample from "./Iterative/IterativeExample";

const App = () => {

    return (
        <div>
            <RecursiveExample />
            <br/>
            <br/>
            <br/>
            <IterativeExample />
        </div>
    );
};

export default App;