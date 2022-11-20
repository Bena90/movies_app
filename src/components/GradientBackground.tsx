import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useColors } from '../hooks/useColors';
import { useFade } from '../hooks/useFade';

interface GradientBackgroundProps{
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({children}: GradientBackgroundProps) => {
  const { colors, previousColors, setPreviousMainColors } = useColors();
  const { opacity, fadeIn, fadeOut } = useFade();

  React.useEffect (()=>{
    fadeIn ( () => {
      setPreviousMainColors( colors );
      fadeOut ();
    })


  }, [colors])

  return (
    <View style={styles.containerGradient}>
      <LinearGradient
        colors={[previousColors.primary, previousColors.secondary]}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y:0.7}}
      />

      <Animated.View
        style={{...StyleSheet.absoluteFillObject, opacity}}
      >
        <LinearGradient
          colors={[colors.primary, colors.secondary]}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y:0.7}}
        />
      </Animated.View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  containerGradient: {
    flex:1,
  },
})
