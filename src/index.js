import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

const AnonymousContext = React.createContext("default");
const NamedContext = React.createContext("default");
NamedContext.displayName = "NamedContext";

function useCustom() {
  React.useState("custom state");
  React.useMemo(() => "custom memo");
  React.useDebugValue(1);
}

function FormStatus() {
  ReactDOM.useFormStatus();
}

function App() {
  useCustom();
  React.useMemo(() => "memo");
  React.use(AnonymousContext);
  React.useContext(AnonymousContext);
  React.useState("state");
  React.use(NamedContext);
  React.useContext(NamedContext);

  return (
    <div>
      <p>React version: {React.version}</p>
      Inspect me
      <form>
        <FormStatus />
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AnonymousContext.Provider value="anonymous">
      <App />
    </AnonymousContext.Provider>
  </React.StrictMode>
);
