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
import { HouseContext } from '../data/HouseContext';

export default function HouseInfoScreen() {
  const [clickedHouse, setClickedHouse] = useContext(HouseContext);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [houseData, setHouseData] = useState("");
  useEffect(() => {

    fetchHouseInfoHandler();
  }, [clickedHouse]);
  const fetchHouseInfoHandler = async () => {
    setIsInitialLoading(false);
    setIsLoading(true);
    try {
      let response = await fetch(
        "https://api.gameofthronesquotes.xyz/v1/house/" + clickedHouse
      );
      response = await response.json();
      setHouseData(response)
      console.log(houseData[0].members);
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
          <Text>House '{clickedHouse} has these members:</Text>
          {/* {member} */}
          <Text>{houseData[0].members[0].name}</Text>
          <Text>{houseData[0].members[1].name}</Text>
          <Text>{houseData[0].members[2].name}</Text>
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