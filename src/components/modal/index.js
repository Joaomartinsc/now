import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView} from 'react-native';
import { useNavigate } from "react-router-native";


const Popup = () => {
    const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  return (

    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <Pressable style={[styles.button, styles.buttonClose]}>
           
              <Text style={styles.modalText} 
               onPress={() => navigate("/perfilamigo")}>Perfil</Text>
            </Pressable>
            
            <Pressable style={[styles.button, styles.buttonClose]}>
              <Text style={styles.modalText}>Remover</Text>
            </Pressable>
            
            <Pressable style={[styles.button, styles.buttonClose]}>
              <Text style={styles.modalText}>Navegar</Text>
            </Pressable>
            
          
            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.modalText}>sair</Text>
            </Pressable>
          
          </View>
        </View>
      </Modal>
          
      <ScrollView style={styles.scroll}>
      
        <Pressable
          style={[styles.pressionavel, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>João</Text>
        </Pressable>
      
        <Pressable
          style={[styles.pressionavel, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Daniel</Text>
        </Pressable>
      
        <Pressable
          style={[styles.pressionavel, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Gustavo</Text>
        </Pressable>
      
        <Pressable
          style={[styles.pressionavel, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Heitor</Text>
        </Pressable>
      
      
   
      </ScrollView>
     
       
    </View>
     
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    whidth:'100%',
    heigth:'100%',
    justifyContent: 'flex-start',
    alignItems:'flex-end',
    flexDirection:'column',
    borderColor:'#FFFFFF',
    marginTop: 22,
  },
  modalView: {
    heigth:'35%', 
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#ff4900',
    borderWidth:1,
    borderColor:'black',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.60,
    shadowRadius: 9,
    elevation: 15,
    
  },
  button: {
    borderRadius: 1,
    padding: 10,   
  },
  pressionavel:{
    borderRadius: 1,
    padding: 12,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize:25
  },
  buttonOpen: {
    width:'100%',
    borderBottomWidth:2,
    borderTopEndRadius:0,
    borderColor:'#cfcfcf'     
  },
  buttonClose: {
    borderBottomWidth:1,
  },
  modalText: {
    textAlign: 'center',
    fontWeight:'bold'
  },
  scroll:{
    width: '100%',
    height: '100%',
  },
  Pressable:{
    width:'26%',
    height:'15%',
    borderRadius:200,
    borderBottomWidth:2,
    backgroundColor:'#ff4900',
    
  }
  
});

export default Popup;