import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, Image, Linking } from "react-native";
import React from "react";

const heightMobileUI = 851;
const widthMobileUI = 393;

export const responsiveWidth = width => {
  return (Dimensions.get('window').width * width) / widthMobileUI;
};

export const responsiveHeight = height => {
  return (Dimensions.get('window').height * height) / heightMobileUI;
};
const AboutUsPartners = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
    <View>
      <Text style={styles.text}>
        Afin de proposer la meilleure expérience possible à ses utilisateurs,
        Qivio s'associe à des services complémentaires.
      </Text>
    </View>
    <View style={styles.containerPartners}>
    <TouchableOpacity
         onPress={() => Linking.openURL('https://ekwateur.fr/')}
          style={styles.button}>
          <Image 
          source={require('../../../../assets/ekwateur.png')} 
          style={styles.image} 
          />
          <Text style={styles.title}>ekWateur</Text>
          <Text style={styles.description}>Fournisseur d'électricité verte, d'origine 100% renouvelable. Participez à la lutte contre le réchauffement climatique !</Text>
      </TouchableOpacity>
      <TouchableOpacity
         onPress={() => Linking.openURL('https://reveasy.fr/')}
          style={styles.button}>
          <Image 
          source={require('../../../../assets/reveasy.png')} 
          style={styles.image} 
          />
          <Text style={styles.title}>Reveasy</Text>
          <Text style={styles.description}>Garage à domicile moto et scooter. Des professionnels passionnés se déplacent chez vous ou à votre bureau pour tout type d'intervention.</Text>
      </TouchableOpacity>
      <TouchableOpacity
         onPress={() => Linking.openURL('https://www.invoxia.com/fr')}
          style={styles.button}>
          <Image 
          source={require('../../../../assets/invoxia.png')} 
          style={styles.image} 
          />
          <Text style={styles.title}>Invoxia</Text>
          <Text style={styles.description}>Comme vous, nous espérons que votre deux-roues ne soit jamais dérobé, alors nous avons lié ce partenariat pour profiter de réduction sur les trackers GPS Invoxia.</Text>
      </TouchableOpacity>
      <TouchableOpacity
         onPress={() => Linking.openURL('https://liberty-rider.com/')}
          style={styles.button}>
          <Image 
          source={require('../../../../assets/libertyrider.png')} 
          style={styles.image} 
          />
          <Text style={styles.title}>Liberty Rider</Text>
          <Text style={styles.description}>Qivio vous offre l'abonnement premium à Liberty Rider dans votre contrat d'assurance. C'est l'application qui vous garde en sécurité !</Text>
      </TouchableOpacity>
  </View>
  </ScrollView>
  </SafeAreaView>
  );
};

export default AboutUsPartners;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
  },
  text: {
    marginTop:'5%',
    marginHorizontal:responsiveWidth(15),
    color: "#08004e",
    fontSize: responsiveWidth(17),
    fontFamily: "Outfit_500Medium",
    textAlign:'justify'
  },
  containerPartners: {
    marginTop: "10%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    width: responsiveWidth(370),
    height: Platform.OS === "ios" ? responsiveHeight(330) : responsiveHeight(360),
    borderRadius: 10,
    justifyContent:'flex-start',
    marginBottom: "10%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,

    elevation: 1,
  },
  title: {
    padding: responsiveWidth(10),
    textAlign:'justify',
    color: "#08004e",
    fontSize: responsiveWidth(20),
    fontFamily: "Outfit_500Medium",
  },
  description: {
    paddingHorizontal: responsiveWidth(10),
    textAlign:'justify',
    color: "#08004e",
    fontSize: responsiveWidth(17),
    fontFamily: "Outfit_500Medium",
  },
  image: {
    width: responsiveWidth(370),
    height: responsiveHeight(175),
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
});
