import React from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";
import Button from "./button";
import '../styles/index.css';

const FifthNode = (value) => {
  const id = value.id;
  const { setNodes } = useReactFlow();

  const location = Math.random() * 80;

  const providerClick = () => {
    // alert(location);

    setNodes((prevNode) => [
      ...prevNode,
      {
        id: `${prevNode.length + 1}`,
        data: { value: "hritik" },
        type: `fifthNode`,
        position: { x: location, y: location },
      },
    ]);
  };

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          width: "10rem",
          background: "white",
          borderRadius: "5px",
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center px-2"
          style={{
            background: "rgb(137, 207, 240)",
            borderRadius: "5px 5px 0 0",
            color: "#FFF",
          }}
        >
          New Content
          <i
            className=" fa fa-close"
            title="Delete Node"
            style={{ cursor: "pointer" }}
            onClick={() =>
              setNodes((prev) => prev.filter((node) => node.id !== id))
            }
          ></i>
        </div>

        <div className="my-3 mx-auto text-center">
          <Handle type="target" position={Position.Left} />
          <button className="buttonEffect" >Yes</button>
          <Handle
            type="source"
            accessKey="1"
            about="yes"
            isConnectableEnd
            position={Position.Right}
          />

          <Button />
          <br />
        </div>
      </div>
    </>
  );
};

export default FifthNode;
