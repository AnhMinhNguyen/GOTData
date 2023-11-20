import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Button,
  Image,
  ActivityIndicator,
  useColorScheme
} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { PersonContext } from '../data/PersonContext';

export default function PersonInfoScreen() {
  const [clickedPerson,setClickedPerson] = useContext(PersonContext);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [personData, setPersonData] = useState("");
  useEffect(() => {

    fetchPersonInfoHandler();
  }, [clickedPerson]);
  const fetchPersonInfoHandler = async () => {
    setIsInitialLoading(false);
    setIsLoading(true);
    try {
      let response = await fetch(
        "https://api.gameofthronesquotes.xyz/v1/character/" + clickedPerson
      );
      response = await response.json();
      setPersonData(response)
      // console.log(personData[0].name);
    } catch (err) {
      Alert.alert("Something went wrong!", err.message, [{ title: "Ok" }]);
    }
    setIsLoading(false);
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {isInitialLoading ? (
        <View style={styles.bottomContainer}>
          <Text>Loading...</Text>
        </View>
      ) : isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.bottomContainer}>
          <Text>Character: {personData[0].name} </Text>
          <Text>from: {personData[0].house.name}</Text>
          <Text>has these quotes: {personData[0].quotes}</Text>
        </View>
      )}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    alignItems: "center",
    width: "100%",
    padding: 50,
  },
});