import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SendDocuments = () => {
  return (
    <View style={styles.container}>
      <Text>Envoyer des documents</Text>
    </View>
  )
}

export default SendDocuments

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
})