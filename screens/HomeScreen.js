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
import InfoButton from '../components/InfoButton';
import { HouseContext } from '../data/HouseContext';

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [clickedHouse, setClickedHouse] = useContext(HouseContext);
  
  useEffect(() => {

    fetchHouseHandler();
  }, []);
  const fetchHouseHandler = async () => {
    setIsInitialLoading(false);
    setIsLoading(true);
    try {
      let response = await fetch(
        "https://api.gameofthronesquotes.xyz/v1/houses"
      );
      response = await response.json();
      setData(response);
      // console.log(data[0].name);
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
          <InfoButton
            title={data[0].name}
            onClick={() => {
              setClickedHouse(data[0].slug);
              navigation.navigate("House Info");
            }}
          />
          <InfoButton
            title={data[1].name}
            onClick={() => {
              setClickedHouse(data[1].slug);
              navigation.navigate("House Info");
            }}
          />
          <InfoButton
            title={data[2].name}
            onClick={() => {
              setClickedHouse(data[2].slug);
              navigation.navigate("House Info");
            }}
          />
          <InfoButton
            title={data[3].name}
            onClick={() => {
              setClickedHouse(data[3].slug);
              navigation.navigate("House Info");
            }}
          />
          <InfoButton
            title={data[4].name}
            onClick={() => {
              setClickedHouse(data[4].slug);
              navigation.navigate("House Info");
            }}
          />
          <InfoButton
            title={data[5].name}
            onClick={() => {
              setClickedHouse(data[5].slug);
              navigation.navigate("House Info");
            }}
          />
          <InfoButton
            title={data[6].name}
            onClick={() => {
              setClickedHouse(data[6].slug);
              navigation.navigate("House Info");
            }}
          />
          <InfoButton
            title={data[7].name}
            onClick={() => {
              setClickedHouse(data[7].slug);
              navigation.navigate("House Info");
            }}
          />
          <InfoButton
            title={data[8].name}
            onClick={() => {
              setClickedHouse(data[8].slug);
              navigation.navigate("House Info");
            }}
          />
          <InfoButton
            title={data[9].name}
            onClick={() => {
              setClickedHouse(data[9].slug);
              navigation.navigate("House Info");
            }}
          />
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
  topContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  bottomContainer: {
    alignItems: "center",
    width: "100%",
    padding: 50,
  },
});