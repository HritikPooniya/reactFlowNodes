import { ReactFlowProvider } from "@xyflow/react";
import FlowView from "./components/FlowView";
import AddComponentInView from "./components/addComponentInView";
import { useSelector } from "react-redux";

function App() {
  const value = useSelector((state) => state.custom_type);
  console.log({ value });

  return (
    <ReactFlowProvider>
      <div className="d-flex">
        <div
          style={{
            width: "20vw",
            height: "100vh",
            borderRight: "1px solid grey",
          }}
        >
          <AddComponentInView />
        </div>

        <FlowView />
      </div>
    </ReactFlowProvider>
  );
}

export default App;
