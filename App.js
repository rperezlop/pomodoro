import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Platform} from 'react-native';
import {Audio} from "expo-av";
import {useState,useEffect} from "react";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";


const App = () => {
  const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE3 v "];

  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currenTime, setCurrenTime] = useState("POMO" | "SHORT" | "BREACK");
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    let interval = null;
    if (isActive){
      //Corre el reloj
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      //Clear
      clearInterval(interval);
    }

    if(time === 0) {
      setIsActive(false);
      setIsWorking((prev) => !prev);//Para actualizar antes del ultimo
      setTime(isWorking ? 300 : 1500)
    }

    return () => clearInterval(interval);
  }, [isActive, time]);


  const handleStartStop = () => {
    playSound();
    setIsActive(!isActive);
  }

  const playSound = async () => {
    const {sound} = await Audio.Sound.createAsync(
      require("./assets/sonido.mp3")
    )
    await sound.playAsync();
  }


  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currenTime]}]}>
      <View style={styles.ViewPrincipal}>
        <Text style={styles.title}>Pomodoro3</Text>
        <Header
          setTime={setTime}
          currenTime={currenTime}
          setCurrenTime={setCurrenTime}
        />
        <Timer
          time={time}/>
        <StatusBar style="auto"/>
        <TouchableOpacity style={styles.button} onPress={handleStartStop}>
          <Text style={styles.buttonText}>{isActive ? "STOP" : "START"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: 'black',
    fontWeight: "bold",// Para poner gruesa la letra
    fontSize: 32
  },
  ViewPrincipal: {
    flex: 1,//Esto es para que tome todo el espacio disponible dela pantalla
    paddingTop: Platform.OS === "android" && 30, //Para bajar rl  titulo Pomodoro
    marginHorizontal: 10, //Para reducir los lados y que quede centrado
  },
  button: {
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center"

  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default App;
