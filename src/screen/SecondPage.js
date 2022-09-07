import { StyleSheet, Text, View,Image,Button,TouchableOpacity, Pressable } from 'react-native'
import React,{useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useNavigation } from '@react-navigation/native'
const SecondPage = () => {
    const [isPlaying, setIsPlaying] = useState(true)
    const navigation =useNavigation();
  return (
    <View style={styles.container}>
     <View style={styles.header}>
     <Pressable style={styles.headerinner} onPress={()=> navigation.navigate('StartPage')}>
     <FontAwesome5 style={{fontSize: hp('2.5%')}} name='arrow-left' color='black' size={hp('2%')} />
     </Pressable>
     </View>
     <View style={styles.uppercontr}>
        <Text style={{fontWeight:'500',fontSize:hp('1.5%'),color:'#A020F0'}}>DASHBOARD DESIGN</Text>
        <Text  style={{fontSize:hp('3%'),color:'black',marginTop:hp('1%')}}>Setting Page</Text>
        <Text style={{fontSize:hp('3%'),color:'black',marginTop:hp('1%')}}>wireframe</Text>
        <View style={{flexDirection:'row'}}>
        <Image
          source={{uri: "https://i.pinimg.com/736x/2d/53/1a/2d531ab09cf9ae97e5536415af102f7f.jpg"}}
          style={styles.profileImgStyle}
          />
          <Image
          source={{uri: "https://i.pinimg.com/736x/2d/53/1a/2d531ab09cf9ae97e5536415af102f7f.jpg"}}
          style={styles.profileImgStyle}
          />
          <Image
          source={{uri: "https://i.pinimg.com/736x/2d/53/1a/2d531ab09cf9ae97e5536415af102f7f.jpg"}}
          style={styles.profileImgStyle}
          />
          </View>
     </View>
     <View style={styles.middlecontr}>
     <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={60}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}
    >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 40 }}>
          {remainingTime}
        </Text>
      )}
    </CountdownCircleTimer>
 
     
     </View>
     <View style={styles.lowercontr}>
     {/* <Button title="Toggle Playing" onPress={() => setIsPlaying(prev => !prev)} style={{width:wp('20%')}} /> */}
     <TouchableOpacity onPress={() => setIsPlaying(prev => !prev)} style={styles.btnstyle}>
        <Text style={{fontSize:hp('1.8%'),color:'white',fontWeight:'bold'}}>Take A Break</Text>
     </TouchableOpacity>
  <Text style={{fontSize:hp('1.8%'),color:'black',fontWeight:'500',marginTop:hp('3.5%')}} >See Team Activity</Text>
</View>
    </View>
  )
}

export default SecondPage

const styles = StyleSheet.create({
    container:{
        flex:1,
       // backgroundColor:'pink'
    },
    header:{
        width:wp('100%'),
        height:hp('4%'),
        //backgroundColor:'yellow',
        paddingLeft:wp('2%')
    },
    headerinner:{
        width:wp('10%'),
        height:hp('4%'),
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    uppercontr:{
        width:wp('100%'),
        height:hp('30%'),
        //backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center'
    },
    profileImgStyle:{
        height:hp('4%'),
        width:hp('4%'),
        borderRadius:hp('4%'),
        marginTop:hp('2%')
      },
      middlecontr:{
        width:wp('100%'),
        height:hp('30%'),
        //backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center'
      },
      lowercontr:{
        width:wp('100%'),
        height:hp('36%'),
        //backgroundColor:'red',
        alignItems:"center",
        paddingTop:hp('9%')
      },
      btnstyle:{
        width:wp('40%'),
        height:hp('7%'),
        backgroundColor:'#A020F0',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:hp('2%')
      }
})