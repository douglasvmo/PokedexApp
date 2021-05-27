import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Text, SafeAreaView, FlatList} from 'react-native';

const Home = () => {
  const [data, setData] = useState();
  const [newRequest, setNextRequest] = useState();

  useEffect(() => {
    axios('https://pokeapi.co/api/v2/pokemon/')
      .then(response => {
        setData(response.data.results);
        setNextRequest(response.data.next)
      })
      .catch(error => {
        console.log('print error: ', error);
      });
  }, []);

  const loadMoreItems = () => {
    axios(newRequest).then(response => {
      setData((data) => [...data, ...response.data.results]);
      setNextRequest(response.data.next)
    }).catch((error) => {
      console.log('print error: ', error)
    })
  }

  return (
    <SafeAreaView>
      {data && (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return <Text>{item.name}</Text>;
          }}
          keyExtractor={(item, index) => item.name + index.toString()}
          onEndReached={loadMoreItems}
          onEndReachedThreshold={0.1}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
