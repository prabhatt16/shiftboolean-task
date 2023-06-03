import {View, Text} from 'react-native';
import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const MainScreen = () => {
  const [data, setData] = useState([]);
  const navigator = useNavigation();
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then(e => {
        setData(e.data);
      })
      .catch(e => console.log(e));
  }, []);
  return (
    <View>
      <Text>List</Text>
      {data.map((item, index) => {
        return (
          <Text
            onPress={() => {
              navigator.navigate('mainscreenitem', {id: item.id});
            }}
            style={{
              fontSize: 16,
              fontFamily: 'bold',
              color: 'black',
              marginBottom: 8,
              paddingLeft: 9,
            }}
            key={index}>
            {item.id + '. ' + item.title}
          </Text>
        );
      })}
    </View>
  );
};

export default MainScreen;
