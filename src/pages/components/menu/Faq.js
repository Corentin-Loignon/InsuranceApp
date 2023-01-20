import { AccordionList } from "accordion-collapse-react-native";
import { ScrollView, SafeAreaView, View, Text, StyleSheet, Dimensions, } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import faq from "../../../database/faq";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const Faq = () => {
  const head = (item) => (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.list}>
          <View style={styles.flexTitle}>
          <Text style={styles.title}>{item.title}</Text>
          </View>
          <View>
          <Ionicons style={styles.icon} name="add-outline" size={30} color="#08004e" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  const body = (item) => (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.description}>{item.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );

  return (
    
    <AccordionList
      style={styles.container}
      list={faq}
      header={head}
      body={body}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};
export default Faq;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
  },
  list:{
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: '4%',
    paddingVertical:"2%",
    marginTop: "1%",
    alignItems:"center",
    justifyContent:'space-between',
  },
  title: {
    width: windowW/1.2,
    color: "#08004e",
    fontSize: 17,
    fontFamily: "Outfit_500Medium",
  },
  icon: {
    alignItems: "center",
  },
  description: {
    color: "#08004e",
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    fontSize: 16,
    fontFamily: "Outfit_500Medium",
  },
});
