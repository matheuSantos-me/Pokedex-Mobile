import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const InputPrimary = () => {

  return (
    <TextInput
      placeholder="What Pokémon are you looking for?"
      style={styles.Input}
    />
  )
}

const styles = StyleSheet.create({
  Input: {
    backgroundColor: '#F2F2F2'
  }
})

export { InputPrimary }