import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginRight: 20,
          marginTop: 70,
        }}
      >
        <TouchableOpacity onPress={() => setCounter(0)}>
          <MaterialCommunityIcons name="restart" size={36} color="black" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        
      >
        <Text style={{ fontSize: 70, color: "#263200" }}> {counter} </Text>
        <Text style={{ fontSize: 25, color: "#263200" }}>Counter</Text>
      </View>

      <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#263200",
              height:60,
              width:60,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              marginHorizontal:60,
            }}
            onPress={() => setCounter(counter - 1)}
          >
            <Text style={{ color: "black", fontSize: 40 }}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#263200",
               height:60,
               width:60,
               justifyContent: "center",
               alignItems: "center",
               borderWidth: 1,
               marginHorizontal:90,
              
            }}
            onPress={() => setCounter(counter + 1)}
          >
            <Text style={{ color: "black", fontSize: 20 }}>+</Text>
            
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}