import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from "react-native";
import { useNavigate } from "react-router-native";
import { Icon } from "../../components/Icon/index.js";


const Pressionavel = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.novoctt}>Novo contato</Text>
            <TextInput style={styles.modalText}
            placeholder="nome"></TextInput>
            <TextInput style={styles.modalText}
            placeholder="telefone"></TextInput>
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalText}>sair</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.adicional]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>
        <Icon
            iconFrom={"AntDesign"}
            icon={"plus"}
            style={styles.icon}
            color={"white"}
          ></Icon>
        </Text>
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: "100%",
    alignContent: "space-around",
    alignItems: "flex-end",
    flexDirection: "row-reverse",
    borderColor: "#FFFFFF",
  },
  modalView: {
    heigth: "33%",
    width: "50%",
    marginRight: "2%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ff4900",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    padding: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 9,
    elevation: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  adicional: {
    width: "20%",
    height: "30%",
    borderRadius: 200,
    backgroundColor: "#ff4900",
    justifyContent: "center",
    marginLeft: "2%",
    marginRight: "2%",
  },
  home: {
    width: "100%",
    height: "50%",
    borderRadius: 200,
    backgroundColor: "#ff4900",
    justifyContent: "center",
  },
  buttonClose: {},
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  },
  modalText: {
    marginBottom: 5,
    textAlign: "center",
    borderBottomWidth: 2,
  },
  novoctt:{
    fontWeight:"bold",
    fontSize:18  }
});

export default Pressionavel;
