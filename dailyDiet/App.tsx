import theme from './src/theme/index';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";
import { useFonts, NunitoSans_700Bold, NunitoSans_400Regular} from '@expo-google-fonts/nunito-sans';
import { Text } from 'react-native';
import { Routes } from '@routes/index';
import { useEffect } from 'react';

export default function App() {
  const [fonstLoad] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  useEffect(()=> {
    console.log(fonstLoad);
  },[])
  return (
    <ThemeProvider theme={theme}>
       <StatusBar
         backgroundColor="transparent"
         translucent
       />
       { fonstLoad ? <Routes/> : <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:200}}> Aguarde </Text> }
    </ThemeProvider>
   
  );
}
