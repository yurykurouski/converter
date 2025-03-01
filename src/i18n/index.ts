import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

import by from "./by.json";
import en from "./en.json";
import pl from "./pl.json";
import ua from "./ua.json";

const i18n = new I18n({
  en: en,
  by: by,
  pl: pl,
  ua: ua,
});

i18n.locale = getLocales()[0]?.languageCode ?? "en";
i18n.enableFallback = true;

export default i18n;
