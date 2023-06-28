import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigate } from "react-router-native";


import { TextInput } from "../../../src/components/TextInput";
import { Icon } from "../../components/Icon/index.js";
import { UserContext } from "../../contexts/UserContext";

export function Interesses() {
  const navigate = useNavigate();
  const { data } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Interesses</Text>
      
      <View style={styles.div2}>
        <View style={styles.div}>
          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>Drinks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}

            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>Churrasco</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("/perfil")}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>Futebol</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>Festas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>Festas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>surf</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>jogos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>jogos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>cafezin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>cafezin</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.div}>
          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>Barzinho</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>praia</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            // onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>sushi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>poker</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>skate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>skate</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>jiujitsu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>beachtenis</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>natação</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            //onPress={() => Alert.alert("ola")}
          >
            <Text style={styles.text}>natação</Text>
          </TouchableOpacity>
        </View>
      </View>
     

      <TouchableOpacity
        style={styles.buttonn}
        onPress={() => navigate("/perfil")}
      
      >
        <Icon
          iconFrom={"AntDesign"}
          icon={"user"}
          style={styles.icon}
          color={"white"}
        ></Icon>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: "#FF4500",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#FF4500",
    alignItems: "center",
    paddingTop: 5,
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFf",
  },

  imageBackground: {
    flex: 1,
    position: "relative",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    flex: 1,
  },
  buttonn: {
    width: 100,
    height: 100,
    backgroundColor: "#FF4500",
    borderWidth: 2,
    borderRadius: 10000,
    borderColor: "#FF4500",
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },

  logo: {
    height: 50,
    width: 50,
  },
  div: {
    flexDirection: "column",
  },
  div2: {
    flexDirection: "row",
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FF4500",
    margin: 30,
  },
  icon: {
    fontSize: 50,
    color: "white",
  },
});
