import Router from "./Router";

import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster duration={10000} richColors position="top-right" />
      <Router />
    </>
  );
}

export default App;
