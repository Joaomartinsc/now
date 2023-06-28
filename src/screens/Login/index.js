import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { TextInput } from "../../../src/components/TextInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useContext, useState, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-native";

import { UserContext } from "../../contexts/UserContext";
import BottomSheetComponente from "../../components/BottomSheet";

export function Login() {
  const { width, height } = Dimensions.get("window");
  const [formValue, setFormValue] = useState({
    email: "Admin",
    password: "Admin",
    passwordConfirm: "Admin",
  });
  const navigate = useNavigate();
  const { handleLogin } = useContext(UserContext);

  const handleChange = (value, key) => {
    setFormValue({ ...formValue, [key]: value });
  };

  const Authenticate = () => {
    if (handleLogin(formValue.email, formValue.password)) {
      navigate("/home");
    }
  };

  return (
      
      <KeyboardAwareScrollView>
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/fundo.png")}
        style={styles.imageBackground}
        >
          
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
          ></Image>
        
        <View style={styles.form}>
          <TextInput
            icon="mail"
            label="e-mail"
            onChangeText={(text) => handleChange(text, "email")}
            value={formValue.email}
          />
          
          <TextInput
            icon="key"
            iconFrom="FontAwesome5"
            label="Senha"
            type="password"
            onChangeText={(text) => handleChange(text, "password")}
            value={formValue.password}
          />
          <TouchableOpacity>
            <Text style={styles.esqueceu} onPress={() => navigate("/cadastro")}>
              Esqueceu a senha?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => Authenticate()}>
          <Text style={styles.login}>Entrar</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
         
      </ImageBackground>
    </View>
      </KeyboardAwareScrollView>
   
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
    borderRadius: 5,
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
    paddingHorizontal: 70,
    maxHeight: "19%",
    paddingTop: 70,
  },
  esqueceu: {
    color: "#FF4500",
    paddingTop: 5,
  },
  logo: {
    height: 200,
    width: 200,
  },
});
