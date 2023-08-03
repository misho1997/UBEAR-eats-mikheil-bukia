import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

let data = [
  {
    title: "beer",
    location: {
      latitude: 41.57398279192919,
      longitude: 44.984869557241794,
    },
    description: "glacier",
  },
  {
    title: "meat",
    location: {
      latitude: 41.569600819650375,
      longitude: 44.98190638683316,
    },
    description: "come see",
  },
];

const Map = () => {
  const [draggCoord, setDraggCoord] = useState({
    latitude: 41.57183818948648,
    longitude: 44.981500238992965,
  });
  // const navigation = useNavigation();
  // const onRegionChange = (region) => {
  //   console.log(region);
  // };

  // const showLocationOfInterest = () => {
  //   return data.map((item, index) => {
  //     return (
  //       <Marker
  //         key={index}
  //         coordinate={item.location}
  //         title={item.title}
  //         description={item.description}
  //       />
  //     );
  //   });
  // };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        // onRegionChange={onRegionChange}
        initialRegion={{
          latitude: 41.57183818948648,
          latitudeDelta: 0.009621695006437392,
          longitude: 44.981500238992965,
          longitudeDelta: 0.007344126379706495,
        }}
      >
        {/* {showLocationOfInterest()} */}
        <Marker
          style={{ width: 100, height: 100 }}
          draggable
          coordinate={draggCoord}
          onDragEnd={(e) => setDraggCoord(e.nativeEvent.coordinate)}
          pinColor="red"
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
