import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ApplicationSettings = () => {
  return (
    <View style={styles.container}>
      <Text>Paramètres de l'application</Text>
    </View>
  )
}

export default ApplicationSettings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
})