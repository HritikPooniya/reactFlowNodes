import React, { useCallback, useRef } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import FirstNode from "./FirstNode";
import { initialEdges, initialNodes } from "./flowNode";
import SecondNode from "./secondNode";
import ThirdNode from "./thirdNode";
import FourthNode from "./fourthNode";
import FifthNode from "./fifthNode";
import AddComponentInView from "./addComponentInView";
import CustomEdge from "./CustomEdge";

const nodeTypes = {
  firstNode: FirstNode,
  secondNode: SecondNode,
  thirdNode: ThirdNode,
  fourthNode: FourthNode,
  fifthNode: FifthNode,
  AddComponentInView: AddComponentInView,
};
const edgeTypes = {
  customedge: CustomEdge,
};
const FlowView = () => {
  // const edgeReconnectSuccessful = useRef(true);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((connection) => {
    const edgs = {
      ...connection,
      animated: true,
      id: new Date(),
      type: "customedge",
    };
    setEdges((eds) => addEdge(edgs, eds));
  }, []);


  console.log({ "updated Nodes Tree": nodes });
  console.log({ edges: edges });

  return (
    <div style={{ width: "80vw", height: "100vh" }}>
     
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          // onReconnect={onReconnect}
          // onReconnectStart={onReconnectStart}

          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background color="red" variant="dots" gap={12} size={1} />
        </ReactFlow>
    
    </div>
  );
};

export default FlowView;
