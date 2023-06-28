import { StyleSheet, View } from 'react-native';
import { Router } from './Router';
import { UserProvider } from './src/contexts/UserContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { initializeApp } from "firebase/app"
import { getFireStore } from "firebase/firestore"
import { useState } from 'react';

//const firebaseConfig = initializeApp ({
  //apiKey: "AIzaSyDYGtDnKc7A5ZL0YNdiSG4AU5I8_pGKNTY",
 // authDomain: "now-ap.firebaseapp.com",
 // projectId: "now-ap",});
 


export default function App() {
  
  return (
     <View style={styles.container}>
      <GestureHandlerRootView style={{flex:1, width: '100%'}}>
      <UserProvider>
        <Router></Router>
      </UserProvider>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});