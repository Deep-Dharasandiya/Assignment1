import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,TextInput} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export function Title(props) {
    return (
      <Text style={{fontSize: props.fontsize,
                    color:'blue',
                    fontWeight:'700',
                    textAlign:'center'
                   }}
      >
      {props.title}
      </Text>

    )
}
export function Button(props) {
  return (
    <TouchableOpacity
    onPress={props.fn}
    style={{alignItems:'center',justifyContent:'center'}}>
      <LinearGradient  start={{x: 0.0, y: 0}} end={{x: 0.5, y: 1.0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={
        {height:props.height,
        width:props.width,
        borderRadius:props.height/2,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
      }
        }>
         <Text style={{fontSize: props.height/3,fontWeight:'600'}}>
           {props.lable}
         </Text>
      </LinearGradient>
    </TouchableOpacity>
    
  )
}
export function TextField(props) {
  return (
    <View style={{flexDirection: 'row',
        paddingRight: 10,
        marginTop: 20,
        borderRadius: 10,
        fontSize: 15,
        backgroundColor: '#D8F0FF',
        width: props.width}}>
    <Icon
      style={{ marginHorizontal: 5,
        alignSelf: 'center',
        justifyContent: 'center',}}

      name={props.iconname}
      color="gray"
      size={20}
    />
    <TextInput
      style={{flex: 1,color:'black'}}
      placeholder={props.lable}
      fontSize={20}
      placeholderTextColor="gray"
      onChangeText={text => props.fn(text)}
      defaultValue={props.value}
    />
  </View>
  )
  
}
export function TextArea(props) {
  return (
    <View style={{flexDirection: 'row',
        paddingRight: 10,
        marginTop: 20,
        borderRadius: 10,
        fontSize: 15,
        backgroundColor: '#D8F0FF',
        width: props.width}}>
    <Icon
      style={{ marginHorizontal: 5,
        alignSelf: 'center',
        justifyContent: 'center',}}

      name={props.iconname}
      color="gray"
      size={20}
    />
    <TextInput
      multiline={true}
      style={{flex: 1,color:'black'}}
      placeholder={props.lable}
      fontSize={20}
      placeholderTextColor="gray"
      onChangeText={text => props.fn(text)}
      defaultValue={props.value}
    />
  </View>
  )
  
}
export function Checkbox(props) {
  return (
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20}}>
    
    <CheckBox
    disabled={false}
    value={props.checkvalue}
    onValueChange={(newValue) => props.fn()}
  />
  <Text style={{color:'black',fontSize:20}}>{props.lable}</Text>
 </View>
  )
}
export function RadioBtn(props) {
  return (
    <TouchableOpacity
    onPress={() => props.fn(props.value)}
    style={{flexDirection:'row',
   alignItems:'center',
  justifyContent:'center'}}
    >
    <View style={[{
      height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:10,
    }, props.style]}>
      {
        props.selectedvalue == props.value?
          <View style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: 'blue',
          }}/>
          : null
      }
    
    </View>
    <Text style={{color:'black',fontSize:20,marginLeft:20}}>{props.lable}</Text>
    
 </TouchableOpacity>
  )
}
const getCurrentDate=()=>{

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  return year + '-' + month + '-' + date;
}
export function CalenderComponent() {
  return (
    <Calendar
    style={{marginTop:30}}
    current={Date(getCurrentDate())}
    minDate={'2000-01-11'}
    maxDate={'2030-12-31'}
    onDayPress={(day) => {console.log('selected day', day)}}
    onDayLongPress={(day) => {console.log('selected day', day)}}
    hideExtraDays={true}
  />

  )
}