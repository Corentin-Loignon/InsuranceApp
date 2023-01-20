import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ContactUs = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Site internet</Text>
      <TouchableOpacity
          onPress={() => Linking.openURL('https://www.qivio.fr/')}
          style={styles.linkButton}>
            <Icon name="web" size={50} color="#08004e" />
          <Text style={styles.link}>qivio.fr</Text>
      </TouchableOpacity>
      <View style={{ borderBottomColor: 'white', borderBottomWidth: 2, }} />
      <Text style={styles.title}>Réseaux sociaux</Text>
      <TouchableOpacity
          onPress={() => Linking.openURL('https://www.instagram.com/qivioassurance/')}
          style={styles.linkButton}>
          <Icon name="instagram" size={50} color="#08004e" />
          <Text style={styles.link}>Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity
         onPress={() => Linking.openURL('https://www.linkedin.com/company/qivio')}
          style={styles.linkButton}>
          <Icon name="linkedin" size={50} color="#08004e" />
          <Text style={styles.link}>Linkedin</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/Qivio-assurance-108259615260455')}
          style={styles.linkButton}>
          <Icon name="facebook" size={50} color="#08004e" />
          <Text style={styles.link}>Facebook</Text>
      </TouchableOpacity>
      <View style={{ borderBottomColor: 'white', borderBottomWidth: 2, }} />
      <Text style={styles.title}>Contactez-nous</Text>
      <TouchableOpacity
         onPress={() => Linking.openURL("mailto:contact@qivio.fr?subject=Contact depuis l'application Qivio")}
          style={styles.linkButton}>
            <Icon name="email" size={50} color="#08004e" />
          <Text style={styles.link}>contact@qivio.fr</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ContactUs

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F6',
    paddingHorizontal:'4%',
  },
  title: {
    paddingTop: '5%',
    paddingBottom: '5%',
    color: "#08004e",
    fontSize: 20,
    fontFamily: "Outfit_500Medium",
  },
  linkButton: {
    paddingBottom: '5%',
    flexDirection:'row',
    alignItems:'center',
  },
  link: {
    fontSize: 18,
    fontFamily: "Outfit_500Medium",
    marginLeft: '4%',
  },
})