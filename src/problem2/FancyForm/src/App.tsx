import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import Form from "./Pages/Form";
import Success from "./Pages/Success";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Form />} />
      <Route path="/success" element={<Success />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <head>
        <title>Fancy Form</title>
        <link href="style.css" rel="stylesheet" />
      </head>

      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
