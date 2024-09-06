import { Handle, Position } from "@xyflow/react";
import React from "react";
import '../styles/index.css';
const Button = () => {
  return (
    <>
      <Handle position={Position.Right} />
      <button className="mt-2 buttonEffect">No</button>
      <Handle  position={Position.Left} />
    </>
  );
};

export default Button;
