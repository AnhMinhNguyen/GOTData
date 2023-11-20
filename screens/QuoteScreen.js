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
import { Ionicons } from "@expo/vector-icons";
import logo from '../assets/got-quotes-api.png';
import { HouseContext } from '../data/HouseContext';

export default function QuoteScreen({ navigation }) {
  const [quoteData, setQuoteData] = useState();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [clickedHouse, setClickedHouse] = useContext(HouseContext);
  const fetchQuoteHandler = async () => {
    setIsInitialLoading(false);
    setIsLoading(true);
    try {
      let response = await fetch(
        "https://api.gameofthronesquotes.xyz/v1/random/5"
      );
      response = await response.json();
      setQuoteData(response);
      // console.log(data[0].name);
    } catch (err) {
      Alert.alert("Something went wrong!", err.message, [{ title: "Ok" }]);
    }
    setIsLoading(false);
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.topContainer}>
        <Button
          title="Fetch 5 random quotes"
          onPress={() => fetchQuoteHandler(false)}
        />
        {isInitialLoading ? (
          <View style={styles.topContainer}>
            <Text>Loading...</Text>
            <Text>Press the button</Text>
          </View>
        ) : isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.bottomContainer}>
            <Text>Quote 1: {quoteData[0].sentence}</Text>
            <Text>Quote 2: {quoteData[1].sentence}</Text>
            <Text>Quote 3: {quoteData[2].sentence}</Text>
            <Text>Quote 4: {quoteData[3].sentence}</Text>
            <Text>Quote 5: {quoteData[4].sentence}</Text>
          </View>
        )}
        <View>
          <Image source={logo} style={{ resizeMode: "center" }} />
        </View>
      </View>
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
  topContainer: {
    width: "100%",
    alignItems: "center",
    padding: 50,
  },
  bottomContainer: {
    alignItems: "left",
    width: "100%",
    paddingVertical: 50,
  },
});