import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CastElement } from '../interfaces/movieInterface';

interface CastItemProps {
    actor: CastElement

}

export const CastItem = ({actor}:CastItemProps) => {

  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

  return (
    <View style={styles.container}>
      {
        actor.profile_path && (
          <Image
            source={{uri}}
            style={{ 
              width: 50,
              height: 50,
              borderRadius: 10,
             }}
          />
        )
      }
        <View style={styles.actorInfo}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
                {actor.name}
            </Text>
            <Text style={{fontSize: 14, color: '#000'}}>
                {actor.character}
            </Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 10,
    paddingRight: 5,
    margintop: 5,
    marginBottom:14,
    marginRight: 10,
    marginLeft: 5,

  },
  actorInfo: {
    marginLeft: 10,
  }
})