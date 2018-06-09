/*
 *  Hendahl IT
 */

import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import App from "./containers/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import store, { history } from "./store";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import ThemeDefault from "./style/defaultTheme";

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={ThemeDefault}>
        <CssBaseline>
          <div>
            <App />
          </div>
        </CssBaseline>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  target
);
