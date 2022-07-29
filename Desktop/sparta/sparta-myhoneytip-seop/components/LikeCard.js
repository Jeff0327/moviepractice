import React from 'react';
import {ScrollView,View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function Card({content,navigation}){
  const deleteBtn=()=>{

  }
  return(
      
        <ScrollView>
            <Image style={styles.cardImage} source={{uri:content.image}}/>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
            </View>
            {/* <TouchableOpacity style={styles.Btn} onPress={()=>deleteBtn()}><Text style={styles.buttonText}>삭제</Text></TouchableOpacity> */}
          </ScrollView>
    )
}


const styles = StyleSheet.create({
  
    card:{
      flex:1,
      flexDirection:"row",
      margin:10,
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      paddingBottom:10
    },
    cardImage: {
      flex:1,
      width:100,
      height:100,
      borderRadius:10,
      
    },
    cardText: {
      flex:2,
      flexDirection:"column",
      marginLeft:10,
    },
    cardTitle: {
      fontSize:20,
      fontWeight:"700"
    },
    cardDesc: {
      fontSize:15
    },
    cardDate: {
      fontSize:10,
      color:"#A6A6A6",
    },
    Btn: {
      width:100,
      height:50,
      padding:15,
      backgroundColor:"#fdc453",
      borderColor:"deeppink",
      borderRadius:15,
      margin:7,
      
    },
    buttonText:{
      color:"white",
      fontSize:20,
    }
});