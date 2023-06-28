import React, { useState, useEffect, useMemo, useCallback } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, View, Text, TouchableOpacity,Image } from "react-native";
import PressionavelHome from "../../components/modalhome";
import { Icon } from "../../components/Icon/index.js";
import { getCurrentLocation } from "../../services/location";
import BottomSheetComponente from "../../components/BottomSheet";

import { useNavigate } from "react-router-native";
export function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const [region, setRegion] = useState({
    latitude: -27.4399919,
    longitude: -48.3955243,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [location, setLocation] = useState({
    latitude: -27.548288,
    longitude: -48.499018,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [locationAdmin, setLocationAdmin] = useState({
    latitude: -27.548288,
    longitude: -48.488793,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });  
  const [locationHeitor, setLocationHeitor] = useState({
    latitude: -27.779041,
    longitude: -48.487546,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [locationNegao, setLocationNegao] = useState({
    latitude: -27.586832, 
    longitude: -48.438007,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [locationJoao, setLocationJoao] = useState({
    latitude: -27.579398,
    longitude:  -48.541761,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getCurrentLocation().then((value) => {
      console.log(value);
      setLocationAdmin(value);
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
      <View key={item}>
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
            icon={"back"}
            style={styles.iconback}
            color={"white"}
          ></Icon>
     
        <PressionavelHome> </PressionavelHome>
      </TouchableOpacity>

      {region && (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={region}
        >
          <Marker
            coordinate={locationAdmin}
          >
            {locationAdmin && (
              <TouchableOpacity onPress={getCurrentLocation()}>
                 <Image
            source={require('../../../assets/UserAdmin.png')}/>
              </TouchableOpacity>
            )}
          </Marker>

          <Marker
            coordinate={locationHeitor}
          >
            {locationHeitor && (
              <TouchableOpacity onPress={() => console.log("foda-se o rap gang")}>
                 <Image
            source={require('../../../assets/PitbullMarker.png')}/>
              </TouchableOpacity>
            )}
          </Marker>

          <Marker
            coordinate={locationNegao}
          >
            {locationNegao && (
              <TouchableOpacity onPress={() => console.log("foda-se o rap gang")}>
                 <Image
            source={require('../../../assets/GutoMarker.png')}/>
              </TouchableOpacity>
            )}
          </Marker>

          <Marker
            coordinate={locationJoao}
          >
            {locationJoao && (
              <TouchableOpacity onPress={() => console.log("foda-se o rap gang")}>
                 <Image
            source={require('../../../assets/JoaoMarker.png')}/>
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
    width: "13%",
    height: "4%",
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
  iconback:{
    fontSize:20,
  
    
  }
});
