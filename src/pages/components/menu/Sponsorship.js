import { StyleSheet, Text, View, Share, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const Sponsorship = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Bonjour, nous pouvons gagner 1 mois d'assurance chacun lorsque vous vous assuré(e) chez Qivio en suivant ce lien:. ",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {

        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Offre parrainage Qivio</Text>
      <TouchableOpacity style={styles.button} onPress={onShare} >
      <Text style={styles.buttonText}>Parrainez vos proches</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Sponsorship

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#08004e",
    fontSize: 20,
    fontFamily: "Outfit_500Medium",
    marginBottom: '20%',
  },
  button: {
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "#1705B5",
    height: windowH/15,
    width: windowW/1.1,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontFamily: "Outfit_500Medium",
  },
})