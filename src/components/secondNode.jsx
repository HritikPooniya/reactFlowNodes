import React from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";
const SecondNode = (data) => {
  const id = data.id;
  const { setNodes } = useReactFlow();
  return (
    <>
      {/* <NodeResizer minWidth={100} minHeight={30} /> */}
      {/* <NodeToolbar isVisible={data.toolbarVisible} position={data.toolbarPosition}>
        <button>delete</button>
        <button>copy</button>
        <button>expand</button>
      </NodeToolbar> */}

      <div
        style={{
          border: "1px solid black",
          width: "15rem",
          background: "white",
          borderRadius: "3px",
        }}
      >
        <div
          className="px-2 d-flex justify-content-between align-items-center ps-2"
          style={{
            background: "rgb(233,90,100)",
            borderRadius: "3px 3px 0 0",
            color: "#FFF",
          }}
        >
          What You Want?
          <i
            className="ms-5 fa fa-close"
            style={{ cursor: "pointer", color: "white" }}
            title="Delete Node"
            onClick={() =>
              setNodes((prev) => prev.filter((node) => node.id !== id))
            }
          ></i>
        </div>

        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "5rem" }}
        >
          <div className="px-2 text-center" style={{ color: "grey" }}>
            Tell me your Problem! I can help to solve it.
          </div>
        </div>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    </>
  );
};

export default SecondNode;
