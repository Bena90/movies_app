import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MovieCard } from '../components/MovieCard';
import { getColors } from '../helpers/getColors';
import { useColors } from '../hooks/useColors';
import { useMovies } from '../hooks/useMovies';

const { width } = Dimensions.get('window')

export const HomeScreen = () => {
  const { setMainColors } = useColors();
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies()
  const { top } = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index]
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
    const {primary = 'blue', secondary = 'lightblue'} = await getColors(uri)

    setMainColors({
      primary,
      secondary
  })
  }

  React.useEffect (() => {
    if(nowPlaying.length>0){
      getPosterColors(0)
    }
  }, [nowPlaying])

  if (isLoading) {
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <ActivityIndicator color='lightblue' size={80} />
      </View>
    )
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top+20,}}>
          {/* Carousel Principal */}
          <View style={{height:440}}>
            <Carousel
                vertical={false}
                data={nowPlaying}
                renderItem={({item}: any) => <MovieCard movie={item}/> }
                sliderWidth={width}
                itemWidth={300}
                inactiveSlideOpacity={0.9}
                onSnapToItem={index => getPosterColors(index)}
                />
          </View>

          {/* Carousel Secundario */}
          <HorizontalSlider 
            title="Popular"
            movies={popular}
          />
          <HorizontalSlider 
            title="Top Rated"
            movies={topRated}
          />
          <HorizontalSlider 
            title="Upcoming"
            movies={upcoming}
          />
        </View>
      </ScrollView>
    </GradientBackground>
  )
};
