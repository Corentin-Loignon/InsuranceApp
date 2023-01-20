import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import Camera from "../../../services/camera";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const DeclareAClaim = ({ navigation }) => {
  const handleSubmit = () => {
    let token = [
      date,
      enableCity,
      enableZip,
      enableCountry,
      enableNature,
      enableMove,
      enableComment,
      enableCircumstances,
      enablePrejudice,
      enableRegistration,
      enableMileage,
      enableLoss,
      enableToggle1,
      enableToggle2,
      enableToggle3,
      enableToggle4,
    ];
    return console.log("Déclaration de sinistre : ", token);
  };

  const { control } = useForm({});

  // Date et heure
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode("date");
  };
  const showTimepicker = () => {
    showMode("time");
  };

  // Ville
  const [enableCity, setEnableCity] = useState("");
  // Code Postal
  const [enableZip, setEnableZip] = useState("");
  // Pays
  const [enableCountry, setEnableCountry] = useState("");
  // Nature
  const [openNature, setOpenNature] = useState(false);
  const [valueNature, setValueNature] = useState(null);
  const [enableNature, setEnableNature] = useState([
    { label: "Matériel", value: "Matériel" },
    { label: "Corporel", value: "Corporel" },
    { label: "Les deux", value: "Les deux" },
    { label: "Autre", value: "Autre" },
  ]);
  // Type de déplacement
  const [openMove, setOpenMove] = useState(false);
  const [valueMove, setValueMove] = useState(null);
  const [enableMove, setEnableMove] = useState([
    { label: "Personnel", value: "Personnel" },
    { label: "Professionnel", value: "Professionnel" },
  ]);

  // Commentaire
  const [enableComment, setEnableComment] = useState("");
  // Circonstances
  const [enableCircumstances, setEnableCircumstances] = useState("");
  // Préjudice
  const [enablePrejudice, setEnablePrejudice] = useState("");
  // Immatriculation
  const [enableRegistration, setEnableRegistration] = useState("");
  // Kilométrage
  const [enableMileage, setEnableMileage] = useState("");
  // Typologie du sinistre
  const [openLoss, setOpenLoss] = useState(false);
  const [valueLoss, setValueLoss] = useState(null);
  const [enableLoss, setEnableLoss] = useState([
    {
      label: 'ACC 2 VTM AVEC TIERS MAT/CORP"',
      value: 'ACC 2 VTM AVEC TIERS MAT/CORP"',
    },
    {
      label: "ACCIDENT EN CHAINE AVEC TIERS MAT/CORP",
      value: "ACCIDENT EN CHAINE AVEC TIERS MAT/CORP",
    },
    {
      label: "CARAMBOLAGE MATÉRIEL OU CORPOREL",
      value: "CARAMBOLAGE MATÉRIEL OU CORPOREL",
    },
    { label: "INCENDIE", value: "INCENDIE" },
    { label: "CHOC ANIMAL", value: "CHOC ANIMAL" },
    {
      label: "ACC 2 VTM SANS TIERS IDENTIFIÉ (DÉLIT DE FUITE)",
      value: "ACC 2 VTM SANS TIERS IDENTIFIÉ (DÉLIT DE FUITE)",
    },
    {
      label: "ACC 1 VTM CHOC CONTRE CORP FIXE",
      value: "ACC 1 VTM CHOC CONTRE CORP FIXE",
    },
    {
      label: "ACC 1 VTM PERTE DE CONTRÔLE",
      value: "ACC 1 VTM PERTE DE CONTRÔLE",
    },
    { label: "VOL VÉHICULE RETROUVÉ", value: "VOL VÉHICULE RETROUVÉ" },
    { label: "ATTEINTE ENVIRONNEMENT", value: "ATTEINTE ENVIRONNEMENT" },
    { label: "CATASTROPHE NATURELLE", value: "CATASTROPHE NATURELLE" },
    { label: "BRIS DE GLACE RÉPARÉ", value: "BRIS DE GLACE RÉPARÉ" },
    { label: "VANDALISME", value: "VANDALISME" },
    { label: "TEMPETE/NEIGE", value: "TEMPETE/NEIGE" },
    { label: "GRÊLE", value: "GRÊLE" },
    { label: "BRIS DE GLACE REMPLACÉ", value: "BRIS DE GLACE REMPLACÉ" },
    { label: "CHOC ANIMAL SAUVAGE", value: "CHOC ANIMAL SAUVAGE" },
    { label: "CHUTE D'OBJET", value: "CHUTE D'OBJET" },
    { label: "CREVAISON", value: "CREVAISON" },
    { label: "EXPLOSION", value: "EXPLOSION" },
    { label: "INTÉRIEUR DU VÉHICULE", value: "INTÉRIEUR DU VÉHICULE" },
    {
      label: "PARTIES HAUTES DU VÉHICULE",
      value: "PARTIES HAUTES DU VÉHICULE",
    },
    {
      label: "PARKING ACCIDENT SANS TIERS",
      value: "PARKING ACCIDENT SANS TIERS",
    },
    { label: "PIÉTON", value: "PIÉTON" },
    { label: "CYCLISTE", value: "CYCLISTE" },
    {
      label: "VOL D'EFFETS PERSONNELS OU ACCESSOIRES",
      value: "VOL D'EFFETS PERSONNELS OU ACCESSOIRES",
    },
    { label: "VOL/DÉTOURNEMENT RETROUVÉ", value: "VOL/DÉTOURNEMENT RETROUVÉ" },
    {
      label: "VOL/DÉTOURNEMENT NON RETROUVÉ",
      value: "VOL/DÉTOURNEMENT NON RETROUVÉ",
    },
    { label: "VOL PARTIEL", value: "VOL PARTIEL" },
    { label: "VOL TENTATIVE", value: "VOL TENTATIVE" },
    { label: "VOL VÉHICULE NON RETROUVÉ", value: "VOL VÉHICULE NON RETROUVÉ" },
    { label: "ERREUR DE CARBURANT", value: "ERREUR DE CARBURANT" },
    { label: "INONDATION", value: "INONDATION" },
    { label: "AUTRE", value: "AUTRE" },
  ]);
  // Tiers impliqué ?
  const [enableToggle1, setEnableToggle1] = useState("Oui");
  // Le véhicule roule encore ?
  const [enableToggle2, setEnableToggle2] = useState("Oui");
  // Véhicule économiquement réparable ?
  const [enableToggle3, setEnableToggle3] = useState("Oui");
  // Assistance demandée ?
  const [enableToggle4, setEnableToggle4] = useState("Oui");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Localisation</Text>
        <Text style={styles.label}>Date et Heure</Text>
        <View>
          <View style={styles.dateContainer}>
            <TouchableOpacity
              style={styles.dateButton}
              onPress={showDatepicker}
            >
              <Text style={styles.textDateButton}>Sélectionner la date</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dateButton}
              onPress={showTimepicker}
            >
              <Text style={styles.textDateButton}>Sélectionner l'heure</Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
        </View>
        <Controller
          control={control}
          render={() => (
            <Text style={styles.textDate}>{date.toLocaleString()}</Text>
          )}
          name="Date"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Ville</Text>
        <Controller
          control={control}
          render={({ field: { onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={"Paris"}
              onBlur={onBlur}
              onChangeText={(value) => setEnableCity(value)}
              value={value}
            />
          )}
          name="Ville"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Code Postal</Text>
        <Controller
          control={control}
          render={({ field: { onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={"75001"}
              placeholderTextColor={"#C7C7CD"}
              onBlur={onBlur}
              onChangeText={(value) => setEnableZip(value)}
              value={value}
              keyboardType="number-pad"
            />
          )}
          name="Code Postal"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Pays</Text>
        <Controller
          control={control}
          render={({ field: { onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={"France"}
              placeholderTextColor={"#C7C7CD"}
              onBlur={onBlur}
              onChangeText={(value) => setEnableCountry(value)}
              value={value}
            />
          )}
          name="Pays"
          rules={{ required: true }}
        />
        <Text style={styles.title}>Sinistre</Text>
        <Text style={styles.label}>Nature</Text>
        <Controller
          control={control}
          render={() => (
            <DropDownPicker
              listMode="SCROLLVIEW"
              dropDownDirection="TOP"
              placeholder="Sélectionner la nature du sinistre"
              placeholderStyle={{
                fontFamily: "Outfit_500Medium",
                fontSize: 17,
                color: "#C7C7CD",
              }}
              listItemLabelStyle={{
                fontSize: 17,
                fontFamily: "Outfit_500Medium",
              }}
              dropDownContainerStyle={{
                borderWidth: 1,
                borderColor: "#F3F5F6",
              }}
              labelStyle={{ fontSize: 17, fontFamily: "Outfit_500Medium" }}
              style={{ borderWidth: 0, height: windowH / 15 }}
              closeAfterSelecting={true}
              open={openNature}
              value={valueNature}
              items={enableNature}
              setOpen={setOpenNature}
              setValue={setValueNature}
              setItems={setEnableNature}
            />
          )}
          name="Nature"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Type de déplacement</Text>
        <Controller
          control={control}
          render={() => (
            <DropDownPicker
              listMode="SCROLLVIEW"
              dropDownDirection="AUTO"
              placeholder="Sélectionner le type de déplacement"
              placeholderStyle={{
                fontFamily: "Outfit_500Medium",
                fontSize: 17,
                color: "#C7C7CD",
              }}
              listItemLabelStyle={{
                fontSize: 17,
                fontFamily: "Outfit_500Medium",
              }}
              dropDownContainerStyle={{
                borderWidth: 1,
                borderColor: "#F3F5F6",
              }}
              labelStyle={{ fontSize: 17, fontFamily: "Outfit_500Medium" }}
              style={{ borderWidth: 0, height: windowH / 15 }}
              open={openMove}
              value={valueMove}
              items={enableMove}
              setOpen={setOpenMove}
              setValue={setValueMove}
              setItems={setEnableMove}
            />
          )}
          name="Type de déplacement"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Commentaire</Text>
        <Controller
          control={control}
          render={({ field: { onBlur, value } }) => (
            <TextInput
              style={styles.inputArea}
              placeholder={"Veuillez nous détailler le sinistre..."}
              placeholderTextColor={"#C7C7CD"}
              onBlur={onBlur}
              onChangeText={(value) => setEnableComment(value)}
              value={value}
              multiline={true}
            />
          )}
          name="Commentaire"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Circonstances</Text>
        <Controller
          control={control}
          render={({ field: { onBlur, value } }) => (
            <TextInput
              style={styles.inputArea}
              placeholder={
                "Veuillez nous préciser les circonstances du sinistre..."
              }
              placeholderTextColor={"#C7C7CD"}
              onBlur={onBlur}
              onChangeText={(value) => setEnableCircumstances(value)}
              value={value}
              multiline={true}
            />
          )}
          name="Circonstances"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Préjudice</Text>
        <Controller
          control={control}
          render={({ field: { onBlur, value } }) => (
            <TextInput
              style={styles.inputArea}
              placeholder={"Veuillez nous indiquer le préjudice subi..."}
              placeholderTextColor={"#C7C7CD"}
              onBlur={onBlur}
              onChangeText={(value) => setEnablePrejudice(value)}
              value={value}
              multiline={true}
            />
          )}
          name="Préjudice"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Immatriculation</Text>
        <Controller
          control={control}
          render={({ field: { onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={"AA-001-AA"}
              placeholderTextColor={"#C7C7CD"}
              onBlur={onBlur}
              onChangeText={(value) => setEnableRegistration(value)}
              value={value}
            />
          )}
          name="Immatriculation"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Kilométrage</Text>
        <Controller
          control={control}
          render={({ field: { onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={"99 999 km"}
              placeholderTextColor={"#C7C7CD"}
              onBlur={onBlur}
              onChangeText={(value) => setEnableMileage(value)}
              value={value}
              keyboardType="number-pad"
            />
          )}
          name="Kilométrage"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Typologie du sinistre</Text>
        <Controller
          control={control}
          render={() => (
            <DropDownPicker
              listMode="SCROLLVIEW"
              dropDownDirection="AUTO"
              placeholder="Sélectionner le type de sinistre"
              placeholderStyle={{
                fontFamily: "Outfit_500Medium",
                fontSize: 17,
                color: "#C7C7CD",
              }}
              listItemLabelStyle={{
                fontSize: 17,
                fontFamily: "Outfit_500Medium",
              }}
              dropDownContainerStyle={{
                borderWidth: 1,
                borderColor: "#F3F5F6",
              }}
              labelStyle={{ fontSize: 17, fontFamily: "Outfit_500Medium" }}
              style={{ borderWidth: 0, height: windowH / 15 }}
              open={openLoss}
              value={valueLoss}
              items={enableLoss}
              setOpen={setOpenLoss}
              setValue={setValueLoss}
              setItems={setEnableLoss}
            />
          )}
          name="Typologie du sinistre"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Tiers impliqué?</Text>
        <Controller
          control={control}
          render={() => (
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  enableToggle1 === "Oui"
                    ? { backgroundColor: "#08004e", borderRadius: 10 }
                    : null,
                ]}
                onPress={() => setEnableToggle1("Oui")}
              >
                <Text
                  style={[
                    styles.btnText,
                    enableToggle1 === "Oui" ? { color: "white" } : null,
                  ]}
                >
                  Oui
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn,
                  enableToggle1 === "Non"
                    ? { backgroundColor: "#08004e", borderRadius: 10 }
                    : null,
                ]}
                onPress={() => setEnableToggle1("Non")}
              >
                <Text
                  style={[
                    styles.btnText,
                    enableToggle1 === "Non" ? { color: "white" } : null,
                  ]}
                >
                  Non
                </Text>
              </TouchableOpacity>
            </View>
          )}
          name="Tiers impliqué ?"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Le véhicule roule encore?</Text>
        <Controller
          control={control}
          render={() => (
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  enableToggle2 === "Oui"
                    ? { backgroundColor: "#08004e", borderRadius: 10 }
                    : null,
                ]}
                onPress={() => setEnableToggle2("Oui")}
              >
                <Text
                  style={[
                    styles.btnText,
                    enableToggle2 === "Oui" ? { color: "white" } : null,
                  ]}
                >
                  Oui
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn,
                  enableToggle2 === "Non"
                    ? { backgroundColor: "#08004e", borderRadius: 10 }
                    : null,
                ]}
                onPress={() => setEnableToggle2("Non")}
              >
                <Text
                  style={[
                    styles.btnText,
                    enableToggle2 === "Non" ? { color: "white" } : null,
                  ]}
                >
                  Non
                </Text>
              </TouchableOpacity>
            </View>
          )}
          name="Le véhicule roule encore ?"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Véhicule économiquement réparable?</Text>
        <Controller
          control={control}
          render={() => (
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  enableToggle3 === "Oui"
                    ? { backgroundColor: "#08004e", borderRadius: 10 }
                    : null,
                ]}
                onPress={() => setEnableToggle3("Oui")}
              >
                <Text
                  style={[
                    styles.btnText,
                    enableToggle3 === "Oui" ? { color: "white" } : null,
                  ]}
                >
                  Oui
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn,
                  enableToggle3 === "Non"
                    ? { backgroundColor: "#08004e", borderRadius: 10 }
                    : null,
                ]}
                onPress={() => setEnableToggle3("Non")}
              >
                <Text
                  style={[
                    styles.btnText,
                    enableToggle3 === "Non" ? { color: "white" } : null,
                  ]}
                >
                  Non
                </Text>
              </TouchableOpacity>
            </View>
          )}
          name="Véhicule économiquement irréparable ?"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Assistance demandée?</Text>
        <Controller
          control={control}
          render={() => (
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  enableToggle4 === "Oui"
                    ? { backgroundColor: "#08004e", borderRadius: 10 }
                    : null,
                ]}
                onPress={() => setEnableToggle4("Oui")}
              >
                <Text
                  style={[
                    styles.btnText,
                    enableToggle4 === "Oui" ? { color: "white" } : null,
                  ]}
                >
                  Oui
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn,
                  enableToggle4 === "Non"
                    ? { backgroundColor: "#08004e", borderRadius: 10 }
                    : null,
                ]}
                onPress={() => setEnableToggle4("Non")}
              >
                <Text
                  style={[
                    styles.btnText,
                    enableToggle4 === "Non" ? { color: "white" } : null,
                  ]}
                >
                  Non
                </Text>
              </TouchableOpacity>
            </View>
          )}
          name="Assistance demandée ?"
          rules={{ required: true }}
        />
        <TouchableOpacity style={styles.camera} onPress={() => navigation.navigate("Camera")}>
          <Ionicons name="camera-outline" size={60} color="#08004e" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Soumettre</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const DeclareClaimStack = createNativeStackNavigator();

