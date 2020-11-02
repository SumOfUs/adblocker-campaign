import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { IntlProvider } from "react-intl";
import { LangContext } from "./helpers/Providers/lang.service";
import { I18n } from "./helpers/Locale";

// To find default language to be loaded
const languageList = ["en", "de"];
let langSelected = localStorage.getItem("locale") || "en";
const { search } = window.location;
if (search.includes("lang=")) {
  const queryParamLang = search.substring(
    search.indexOf("lang=") + 5, // search lang= and add 5 char to determine start position of lang that is given in query params
    search.indexOf("lang=") + 7 // search lang= and add 7 char to determine end position of lang that is given in query params
  );
  // If the language given in query params is valid only then change the lang
  if (languageList.includes(queryParamLang)) {
    langSelected = queryParamLang;
    localStorage.setItem("locale", queryParamLang);
  }
}

function FinalApp() {
  const [lang, setLang] = useState(langSelected);

  const value = useMemo(
    () => ({
      lang,
      setLang,
    }),
    [lang, setLang]
  );

  return (
    <LangContext.Provider value={value}>
      <IntlProvider locale={lang} key={lang} messages={I18n[lang]}>
        <App />
      </IntlProvider>
    </LangContext.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <FinalApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
