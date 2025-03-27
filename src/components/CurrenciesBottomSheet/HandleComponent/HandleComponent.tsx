import { useEffect } from "react";
import { Pressable, View } from "react-native";
import Animated, {
    cancelAnimation,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withSequence,
    withSpring
} from "react-native-reanimated";

import { useAppColorScheme } from "@/src/hooks";
import useStore from "@/src/store";

import { getStyles } from "./styles";

type HandleComponentProps = {
    onPress?: () => void;
};

export const HandleComponent = ({ onPress }: HandleComponentProps) => {
    const colorScheme = useAppColorScheme();

    const styles = getStyles(colorScheme);

    const { currenciesFiat } = useStore();

    const animatedHandlerValue = useSharedValue(1);

    const isEmpty = !currenciesFiat.length;

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scaleX: animatedHandlerValue.value,
                },
            ],
        };
    });

    useEffect(() => {
        if (isEmpty) {
            animatedHandlerValue.value = withRepeat(
                withSequence(withDelay(3000, withSpring(1)), withSpring(1.2)),
                -1,
                true,
            );
        } else {
            cancelAnimation(animatedHandlerValue);
            animatedHandlerValue.value = withSpring(1);
        }
    }, [isEmpty, animatedHandlerValue]);

    return (
        <Animated.View style={[styles.handleContainer, animatedStyle]}>
            <Pressable accessibilityRole="button"
                style={styles.handlePressable}
                onPress={onPress}
                hitSlop={10}>
                <View style={styles.handle} />
            </Pressable>
        </Animated.View>
    );
}

HandleComponent.displayName = "HandleComponent";
