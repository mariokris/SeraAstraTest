import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../styles/styles';

const CardMovie = ({item, goTo}) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={() => goTo(item)}>
    <View style={styles.buttonImageContainer}>
      <Image
        source={require('../assets/movie.png')}
        style={styles.buttonImage}
      />
    </View>
    <View>
      <View style={{width: 200}}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
          {item['title']}
        </Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Rating : {item['vote_average']}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default CardMovie;
