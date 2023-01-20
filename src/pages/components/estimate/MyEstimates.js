import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyEstimates = () => {
  return (
    <View style={styles.container}>
      <Text>Mes devis</Text>
    </View>
  )
}

export default MyEstimates

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
})