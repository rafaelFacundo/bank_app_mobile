import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import eng from "./sources/en.json";
import ru from "./sources/ru.json";
import de from "./sources/de.json";
import es from "./sources/es.json";
import fr from "./sources/fr.json";
import it from "./sources/it.json";
import jp from "./sources/jp.json";
import kr from "./sources/kr.json";
import pt from "./sources/pt.json";
import zh from "./sources/zh.json";

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  resources: {
    en: eng,
    ru: ru,
    de: de,
    es: es,
    fr: fr,
    it: it,
    jp: jp,
    kr: kr,
    pt: pt,
    zh: zh,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
