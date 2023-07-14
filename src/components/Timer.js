import { View,Text, StyleSheet } from "react-native";

const Timer =({time})=>{
  const formattedTime = `
  ${Math.floor(time / 60)
    .toString()
    .padStart(2,"0")}:${(time % 60).toString()
    .padStart(2,"0")}`;

  return(
    <View style={styles.container}>
      <Text style={styles.time} >{formattedTime}</Text>
    </View>
  )
}

const  styles = StyleSheet.create({
  //Este container es el cuadro blanco donde salen los numeros
  container: {
    flex:0.3,//Depende del valor el toma el espacio disponible en la panatalla
    justifyContent: "center",//Para centrar el contenido
    backgroundColor:"#F2F2F2",
    padding:15, //Con el padding lo pongo mas ancho
    borderRadius:15
  },
  time:{
    fontSize:60,
    fontWeight:"bold",
    textAlign:"center",
  }

})
export default Timer;