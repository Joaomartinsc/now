import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useNavigate } from "react-router-native";
import { Icon } from "../../components/Icon/index.js";

const App = ({
  
  index,
  snapPoints,
  backgroundStyle,
  handleIndicatorStyle,
  data,
  renderItem
}) => {
  const navigate = useNavigate();
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  
  const sheetRef = useRef(null);
  return (
    
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        backgroundStyle={backgroundStyle}
        handleIndicatorStyle={handleIndicatorStyle}
       
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Amigos 
        </Text> 
          
        <TouchableOpacity
          style={styles.contact}
          onPress={() => navigate("/perfilamigo")}
        >
          <Text style={styles.contactText}>Joao</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.contact}
          onPress={() => navigate("/perfilamigo2")}
        >
          <Text style={styles.contactText}>Daniel</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.contact}
          onPress={() => navigate("/perfilamigo3")}
        >
          <Text style={styles.contactText}>gustavo</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.contact}
          onPress={() => navigate("/perfilamigo4")}
        >
          <Text style={styles.contactText}>Heitor</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.contact}
          onPress={() => navigate("/")}
        >
          <Text style={styles.contactText}>---------</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.contact}
          onPress={() => navigate("/")}
        >
          <Text style={styles.contactText}>---------</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity
          style={styles.contact}
          onPress={() => navigate("/")}
        >
          <Text style={styles.contactText}>---------</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contact}
          onPress={() => navigate("/")}
        >
          <Text style={styles.contactText}>---------</Text>
        </TouchableOpacity>










          {data.map(renderItem)}
        </BottomSheetScrollView>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#fff",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#000",
  },
  contact:{
    width: "99%",
    height: 40,
    backgroundColor: "#FF4500",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#FF4500",
    margin:1
 
  },
  contactText:{
    fontSize: 21,
    fontWeight: "bold",
    color: "#FFf",
  },
  title:{
    fontSize: 31,
    fontWeight: "bold",
    color: "#FF4500",
  },
  iconAmigos:{
    fontSize: 25,
    color: "#FF4500",
  }
});

export default App;