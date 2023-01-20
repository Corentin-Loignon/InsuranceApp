import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cancel = () => {
  return (
    <View style={styles.container}>
      <Text>Cancel</Text>
    </View>
  )
}

export default Cancel

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
})