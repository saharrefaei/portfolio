import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App.tsx";
import { Footer } from "./template/Footer.tsx";
import { Refresh } from "./template/Refresh.tsx";

function AppWithUI() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <Refresh onClick={() => setCount(count + 1)} />
      <App key={count} />
      <Footer title="Keyframes" url="https://framer.com/docs/animation/" />
    </StrictMode>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);