import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import informationStatement from "../../../database/informationStatement";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const MyInformationStatement = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <SafeAreaView style={styles.list}>
      <ScrollView>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.model}</Text>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate("Visualiser", { props: item })}
          >
            <Ionicons name="eye-outline" size={40} color="#08004e" />
            <Text style={styles.iconText}>Visualiser</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={() => ""}>
            <Ionicons name="download-outline" size={40} color="#08004e" />
            <Text style={styles.iconText}>Télécharger</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  const renderSeparator = () => (
    <View style={{ height: 5, backgroundColor: "#F3F5F6" }} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={informationStatement}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const ViewInformationStatement = ({ route }) => {
  const { props: item } = route.params;
  return (
    <SafeAreaView style={styles.containerBis}>
      <ScrollView>
        <View style={styles.listBis}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.item}>
            Nom Prénom: {item.name} {item.firstname}
          </Text>
          <Text style={styles.item}>Date de naissance: {item.dateOfBirth}</Text>
          <Text style={styles.item}>Numéro de téléphone: {item.phoneNumber}</Text>
          <Text style={styles.item}>Adresse e-mail: {item.email}</Text>
          <Text style={styles.item}>Adresse: {item.address}</Text>
          <Text style={styles.item}>Type de véhicule: {item.vehiculeType}</Text>
          <Text style={styles.item}>Modèle: {item.model}</Text>
          <Text style={styles.item}>Numéro d'immatriculation: {item.numberPlate}</Text>
          <Text style={styles.item}>Numéro de contrat: {item.contractNumber}</Text>
          <Text style={styles.item}>Date de début du contrat: {item.contractStartDate}</Text>
          <Text style={styles.item}>Prix: {item.price}</Text>
          <Text style={styles.item}>Fractionnement: {item.payment}</Text>
          <Text style={styles.item}>Bonus/Malus: {item.bonusMalus}</Text>
          <Text style={styles.item}>Garanties: {item.guarantees}</Text>
          <Text style={styles.item}>Sinistres: {item.claim}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const InformationStatementStack = createNativeStackNavigator();

function InformationStatementStackScreen() {
  return (
    <InformationStatementStack.Navigator>
      <InformationStatementStack.Screen
        options={{ headerShown: false }}
        name="Relevés d'information"
        component={MyInformationStatement}
      />
      <InformationStatementStack.Screen
        options={{ headerShown: false }}
        name="Visualiser"
        component={ViewInformationStatement}
      />
    </InformationStatementStack.Navigator>
  );
}
export default InformationStatementStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F3F5F6",
  },
  containerBis: {
    flex: 1,
    backgroundColor: "#F3F5F6",
  },
  flatlist: {
    width: windowW,
  },
  list: {
    backgroundColor: "white",
    borderRadius: 15,
    height: windowH / 6.5,
  },
  listBis: {
    backgroundColor: "white",
    padding: "2%",
  },
  title: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Outfit_500Medium",
    paddingLeft: "4%",
    paddingVertical: "1%",
  },
  subtitle: {
    color: "#08004e",
    fontSize: 16,
    fontFamily: "Outfit_500Medium",
    paddingLeft: "4%",
  },
  itemTitle: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Outfit_500Medium",
    padding: "2%",
  },
  item: {
    fontSize: 17,
    padding: "2%",
    fontFamily: "Outfit_500Medium",
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: "2%",
  },
  iconText: {
    fontFamily: "Outfit_500Medium",
  },
  touchable: {
    alignItems: "center",
  },
});
