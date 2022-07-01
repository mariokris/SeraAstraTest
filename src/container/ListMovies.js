import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import CardMovie from '../component/CardMovie';
import styles from '../styles/styles';

const ListMovies = ({navigation}) => {
  const [listData, setListData] = useState([]);
  const dispatch = useDispatch();
  const goTo = item => {
    dispatch({type: 'SET_DATA', inputValue: item});
    navigation.navigate('DetailMovie', {
      name: item.title,
    });
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=2c75f1ba80164746084b0c698cc211c9&language=en-US`,
      )
      .then(response => {
        setListData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={styles.pageTitle}>
          List Movies
        </Text>
        <View style={{width: '100%'}}>
          {listData.map((item, index) => (
            <CardMovie
              key={index}
              item={item}
              goTo={goTo}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default ListMovies;

