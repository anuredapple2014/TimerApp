import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,Pressable, TouchableHighlight } from 'react-native'
import React from 'react'
import ImagePath from '../component/ImagePath'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
const StartPage = () => {
 const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <ImageBackground
       source={ImagePath.icRoad}
       resizeMode="cover"
    style={{flex:1,alignItems:'center',justifyContent:'flex-end',paddingBottom:hp('2.5%')}}
      >
        <View style={styles.endcontainer}>
         <Text style={{fontSize:hp('4%'),fontWeight:'bold'}}>Never Stress</Text>
         <Text style={{fontSize:hp('1.8%')}}>Plan your day,stay productive and</Text>
         <Text style={{fontSize:hp('1.8%')}}>accomplish your goals</Text>
         <TouchableHighlight style={styles.btnstyle} onPress={()=>navigation.navigate('SecondPage')} underlayColor="#CF9FFF">
         <FontAwesome5 style={{fontSize: hp('2.5%')}} name='arrow-right' color='white' size={hp('2%')} />
         {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{fontSize: hp('2.5%')}}  name='arrow' color='white' /> */}
         </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  )
}

export default StartPage

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    endcontainer:{
        width:wp('95%'),
        height:hp('40%'),
        backgroundColor:'white',
        borderRadius:hp('4%'),
        alignItems:'center',
        justifyContent:'center'
    },
    btnstyle:{
        width:wp('12%'),
        height:hp('5%'),
        backgroundColor:'#A020F0',
        marginTop:hp('3.5%'),
        borderRadius:hp('1%'),
        alignItems:'center',
        justifyContent:'center'
    }
})