import { FlatList, Text, View } from "react-native";
import React from "react";
// import Browse from "./Browse";

const SearchFilter = ({ data, input, id }) => {
  return (
    <View style={{ marginLeft: 30 }}>
      <FlatList
        data={data}
        keyExtractor={id}
        renderItem={({ item }) => {
          if (input === "") {
            return (
              <View style={{ marginVertical: 12 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    height: 1,
                    width: 300,
                    marginTop: 5,
                  }}
                ></Text>
              </View>
            );
          }

          if (item.name.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View style={{ marginVertical: 12 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    height: 1,
                    width: 300,
                    marginTop: 5,
                  }}
                ></Text>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchFilter;
