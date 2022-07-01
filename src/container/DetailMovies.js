import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import OverviewDetail from '../component/OverviewDetail';
import styles from '../styles/styles';

const DetailMovies = () => {
  const globalState = useSelector(state => state.dataMovie);
  const [genreData, setGenreData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=2c75f1ba80164746084b0c698cc211c9`,
      )
      .then(response => {
        setGenreData(response.data.genres);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const convertGenderData = item => {
    let word = [];
    for (let key in item) {
      for (let keys in genreData) {
        if (item[key] === genreData[keys]['id']) {
          word.unshift(genreData[keys]['name']);
        }
      }
    }
    return word.join();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ScrollView style={styles.overviewContainer}>
          <Text style={styles.overviewTitle}>Overview </Text>
          <Text style={styles.overview}>{globalState.overview} </Text>
        </ScrollView>
        <View>
          <OverviewDetail item="Title" value={globalState.title} />
          <OverviewDetail
            item="Genre"
            value={convertGenderData(globalState.genre_ids)}
          />
          <OverviewDetail
            item="Category"
            value={globalState.adult ? 'Adult' : 'All Ages'}
          />
          <OverviewDetail
            item="Release Date"
            value={globalState.release_date}
          />
          <OverviewDetail
            item="Vote Average"
            value={globalState.vote_average}
          />
          <OverviewDetail item="Vote Count" value={globalState.vote_count} />
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailMovies;
