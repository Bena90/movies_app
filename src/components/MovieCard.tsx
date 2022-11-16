import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';

interface MovieProps{
    movie: Movie;
    height?: number;
    width?: number;
}

export const MovieCard = ({movie, width= 300, height=420}: MovieProps) => {

    const navigation = useNavigation();

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <TouchableOpacity
        style={{width, height, paddingBottom:10, marginHorizontal:4}}
        activeOpacity= {0.9}
        onPress={() => navigation.navigate('DetailScreen', movie)}
    >
        <View style={styles.imageContainer}>
            <Image
                source={{uri}}
                style={
                    styles.movie
                }
            />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.24,
        shadowRadius: 4.65,
        borderRadius: 20,
        elevation: 6,
    },
    movie: {
        flex:1,
        borderRadius: 20,
        shadowColor: "#000",
    }
})
