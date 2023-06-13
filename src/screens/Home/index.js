import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useMemo, useCallback } from "react";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Location } from "expo-location";
import PressionavelHome from "../../components/modalhome";
import { Icon } from "../../components/Icon/index.js";
import { getCurrentLocation } from "../../services/location";
import BottomSheetComponente from "../../components/BottomSheet";

import { useNavigate } from "react-router-native";
export function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const [region, setRegion] = useState({
    latitude: -27.548288,
    longitude: -48.499018,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [location, setLocation] = useState({
    latitude: -27.548288,
    longitude: -48.499018,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getCurrentLocation().then((value) => {
      console.log(value);
      // setLocation(value);
      setRegion(value);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = Array.from(Array(100 + 1).keys())
    .slice(1)
    .map((element) => `${element}%`);

  const renderItem = useCallback(
    (item) => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back}>
      
      <Icon
        iconFrom={"AntDesign"}
        icon={"home"}
        style={styles.iconhome}
        color={"white"}
        
      ></Icon>
        <PressionavelHome style={styles.back} ></PressionavelHome>
      </TouchableOpacity>

      {region && (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={region}
        >
          <Marker
            coordinate={location}
          >
            {location && (
              <TouchableOpacity onPress={() => console.log(location)}>
                <Text>aaa</Text>
              </TouchableOpacity>
            )}
          </Marker>
        </MapView>
      )}

      <BottomSheetComponente
        index={null}
        snapPoints={snapPoints}
        backgroundStyle={styles.bottomStyle}
        handleIndicatorStyle={styles.bottomIndicatorStyle}
        data={data}
        renderItem={renderItem}
      ></BottomSheetComponente>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  back: {
    width: "12%",
    height: "5%",
    backgroundColor: "#FF4500",
    borderWidth: 2,
    borderRadius: 10000,
    borderColor: "#FF4500",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    marginBottom: "-15%",
    marginTop: "5%",
  },
  iconhome: {
    fontSize: 25,
  },
  bottomStyle: {
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#FF4500",
  },
  bottomIndicatorStyle: {
    backgroundColor: "#FF4500",
  },
});
