import { useReactFlow } from "@xyflow/react";
import React, { useCallback } from "react";
import Button from "./button";

export default function AddComponentInView(valuedata) {
  const { setNodes } = useReactFlow();
  // const valueForView = [
  //   { id: "1", value: "Input", type: "fourthNode" },
  //   { id: "2", value: "Message", type: "firstNode" },
  //   { id: "3", value: "Work", type: "thirdNode" },
  //   { id: "4", value: "Content button", type: "fifthNode" },
  //   { id: "5", value: "Queries", type: "secondNode" },
  // ];

  const providerClick = useCallback(
    ({ id, value, type }) => {
      const locationX = Math.random() * 250; // Adjust the range as needed
      const locationY = Math.random() * 200;
      const newNode = {
        id: `${Date.now()}`, // Unique ID
        position: { x: locationX, y: locationY },
        data: { value: value },
        type: type,
      };
      setNodes((prevNodes) => [...prevNodes, newNode]);
    },
    [setNodes]
  );

  return (
    <div
      className="pt-3"
      style={{ width: "20vw", height: "100vh", background: "#FAF9F6" }}
    >
      <div>
        <h4 className="mx-3 py-2 ">For Add Click On UI</h4>
      </div>
      <ul style={{ listStyleType: "none" }}>
        {/* {valueForView.map((value) => (
          <li
            id={value.id}
            style={{ cursor: "pointer", color: "grey" }}
            title="add Node"
            onClick={() => providerClick(value)}
          >
            <h6>{value.value}</h6>{" "}
          </li>
        ))} */}

        <li
          className="mb-3"
          style={{ cursor: "pointer", color: "grey" }}
          title="add Node"
          onClick={() =>
            providerClick({ id: "1", value: "Input", type: "fourthNode" })
          }
        >
          <div
            style={{
              border: "1px solid black",
              width: "12rem",
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
              <i className="fa fa-plus"></i>
            </div>

            <div
              className="d-flex justify-content-center align-items-center my-2"
              style={{ height: "auto" }}
            >
              <input
                disabled
                type="text"
                placeholder="Enter your Name"
                style={{ width: "8rem", fontSize: "14px" }}
                // onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <h6 className="mx-2 mt-3" style={{ fontSize: "12px" }}>
              Select Upload Options !
            </h6>
            <div
              className="d-flex mx-2 justify-content-between mb-3"
              style={{ cursor: "pointer" }}
            >
              <button
                className=" buttonEffect1"
                // onClick={(e) => setInputType("file")}
                style={{ borderRadius: "5px", fontSize: "12px" }}
              >
                files
              </button>
              <button
                className="px-4 buttonEffect1"
                // onClick={(e) => setInputType("input")}
                style={{ borderRadius: "5px", fontSize: "12px" }}
              >
                Input
              </button>
            </div>
          </div>
        </li>
        <li
          className="mb-3"
          style={{ cursor: "pointer", color: "grey" }}
          title="add Node"
          onClick={() =>
            providerClick({ id: "2", value: "Message", type: "firstNode" })
          }
        >
          <div
            style={{
              border: "1px solid black",
              width: "12rem",
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
              <i className="fa fa-plus"></i>
            </div>

            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "5rem" }}
            >
              <div className="px-2 text-center" style={{ color: "grey" }}>
                Tell me your Problem! I can help to solve it.
              </div>
            </div>
          </div>
        </li>
        <li
          className="mb-3"
          style={{ cursor: "pointer", color: "grey" }}
          title="add Node"
          onClick={() =>
            providerClick({ id: "3", value: "Work", type: "thirdNode" })
          }
        >
          <div
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              background: "white",
              width: "12rem  ",
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
              <i className="fa fa-plus"></i>
            </div>
          </div>
        </li>
        <li
          className="mb-3"
          style={{ cursor: "pointer", color: "grey" }}
          title="add Node"
          onClick={() =>
            providerClick({
              id: "4",
              value: "Content button",
              type: "fifthNode",
            })
          }
        >
          <div
            style={{
              border: "1px solid black",
              width: "12rem",
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
              <i className="fa fa-plus"></i>
            </div>

            <div className="my-3 mx-auto text-center">
              <button className="buttonEffect">Yes</button>

              <Button />
              <br />
            </div>
          </div>
        </li>
        <li
          style={{ cursor: "pointer", color: "grey" }}
          title="add Node"
          onClick={() =>
            providerClick({ id: "5", value: "Queries", type: "secondNode" })
          }
        >
          <>
            <div
              style={{
                border: "1px solid black",
                width: "12rem",
                background: "white",
                borderRadius: "5px",
              }}
            >
              <div
                className="px-2 d-flex justify-content-between align-items-center"
                style={{
                  background: "rgb(233,90,100)",
                  borderRadius: "5px 5px 0 0",
                  color: "white",
                }}
              >
                Message
                <i className="fa fa-plus"></i>
              </div>

              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "3rem" }}
              >
                This is Message box.
              </div>
            </div>
          </>
        </li>
      </ul>
    </div>
  );
}
