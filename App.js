import { useState } from "react";
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-web";

export default function App() {

  const [distancia, setDistancia] = useState()
  const [tempo, setTempo] = useState()
  const [velocidadeMedia, setVelocidadeMedia] = useState()

  const calcularVelocidade = () => {
    let velocidade = distancia / tempo
    setVelocidadeMedia(velocidade.toFixed(2))
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#deffa8",
      }}
    >
      <Text>Cálculo da Velocidade Média</Text>
      <TextInput
        placeholder="Distância (km)"
        keyboardType="numeric"
        value={distancia}
        onChangeText={setDistancia}
      />
      <TextInput
      placeholder="Tempo (h)"
      keyboardType="numeric"
      value={tempo}
      onChangeText={setTempo}
      />
      <TextInput
      placeholder="Resultado: velocidade média (km/h)"
      keyboardType="numeric"
      value={velocidadeMedia}
      onChangeText={setVelocidadeMedia}
      />
      <br></br>
      <Button
      title="Calcular"
      color="#5eff6c"
      onPress={calcularVelocidade}
      />
      
    </View>
  );
}
