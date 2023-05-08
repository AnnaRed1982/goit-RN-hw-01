import React, { useState, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  Button,
  View,
  Text,
  Dimensions,
} from "react-native";

// import CreatePostsScreen from "./CreatePostsScreen";
// import ProfileScreen from "./ProfileScreen";
// import Home from "./Home";

const MainTab = createBottomTabNavigator();

const { width, height } = Dimensions.get("screen");

export default function PostsScreen() {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.authBox}>
        <View style={styles.boxFoto}></View>
        <View>
          <Text style={styles.nameTitle}>Natali Romanova</Text>
          <Text style={styles.emailTitle}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingTop: 32,
  },
  authBox: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  boxFoto: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  nameTitle: {
    color: "#212121",
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
  },
  emailTitle: {
    color: "rgba(33, 33, 33, 0.8)",
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
  },
});
