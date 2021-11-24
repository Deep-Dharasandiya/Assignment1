import React from 'react'
import { Dimensions,StyleSheet, Text, View } from 'react-native'
import useOrientation from './useOrientation';
import { Title } from './Components';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  const Orientation=useOrientation();
  
  return (
    <LinearGradient  start={{x: 0.0, y: 0}} end={{x: 0.5, y: 1.0}} colors={['red','yellow']} style={styles.body}>
      <Title
        title="Hello World!"
        fontsize={Orientation.isPotraite ? Orientation.width*0.10+ Orientation.height*0.01:
                  Orientation.height*0.01+Orientation.width*0.10}
      />
      </LinearGradient>
  )
}

const styles = StyleSheet.create({

  body:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'

  },

})
