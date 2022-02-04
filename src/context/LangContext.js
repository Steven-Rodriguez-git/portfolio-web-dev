import React, { useState } from "react";
import EnglishLang from "./../data/lang/en.json";
import SpanishLang from "./../data/lang/es.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  let localeDefault = "en";
  let messageDefault = EnglishLang;
  const languaje = localStorage.getItem("lang");

  if (
    window.navigator.language === "es-ES" ||
    window.navigator.language === "es-CO" ||
    window.navigator.language === "es-MX"||
    window.navigator.language === "es" 
  ) {
    localeDefault = "es";
    messageDefault = SpanishLang;
  }

  if (languaje) {
    localeDefault = languaje;

    if (languaje === "es") {
      messageDefault = SpanishLang;
    } else {
      localeDefault = "en";
      messageDefault = EnglishLang;
    }
  }

  const [messages, setMessages] = useState(messageDefault);
  const [locale, setLocale] = useState(localeDefault);

  const setLang = () => {
    if (locale === "en") {
      setLocale("es");
      setMessages(SpanishLang);
      localStorage.setItem("lang", "es");
    } else {
      setLocale("en");
      setMessages(EnglishLang);
      localStorage.setItem("lang", "en");
    }
    window.location.reload();
  };
  return (
    <langContext.Provider value={{ setLang: setLang }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
