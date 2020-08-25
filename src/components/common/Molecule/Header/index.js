import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import { InputPrimary } from '../../../../components/common'
import Pokeboll from '../../../../assets/pokeball.png'

const Header = () => {

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={Pokeboll} style={styles.image}>
        <View style={styles.contentActions}>
          <Text>OI</Text>
          <Text>Po</Text>
          <Text>OI</Text>
        </View>
      </ImageBackground>

      <View style={styles.contentSearch}>
        <Text style={styles.title}>Pokédex</Text>
        <Text style={styles.description}>Search for Pokémon by name or using the National Pokédex number.</Text>
        <InputPrimary />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: 200,
    resizeMode: "cover",
    justifyContent: "center"
  },
  contentActions: {
    width: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 30,
    flexDirection: 'row'
  },
  contentSearch: {
    marginTop: 100
  },
  title: {
    fontSize: 40,
    lineHeight: 80,
    fontWeight: 'bold'
  },
  description: {
    width: '70%',
    fontSize: 16,
    lineHeight: 20,
    color: '#747476'
  }
})

export { Header }