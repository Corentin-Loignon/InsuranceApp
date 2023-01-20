import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import carouselItems from "../database/carouselItems";
import { useNavigation } from "@react-navigation/native";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const CarouselScreen = () => {
  const navigation = useNavigation();
  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.link)}
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 20,
          height: windowH / 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontFamily: "Outfit_500Medium",
            color: "#08004e",
            fontWeight: "bold",
            paddingHorizontal: "2%"
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Outfit_500Medium",
            color: "#08004e",
            textAlign: "center",
            paddingHorizontal: "2%"
          }}
        >
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          layout={"default"}
          data={carouselItems}
          sliderWidth={windowW}
          itemWidth={windowH / 2.7}
          renderItem={_renderItem}
        />
      </View>
    </SafeAreaView>
  );
};
export default CarouselScreen;
