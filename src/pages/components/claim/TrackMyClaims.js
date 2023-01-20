import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TrackMyClaims = () => {
  return (
    <View style={styles.container}>
      <Text>Suivre mes sinistres</Text>
    </View>
  )
}

export default TrackMyClaims

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
})