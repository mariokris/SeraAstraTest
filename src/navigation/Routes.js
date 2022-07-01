import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListMovies from '../container/ListMovies';
import DetailMovies from '../container/DetailMovies';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListMovies">
        <Stack.Screen
          name="ListMovies"
          component={ListMovies}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailMovie"
          component={DetailMovies}
          options={({route}) => ({
            title: route.params.name,
            headerTitleStyle: {
              fontSize: 14,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
