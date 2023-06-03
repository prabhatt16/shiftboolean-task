import {View, Text, Image, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {DataContext} from './MainScreen';

const MainScreenItem = ({route}) => {
  const {id} = route.params;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(e => setData(e.data))
      .catch(e => console.log(e));
  }, [id]);
  return (
    <ScrollView style={{flex: 1}}>
      {data.map((item, index) => {
        return (
          <View key={index} style={{padding: 4}}>
            <Image
              source={{uri: item.url}}
              style={{width: '100%', height: 150}}
            />
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {item.title}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default MainScreenItem;
