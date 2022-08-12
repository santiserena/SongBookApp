import { View, Text, Image } from "react-native-web";

export default function Explorer() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Soy el explorador</Text>
      <Image 
        source={{uri: 'https://source.unsplash.com/user/c_v_r'}} 
        style={{ width: 400, height: 400 }}     
      />
    </View>
  );
}
