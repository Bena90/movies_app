import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MovieDetails } from '../components/MovieDetails';
import { useMoviesDetails } from '../hooks/useMoviesDetails';
import { RootStackParams } from '../navigation/Navigation';

interface DetailScreenProps extends StackScreenProps<RootStackParams, 'DetailScreen'>{

}

const heigthScreen = Dimensions.get('screen').height

export const DetailScreen = ({route}: DetailScreenProps) => {
  const movie = route.params;

  const {isLoading, cast, movieFull} = useMoviesDetails(movie.id)

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  if (isLoading) {
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <ActivityIndicator color='lightblue' size={80} />
      </View>
  )}

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
          <Image
            source={{ uri }}
            style={ styles.posterImage }
            />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View style={{marginTop:10}}>
        {
          isLoading
            ? <ActivityIndicator color='lightblue' style={{ marginTop: 20 }} size={40} />
            : <MovieDetails movieFull={movieFull!} cast={cast!}/>
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'red',
    width: "100%",
    height: heigthScreen * 0.7,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4.65,
    elevation: 8,
  },
  posterImage: {
    flex:1,
  },
  textContainer:{
    marginHorizontal:20,
    marginTop: 10,
  },
  subTitle:{
    fontSize: 16,
    opacity: 0.8,
    color: '#000'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
})