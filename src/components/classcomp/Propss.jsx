import React from "react";
import PropssChild from "./Propsschild";

const Propss = () => {
    const data = "thanos";
    return (
        <div>
            <h1>Props in React</h1>
            {/* <PropssChild childName={data}/> */}
            <PropssChild childName={data}/>
        </div>
    );
};
export default Propss;