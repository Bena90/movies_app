import ImageColors from "react-native-image-colors";

export const getColors = async (uri: string) => {
    const colors = await ImageColors.getColors(uri, {})

    switch (colors.platform) {
        case 'android':
          return { primary: colors.dominant, secondary: colors.average }

        case 'ios':
            return { primary: colors.primary, secondary: colors.secondary }

        default:
          throw new Error('Unexpected platform key')
      }
  };