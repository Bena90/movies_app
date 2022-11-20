import React from "react";
import { Animated } from "react-native";

export const useFade = () => {

    const opacity = React.useRef(new Animated.Value(0)).current;

    const fadeIn = ( callback?: () => void ) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start( () => callback ? callback() : null );
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    }

  return {
    opacity,
    fadeIn,
    fadeOut,
}
}
