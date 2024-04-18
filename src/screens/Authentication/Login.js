import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={{backgroundColor:'#e8fc6c',width:'50%', borderRadius:50,padding:13,position:'absolute',top:50}}>
            <Text style={{alignItems: 'center',textAlign:'center',fontSize:20,fontWeight:"bold",color: "#000" }}>LOG IN</Text>
        </View>
        <View style={{padding: 30}}>
          <Text style={{fontSize: 30,fontWeight: 'bold',color: "#000" }}>LOG IN</Text>
        </View>
       
        <View style={{  alignItems: "center",}}>
       
          <View  style={{width:300,paddingBottom:30}}>
            <TextInput placeholder="Email" style={{padding:12,borderRadius:10,color:'grey',backgroundColor:'#f6f6f6'}}/>
          </View>
          <View style={{width:300}}>
            <TextInput placeholder="Password" style={{padding:12,borderRadius:10,color:'grey',backgroundColor:'#f6f6f6'}}
            onChangeText={(text)=>{
              console.log(text);
            }}/>
          </View>
          <TouchableOpacity style= {{padding: 20,}}
            onPress={()=>{
              // alert(1)
            }}>
            <Text  style={{textAlign:'center',textDecorationLine: 'underline'}}>
              Forgot password
            </Text>
          </TouchableOpacity>
          <View >
            <TouchableOpacity style ={{width: 320,backgroundColor:'black',padding: 15,borderRadius: 50}}
            onPress={()=>{
              navigation.navigate('homeName');
            }}>
              <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>LOG IN</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    fontFamily: 'Helvetica',
    fontWeight : 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
