import { Image } from "expo-image";

import { flags } from "@/src/assets/images/flags";

export const CountryFlag = (props) => {
  const { currencyCode } = props;

  const flagImg = flags[currencyCode];

  return <Image source={flagImg} style={{ width: "100%", height: "100%" }} />;
};
