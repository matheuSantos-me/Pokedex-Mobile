import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import { InputPrimary } from '../../../../components/common'
import Pokeboll from '../../../../assets/pokeball.png'

const Header = () => {

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={Pokeboll} style={styles.image}>
        <Text style={styles.title}>OI</Text>
        <Text style={styles.title}>Po</Text>
        <Text style={styles.title}>OI</Text>
        
        <View style={styles.contentSearch}>
          <Text style={styles.title}>Pokédex</Text>
          <Text style={styles.description}>Search for Pokémon by name or using the National Pokédex number.</Text>
          {/* <InputPrimary /> */}
        </View>
      </ImageBackground>

    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200,
    resizeMode: "cover",
    justifyContent: "center"
  },
  contentSearch: {
    marginTop: 100
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  description: {
    width: '70%',
    fontSize: 16,
    color: '#747476'
  }
})

export { Header }