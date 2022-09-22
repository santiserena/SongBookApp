import { useEffect, useState } from "react";
import { ScrollView, Text, Image, Button } from "react-native";
import axios from "react-native-axios";

export default function Explorer() {

  const [exploreArray, setExploreArray] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.0.81:3001/explore/vincula@vincula.com`)
      .then((result) => setExploreArray(result.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <ScrollView>
      <Text>{"\n\n\n"}</Text>
      <Text>Song explorer:</Text>
      <Text>{"\n\n"}</Text>

      {exploreArray?.map((el) => (
        <Text key={el.id}>
          Song: {el.name}
          {"\n"}
          Album: {el.album}
          {"\n"}
          <Button
            onPress={() => navigation.navigate("")}   /* ACA VA EL NVO SCREEN Q MUESTRA CANCION */
            title="Open"
          />
          {"\n"}
        </Text>
      ))}

      <Image
        source={{ uri: "https://source.unsplash.com/user/c_v_r" }}
        style={{ width: 400, height: 400 }}
      />
    </ScrollView>
  );
}
