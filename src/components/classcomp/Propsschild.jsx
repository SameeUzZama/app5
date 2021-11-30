import React from "react";
import Grandchild from "./Child";

const PropssChild = ({ childName }) => {
    const newname = "loki";
    return (
        <div>
            <h1>This is {childName}</h1>
            <Grandchild lastChild={newname}/>
        </div>
    );
};
export default PropssChild;