
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainBody}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ alignItems: "center" }}>
          <Text style={styles.Header}>Registration Page</Text>
          <Image
            source={require("./img/vote1.png")}
            style={{
              width: "40%",
              height: 80,
              resizeMode: "contain",
              margin: 30,
              borderRadius: wp("10%"),
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setName(UserName)}
              placeholder="Enter First Name"
              placeholderTextColor="#0A0A0A"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() => this._nameinput && this._nameinput.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              placeholder="Enter Email"
              placeholderTextColor="#0A0A0A"
              keyboardType="email-address"
              returnKeyType="next"
              returnKeyType="next"
              onSubmitEditing={() =>
                this._passwordinput && this._passwordinput.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword1) => setPassword1(UserPassword1)}
              placeholder="Enter Password"
              placeholderTextColor="#0A0A0A"
              returnKeyType="next"
              returnKeyType="next"
              onSubmitEditing={() =>
                this._password1input && this._password1input.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword2) => setPassword2(UserPassword2)}
              placeholder="Confirm Password"
              placeholderTextColor="#0A0A0A"
              returnKeyType="next"
            />
          </View>
          <Text style={styles.registerTextStyle}>OR</Text>

          <View style={styles.fixToText}>
            <Button
              title="Facebook"
              onPress={() => Alert.alert("Right button pressed")}
            />

            <Button
              title="Gmail"
              onPress={() => Alert.alert("Right button pressed")}
            />
            <Button
              title="Amazon"
              onPress={() => Alert.alert("Right button pressed")}
            />
          </View>
          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <Button
          title="Go Back"
          onPress={() => navigation.navigate("Welcome")}
        />
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  Header: {
    fontSize: 35,
    color: "#E74C3C",
    fontWeight: "bold",
    marginTop: hp("9%"),
  },

  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#0A0A0A",
    borderColor: "#0A0A0A",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: wp("30%"),
    marginRight: 35,
    marginTop: hp("3%"),
    marginBottom: hp("3%"),
    fontWeight: "bold",
    width: wp("40%"),
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "#0A0A0A",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#0A0A0A",
    textAlign: "center",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "#0A0A0A",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
  },
  registerTextStyle: {
    color: "#0A0A0A",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 30,
    marginBottom: hp("10%"),
    marginLeft: 20,
    marginRight: 20,
  },
});