function DeclareClaimStackScreen() {
  return (
    <DeclareClaimStack.Navigator>
      <DeclareClaimStack.Screen
        options={{ headerShown: false }}
        name="Déclarer sinistre"
        component={DeclareAClaim}
      />
      <DeclareClaimStack.Screen
        options={() => ({
          title: "Photo",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Camera"
        component={Camera}
      />
    </DeclareClaimStack.Navigator>
  );
}
export default DeclareClaimStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
    paddingHorizontal: "4%",
  },
  title: {
    fontSize: 20,
    color: "#08004e",
    marginTop: "10%",
    fontFamily: "Outfit_500Medium",
  },
  dateContainer: {},
  dateButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#08004e",
    height: windowH / 15,
    borderRadius: 10,
    paddingHorizontal: "4%",
    marginBottom: "2%",
  },
  textDateButton: {
    textAlign: "center",
    color: "white",
    fontSize: 17,
    fontFamily: "Outfit_500Medium",
  },
  textDate: {
    fontSize: 17,
    color: "#08004e",
    marginTop: 10,
    fontFamily: "Outfit_500Medium",
  },
  label: {
    fontSize: 17,
    color: "#08004e",
    marginTop: 30,
    marginBottom: 10,
    fontFamily: "Outfit_500Medium",
  },
  input: {
    backgroundColor: "white",
    fontFamily: "Outfit_500Medium",
    fontSize: 17,
    height: windowH / 15,
    paddingLeft: "2%",
    borderRadius: 10,
  },
  inputArea: {
    textAlignVertical: "top",
    backgroundColor: "white",
    fontFamily: "Outfit_500Medium",
    fontSize: 17,
    height: windowH / 9,
    paddingTop: "5%",
    paddingLeft: "2%",
    borderRadius: 10,
  },
  btnGroup: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  btn: {
    flex: 1,
    height: windowH / 15,
    justifyContent: "center",
  },
  btnText: {
    color: "#08004e",
    alignItems: "center",
    textAlign: "center",
    fontSize: 17,
    fontFamily: "Outfit_500Medium",
  },
  camera: {
    marginTop:'10%'
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#08004e",
    height: windowH / 15,
    borderRadius: 10,
    marginTop: "10%",
    marginBottom: "5%",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontFamily: "Outfit_500Medium",
  },
});
