import {View, Text, TouchableOpacity, StyleSheet,onPress} from "react-native";

const Header = ({setTime, currenTime,setCurrenTime}) => {

  const options = ["Pomodoro", "Short Break", "Long Break"];

  const handlePress = (i)=> {
    const newTime = i === 0 ? 25 : i === 1 ? 5 : 15;
    setCurrenTime(i);
    setTime(newTime * 60);

  }
  return (
    <View style={{flexDirection:"row"}}>
      {
        options.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={()=>handlePress(i)}
            style={[
              styles.header,
              currenTime != i &&  { borderColor: "transparent"}
            ]}>
            <Text style={{fontWeight:"bold"}}>{item}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
   // flexDirection:"row", //Para ponerlos en linea
    width: "33%",//Para que tomen el 100% de la pantalla
    borderWidth:3,
    padding:5,
    alignItems:"center",//Para centrar el texto dentro del TouchableOpacity
    borderRadius:10,
    borderColor:"white",
    marginVertical:20 //Un margin para que se baje de -pomodoro
  }
});

export default Header;
//Nota   style={[styles.header, {}]} Esto es un arreglo de estilos