import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languageDetector";
import LocizeBackend from "i18next-locize-backend";
import LastUsed from "locize-lastused";
import { locizePlugin } from "locize";

const isDev = import.meta.env.DEV;

const locizeOptions = {
  projectId: "",
  apiKey: "",
  version: "latest",
};

if (isDev) {
  i18n.use(LastUsed);
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(LocizeBackend)
  .use(locizePlugin)
  .init({
    debug: isDev,
    fallbackLng: "en",
    backend: locizeOptions,
    locizeLastUsed: locizeOptions,
  });

export default i18n;
