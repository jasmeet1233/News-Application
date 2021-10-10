import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./Globalstate/context";
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-31d26evt.us.auth0.com"
      clientId="Y9loVOcwHArL4zQ3j6Nzq5CBmCWdMj9Z8"
      redirectUri={window.location.origin}
    > */}
      <AppProvider>
        <App />
      </AppProvider>
    {/* </Auth0Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
