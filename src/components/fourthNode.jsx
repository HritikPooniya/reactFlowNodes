import React, { useEffect, useState } from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";
import "../styles/index.css";
const FourthNode = (value) => {
  const id = value.id;
  const [input, setInput] = useState();
  const { setNodes } = useReactFlow();
  const [inputType, setInputType] = useState();

  useEffect(() => {
    value.data.value = input;
  }, [input]);

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          width: "14rem",
          background: "white",
          borderRadius: "5px",
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center px-2"
          style={{
            background: "#98765F",
            borderRadius: "5px 5px 0 0",
            color: "white",
          }}
        >
          Upload!
          <i
            className="ms-5 fa fa-close"
            title="delete node"
            style={{ cursor: "pointer" }}
            onClick={() =>
              setNodes((prev) => prev.filter((node) => node.id !== id))
            }
          ></i>
        </div>

        <div
          className="d-flex justify-content-center align-items-center my-2"
          style={{ height: "auto" }}
        >
          <input
            type={inputType}
            placeholder="Enter your Name"
            style={{ width: "10rem", fontSize: "14px" }}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <h6 className="mx-2 mt-3" style={{ fontSize: "14px" }}>
          Select Upload Options !
        </h6>
        <div
          className="d-flex mx-2 justify-content-between mb-2"
          style={{ cursor: "pointer" }}
        >
          <button
            className="px-4 buttonEffect1"
            onClick={(e) => setInputType("file")}
            style={{ borderRadius: "5px", fontSize: "12px" }}
          >
            files
          </button>
          <button
            className="px-4 buttonEffect1"
            onClick={(e) => setInputType("input")}
            style={{ borderRadius: "5px", fontSize: "12px" }}
          >
            Input
          </button>
        </div>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    </>
  );
};

export default FourthNode;
