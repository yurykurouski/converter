import { StyleSheet } from "react-native";

import { AppColorScheme } from "@/src/constants/Colors";
import { getColor } from "@/src/utils/getColor";

export const getStyles = (colorScheme: AppColorScheme) => {
    return StyleSheet.create({
        handleContainer: {
            height: 30,
            alignItems: 'center',
        },
        handlePressable: {
            transform: [
                {
                    translateY: 10,
                },
            ],
            overflow: 'hidden',
        },
        handle: {
            width: 50,
            height: 6,
            backgroundColor: getColor('border', colorScheme),
            borderRadius: 5,
        },
    });
};
