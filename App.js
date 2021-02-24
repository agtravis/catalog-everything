import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [title, setTitle] = useState();

  const getTitle = () => {
    axios
      .get(`https://catalog-everything-backend.herokuapp.com/`)
      .then((response) => {
        setTitle(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTitle();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Text>{title ? title : `loading`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
