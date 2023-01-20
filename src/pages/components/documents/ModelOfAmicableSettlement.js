import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const AmicableSettlement = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => ""}>
        <Ionicons
          name='eye-outline'
          size={40}
          color='#08004e' />
      </TouchableOpacity>      
      <TouchableOpacity 
        onPress={() => ""}>
        <Ionicons
          name='download-outline'
          size={40}
          color='#08004e' />
      </TouchableOpacity>
    </View>
  )
}
export default AmicableSettlement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F6',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
})