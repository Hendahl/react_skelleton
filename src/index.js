/*
 *  Hendahl IT
 */

import { ConnectedRouter } from "react-router-redux";
import { IntlProvider, addLocaleData } from "react-intl";
import { Provider } from "react-redux";
import { render } from "react-dom";
import App from "./containers/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import React from "react";
import store, { history } from "./store";
import ThemeDefault from "./style/defaultTheme";
import en from "react-intl/locale-data/en";
import sv from "react-intl/locale-data/sv";
import localeData from "./translations/locales/data.json";

addLocaleData([...en, ...sv]);

const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages =
  localeData[languageWithoutRegionCode] ||
  localeData[language] ||
  localeData.en;

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <IntlProvider locale={language} messages={messages}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={ThemeDefault}>
          <CssBaseline>
            <div>
              <App />
            </div>
          </CssBaseline>
        </MuiThemeProvider>
      </ConnectedRouter>
    </IntlProvider>
  </Provider>,
  target
);
