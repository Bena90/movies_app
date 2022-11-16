import currencyFormatter from 'currency-formatter';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastElement, FullMovie } from '../interfaces/movieInterface';
import { CastItem } from './CastItem';

interface MovieDetailsProps {
    movieFull: FullMovie;
    cast: CastElement[];
}

export const MovieDetails = ({movieFull, cast}: MovieDetailsProps) => {

    const budget = currencyFormatter.format(movieFull.budget, {code: 'USD'})

  return (
    <>
        <View  style={{marginHorizontal: 20}}>
            <View style={{flexDirection:'row'}}>
                <Icon
                    name='star-outline'
                    color= '#000'
                    size={16}
                /> 
                <Text style={{color: '#000'}}> {movieFull.vote_average}</Text>
                <Text style={{marginLeft: 5,color: '#000'}}>
                    - { movieFull.genres.map(g => g.name).join(', ')}
                </Text>
            </View>
            <Text style={styles.textSubtitle}> Historia: </Text>
            <Text style={styles.text}> {movieFull.overview} </Text>
            <Text style={styles.textSubtitle}> Presupuesto: </Text>
            <Text style={styles.text}> {budget} </Text>
        </View>
        <View>
            <Text style={[styles.textSubtitle, {marginHorizontal:20}]}> Actores: </Text>
            <FlatList 
                data={cast}
                keyExtractor={(item) => item.id.toString()}
                renderItem= {({item}) => <CastItem actor={ item }/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginVertical:10}}
            />
        </View>
    </>
  )
}

const styles= StyleSheet.create({
    textSubtitle:{
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#000',
    },
    text:{
        fontSize: 14,
        marginTop: 5,
        color: '#000',
    }
})
