import React from 'react';
import { View,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform, Text
} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

export default InfoButton = props => {
  let ButtonComponent = TouchableOpacity;
  // const { height, width } = useDimensions().window;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <ButtonComponent onPress={props.onClick}>
      <View style={[styles.button]}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </ButtonComponent>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems:'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 4,
    width:350,
    height: 40
  },
  buttonText: {
    color: '#1da1f2',
    fontSize: 18,
    fontWeight: 'bold',
    
    marginBottom: -10,
  },
});