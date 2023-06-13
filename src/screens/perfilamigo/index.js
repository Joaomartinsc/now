import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text
} from "react-native";
import { TextInput } from "../../components/TextInput";
import { useNavigate } from "react-router-native";
import { Icon } from "../../components/Icon/index.js";

//import { useState } from "react";

//export default function Cadastrod() {
//const [formValue, setFormValue] = useState({
//nome: "",
// apelido: "",
// telefone: "",
//nascimento:"",

// });
//}
export function Perfilamigo() {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/fundo.png")}
        style={styles.imageBackground}
      >
       
       <Icon
            iconFrom={"AntDesign"}
            icon={"user"}
            style={styles.iconInfo}
            color={"white"}
            
        ></Icon>
       
        
          <View style={styles.form}>
          <TextInput
           
            label="nome"
            //onChangeText={(text) => handleChange(text, "nome")}
            // value={formValue.nome}
          />

          <TextInput
          
            label="apelido"
            //onChangeText={(text) => handleChange(text, "apelido")}
            // value={formValue.apelido}
          />

          <TextInput
              icon="phone"
              iconFrom="FontAwesome5"
              label="telefone"
            //onChangeText={(text) => handleChange(text, "telefone")}
            //value={formValue.telefone}
          />
          <TextInput
              icon="calendar"
              iconFrom="FontAwesome5"
              label="aniversario"
           
          />
          
        </View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("/")}
        ><Text
        style={styles.interesses}
        > <Icon
        iconFrom={"AntDesign"}
        icon={"back"}
        style={styles.iconInfo}
        color={"white"}
        
    ></Icon>
   </Text>
          
        </TouchableOpacity>

        <StatusBar style="auto" />
      </ImageBackground>
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
    width: "30%",
    height: "5%",
    backgroundColor: "#FF4500",
    borderWidth: 2,
    borderRadius: 100,
    borderColor: "#FF4500",
    alignItems: "center",
    paddingTop: 5,
    margin: 100,

  },
  login: {
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 100,
    maxHeight: 250,
    paddingTop: 70,

  },
  logo: {
    height: 200,
    width: 200,
  },
  info:{
    alignItems:"center",
    fontSize: 30,
    color: "#FFf",
    margin:20

  },
  iconInfo:{
    padding:20,
    fontSize:25,
    fontWeight: "bold",
  },
  icon:{
    padding:18,
    fontSize:50,

  },
  
  interesses:{
    color:"#FFf",
    fontWeight:"bold",
    alignItems:"center"
  }
}
);