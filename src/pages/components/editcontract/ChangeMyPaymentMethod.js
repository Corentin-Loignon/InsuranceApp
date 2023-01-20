import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChangeMyPaymentMethod = () => {
  return (
    <View style={styles.container}>
      <Text>ChangeMyPaymentMethod</Text>
    </View>
  )
}

export default ChangeMyPaymentMethod

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
})