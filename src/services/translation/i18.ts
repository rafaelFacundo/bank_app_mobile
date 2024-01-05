import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import eng from "./sources/en.json";
import ru from "./sources/ru.json";

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  resources: {
    en: eng,
    ru: ru,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
