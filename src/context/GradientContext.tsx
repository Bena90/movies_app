import React from "react";

export interface ImageColors {
    primary: string;
    secondary: string;
}

export interface ContextProps {
    colors: ImageColors;
    previousColors: ImageColors;
    setMainColors: (colors: ImageColors) => void;
    setPreviousMainColors: (colors: ImageColors) => void;
}

export const GradientContext = React.createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {

    const [colors, setColor] = React.useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const [previousColors, setPreviousColor] = React.useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const setMainColors = ( colors: ImageColors ) => {
        setColor( colors )
    }

    const setPreviousMainColors = ( colors: ImageColors ) => {
        setPreviousColor( colors )
    }

    return (
        <GradientContext.Provider value={{
            colors,
            previousColors,
            setMainColors,
            setPreviousMainColors
        }}>
            {children}
        </GradientContext.Provider>
    )
}
