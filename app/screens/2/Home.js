import React from "react"
import { StyleSheet, Image, View, Text } from "react-native"

import colors from "../../config/colors"
import AppButton from "../../components/AppButton"
import SearchSnip from "../../components/SearchSnip"
import Screen from "../../components/Screen"
import routes from "../../navigation/routes"

export default function Home(props) {
  return (
    <Screen style={styles.container} >
        
        <View style={styles.logoContainer}>
            <Image style={styles.image} source={require("../../assets/sneaked-logo-yellow.png")}/>
        </View>

        <View style={styles.buttonsContainer}>
          <AppButton title="Search" onPress={() => props.navigation.navigate(routes.SEARCH)} />
        </View>

        <View style={styles.searchContainer}>
          <Text style={styles.text}>Last Search:</Text>
          <SearchSnip title="Nike" onPress={() => props.navigation.navigate(routes.SEARCH)} />
          <Text style={styles.text}>Saved Searchs:</Text>
          <SearchSnip title="Jordons" onPress={() => props.navigation.navigate(routes.SEARCH)}/>
          <SearchSnip title="ADIDAS" onPress={() => props.navigation.navigate(routes.SEARCH)}/>
        </View>

    </Screen>
  )
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: colors.black,
  },

  logoContainer: {
    flex: .25,
    backgroundColor: colors.black,
    paddingTop: 10,
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "10%"
  },
  
  image: {
    width: "100%",
    resizeMode: "contain",
    },

  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "300",
    },
  
  buttonsContainer: {
    flex: .15,
    backgroundColor: colors.black,
    paddingTop: 30,
    width: "100%",
    },
  
  searchContainer: {
    flex: .60,
    backgroundColor: colors.black,
    paddingTop: 30,
    width: "100%",
    },

})