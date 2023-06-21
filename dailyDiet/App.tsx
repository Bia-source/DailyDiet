import theme from './src/theme/index';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";
import { useFonts, NunitoSans_700Bold, NunitoSans_400Regular} from '@expo-google-fonts/nunito-sans';
import { Text } from 'react-native';
import { Routes } from '@routes/index';
import { Loading } from "@components/Loading";

export default function App() {
  const [fonstLoad] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return (
    <ThemeProvider theme={theme}>
       <StatusBar
         backgroundColor="transparent"
         translucent
       />
       { fonstLoad ? <Routes/> : <Loading/> }
    </ThemeProvider>
   
  );
}
