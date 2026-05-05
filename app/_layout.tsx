import { Stack } from "expo-router";
import { TextInput ,View,Text,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css"
export default function RootLayout() {
  return (
<SafeAreaView style={{flex:1,padding:16 ,backgroundColor:"#fff"}}>
  <View style={{padding:16}}>
    <Text>Welcome to my app</Text>
    <TextInput  placeholder="Search here.." placeholderTextColor="#999" style={{borderWidth:1,borderColor:"#ddd",borderRadius:8,padding:10,marginTop:12}}/>
    <TouchableOpacity
    onPress={()=>alert("searching..")}
    className="bg-red-200 p-4"
    >
      <Text style={{color:"#fff",fontWeight:"bold"}}>Search</Text>

    </TouchableOpacity>
  </View>
</SafeAreaView>

  );
}
