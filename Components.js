import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Title(props) {
    return (
      <Text style={{fontSize: props.fontsize,
                    color:'blue',
                    fontWeight:'700',
                   }}
      >
      {props.title}
      </Text>

    )
}