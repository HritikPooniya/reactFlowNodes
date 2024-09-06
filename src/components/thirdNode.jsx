import React from "react";
import { Handle, NodeResizer, Position, useReactFlow } from "@xyflow/react";
const ThirdNode = (value) => {
  const id = value.id;

  const { setNodes } = useReactFlow();

  return (
    <>
      <NodeResizer minWidth={100} minHeight={30} />
      <div
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          background: "white",
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center px-2"
          style={{
            background: "rgb(218, 148, 172)",
            borderRadius: "5px",
            color: "#FFF",
          }}
        >
          Awesome work
          <i
            className="ms-3 fa fa-close"
            title="delete node"
            style={{ cursor: "pointer", color: "white" }}
            onClick={() =>
              setNodes((prev) => prev.filter((node) => node.id !== id))
            }
          ></i>
        </div>

        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    </>
  );
};

export default ThirdNode;
