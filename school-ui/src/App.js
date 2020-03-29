import React, { useEffect } from "react";

import Routes from "./routes";
function App() {
  useEffect(() => {
    document.title = "School bitches";
  });
  return <Routes />;
}

export default App;
