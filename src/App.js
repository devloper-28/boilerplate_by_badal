// App.js

import React from "react";
import AppRoutes from "./component/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <AppRoutes />
      <div>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
