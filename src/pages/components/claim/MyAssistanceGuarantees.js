import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyAssistanceGuarantees = () => {
  return (
    <View style={styles.container}>
      <Text>Mes garanties d'assistance</Text>
      <Text>Dépannage et remorquage, taxi de liaison, hébergement et retour au domicile</Text>
    </View>
  )
}

export default MyAssistanceGuarantees

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F5F6',
        alignItems: 'center',
        justifyContent: 'center',
      },
})