import React from 'react'
import { Dimensions,ScrollView,StyleSheet, Text, View ,Image} from 'react-native'
import useOrientation from './useOrientation';
import { Button, Title,TextField ,TextArea, Checkbox,RadioBtn,CalenderComponent} from './Components';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function App() {
  const [textValue,setTextValue] = React.useState();
  const [opencelender,setopencelender] = React.useState(false);
  const [radiobtnValue,setRadioBtnValue] = React.useState();
  const [checkValue,setTcheckalue] = React.useState(false);
  const [textAreaValue,setTextAreaValue] = React.useState();
  const Orientation=useOrientation();
  const [selectedDate,setSelectedDate] = React.useState(new Date());
  const [selectedTime,setSelectedTime] = React.useState(new Date());
  const [openDatePiker,setopenDatePiker] = React.useState(false);
  const [openTimePiker,setopenTimePiker] = React.useState(false);
  const [dateText,setdateText] = React.useState('');
  const [timeText,settimeText] = React.useState('');
  const [imguricamera,setimguricamera] = React.useState('');
  const [imgurigallery,setimgurigallery] = React.useState('');
  const onbtn=()=>{

  }
  const onchangetext=(text)=>{
      setTextValue(text);
  }
  const onchangetextarea=(text)=>{
    setTextAreaValue(text);
  }
  const oncheckbox=()=>{
    setTcheckalue(!checkValue);
  }
  const onradiobtn=(value)=>{
    setRadioBtnValue(value);
  }
  const oncalender=()=>{
    setopencelender(!opencelender);
  }
  const opendatepiker=()=>{
    setopenDatePiker(true);
  }
  const opentimepiker=()=>{
    setopenTimePiker(true);
  }
  
  const ondatechange=(event,selectedDate)=>{
    setopenDatePiker(Platform.OS === 'ios')
    setSelectedDate(selectedDate);

    const tdate=new Date(selectedDate);
    var date = tdate.getDate();
    var month = tdate.getMonth() + 1;
    var year = tdate.getFullYear();
    setdateText(year + '-' + month + '-' + date);
  }
  const ontimechange=(event,selectedTime)=>{
    setopenTimePiker(Platform.OS === 'ios')
    setSelectedTime(selectedTime);

    const ttime=new Date(selectedTime);
    var hours = ttime.getHours();
    var min = ttime.getMinutes();
    var sec = ttime.getSeconds();
    settimeText(hours + ':' + min );
  }
  const imgCamera=()=>{
    const options = {
        storageOptions: {
          path: 'images',
          mediaType: 'photo',
        },
        includeBase64: false,
      };
      
      launchCamera(options, response => {
        if (response.didCancel) {
        console.log('User cancelled image picker');
        } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        } else {
        setimguricamera(response.assets[0]['uri']);
        }
      });
  }
  const imgGallery=()=>{
    const options = {
      storageOptions: {
      path: 'images',
      mediaType: 'photo',
      },
      includeBase64: false,
      };
      
      launchImageLibrary(options, response => {
      if (response.didCancel) {
      console.log('User cancelled image picker');
      } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      } else {
        setimgurigallery(response.assets[0]['uri']);
     
      }
      });
  }
  
  return (
      <LinearGradient  start={{x: 0.0, y: 0}} end={{x: 0.5, y: 1.0}} colors={['red','yellow']} style={styles.body}>
        <ScrollView>
        <Title
          title="Basic Components"
          fontsize={Orientation.isPotraite ? Orientation.width*0.07:Orientation.width*0.07}
        />
        <Button
          fn= {onbtn}
          height ={50}
          width ={Orientation.width/2}
          lable ="Click Me"
        />
        <TextField
          fn={onchangetext}
          value={textValue}
          iconname="house-user"
          lable="TextField"
          height={50}
          width={Orientation.width/1.3}
        />
        <TextArea
          fn={onchangetextarea}
          value={textAreaValue}
          iconname="house-user"
          lable="TextArea"
          height={50}
          width={Orientation.width/1.3}
        />
      
        <Checkbox
        fn={oncheckbox}
        checkvalue={checkValue}
        lable="Check Box"
        />
        <RadioBtn
          fn={onradiobtn}
          value={1}
          selectedvalue={radiobtnValue}
          lable="Yes"
        />
        <RadioBtn
          fn={onradiobtn}
          value={2}
          selectedvalue={radiobtnValue}
          lable="No"
        />


        
        <Button
          fn= {oncalender}
          height ={50}
          width ={Orientation.width/2}
          lable ={opencelender?"Close Calender":"Open Calender"}
        />
        {opencelender &&(<CalenderComponent/>)}



        <Button
          fn= {opendatepiker}
          height ={50}
          width ={Orientation.width/2}
          lable ={dateText==''?"Date Piker":dateText}
        />
        {openDatePiker && (
            <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            mode="date"
            is24Hour={true}
            display="calendar"
            onChange={ondatechange}
          />
        )}




        <Button
          fn= {opentimepiker}
          height ={50}
          width ={Orientation.width/2}
          lable ={timeText==''?"Time Piker":timeText}
        />
         {openTimePiker && (
            <DateTimePicker
            testID="TimePicker"
            value={selectedTime}
            mode="time"
            is24Hour={true}
            display="clock"
            onChange={ontimechange}
          />
        )}



        <Button
          fn= {imgCamera}
          height ={50}
          width ={Orientation.width/2}
          lable ="Image From Camera"
        />
        {imguricamera != '' && (
          <Image
          source={{uri:imguricamera}}
            style={styles.imgstyle}
            />
        )}



        
        <Button
          fn= {imgGallery}
          height ={50}
          width ={Orientation.width/2}
          lable ="Image From Gallery"
        />
        {imgurigallery != '' && (
          <Image
          source={{uri:imgurigallery}}
          style={styles.imgstyle} />
        )}
        
      
       
        </ScrollView>

      </LinearGradient>
  )
}

const styles = StyleSheet.create({

  body:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  imgstyle:{
    marginTop:20,
  height: 200,
  width: 200,
  borderRadius: 100,
  borderWidth: 2,
  borderColor: 'black',
  }

})
