import React from "react";

const Grandchild = ({lastChild}) => {
    return (
        <div>
            <h1>This is parent grand child {lastChild}</h1>
        </div>
    );
}
export default Grandchild;