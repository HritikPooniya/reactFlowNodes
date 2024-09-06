import {
  BezierEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "@xyflow/react";
import React from "react";

export default function CustomEdge(props) {
  
  const { sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } =
    props;
  const { setEdges } = useReactFlow();

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const btncli = () => {
    setEdges(prevEdge => prevEdge.filter(prev => prev.id!== props.id))
  };
  
  return (  
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <button
          className="ms-5"
          title="Delete edge"
          style={{
            cursor: "pointer",
            color: "red",
            transform: `translate(-50%,-50%) translate(${
              labelX - 50
            }px, ${labelY}px)`,
            position: "absolute",
            zIndex: 9999,
            pointerEvents:'all'
          }}
          onClick={() => btncli()}
        >
          {" "}
          X{" "}
        </button>
      </EdgeLabelRenderer>
    </>
  );
}
