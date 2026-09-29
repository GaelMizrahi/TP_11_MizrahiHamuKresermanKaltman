import { StatusBar } from "expo-status-bar";
import InscripcionScreen from "./screens/InscripcionScreen";
import { InscripcionProvider } from "./context/InscripcionContext";

export default function App() {
  return (
    <InscripcionProvider>
      <StatusBar style="dark" />
      <InscripcionScreen />
    </InscripcionProvider>
  );
}