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
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  useColorScheme
} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { Ionicons } from "@expo/vector-icons";
import InfoButton from '../components/InfoButton';
import { PersonContext } from '../data/PersonContext';

export default function PersonScreen({ navigation }) {
  const [data, setData] = useState();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [clickedPerson, setClickedPerson] = useContext(PersonContext);

  useEffect(() => {

    fetchPersonHandler();
  }, []);
  const fetchPersonHandler = async () => {
    setIsInitialLoading(false);
    setIsLoading(true);
    try {
      let response = await fetch(
        "https://api.gameofthronesquotes.xyz/v1/characters"
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
      <ScrollView>
        {isInitialLoading ? (
          <View style={styles.bottomContainer}>
            <Text>Loading...</Text>
          </View>
        ) : isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.bottomContainer}>
            <InfoButton
              title={data[0].name + " from House " + data[0].house.slug}
              onClick={() => {
                setClickedPerson(data[0].slug);
                // console.log(clickedPerson);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[1].name + " from House " + data[1].house.slug}
              onClick={() => {
                setClickedPerson(data[1].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[2].name + " from House " + data[2].house.slug}
              onClick={() => {
                setClickedPerson(data[2].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[3].name + " from House " + data[3].house.slug}
              onClick={() => {
                setClickedPerson(data[3].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[4].name + " from House " + data[4].house.slug}
              onClick={() => {
                setClickedPerson(data[4].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[5].name + " from House " + data[5].house.slug}
              onClick={() => {
                setClickedPerson(data[5].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[6].name + " from House " + data[6].house.slug}
              onClick={() => {
                setClickedPerson(data[6].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[7].name + " from House " + data[7].house.slug}
              onClick={() => {
                setClickedPerson(data[7].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[8].name + " from House " + data[8].house.slug}
              onClick={() => {
                setClickedPerson(data[8].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[9].name + " from House " + data[9].house.slug}
              onClick={() => {
                setClickedPerson(data[9].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[10].name + " from House " + data[10].house.slug}
              onClick={() => {
                setClickedPerson(data[10].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[11].name + " from House " + data[11].house.slug}
              onClick={() => {
                setClickedPerson(data[11].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[12].name + " from House " + data[12].house.slug}
              onClick={() => {
                setClickedPerson(data[12].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[13].name + " from House " + data[13].house.slug}
              onClick={() => {
                setClickedPerson(data[13].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[14].name + " from House " + data[14].house.slug}
              onClick={() => {
                setClickedPerson(data[14].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[15].name + " from House " + data[15].house.slug}
              onClick={() => {
                setClickedPerson(data[15].slug);
                navigation.navigate("Person Info");
              }}
            />
            <InfoButton
              title={data[16].name + " from House " + data[16].house.slug}
              onClick={() => {
                setClickedPerson(data[16].slug);
                navigation.navigate("Person Info");
              }}
            />
          </View>
        )}
      </ScrollView>
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