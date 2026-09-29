import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";

import FormularioInscripcion from "../components/FormularioInscripcion";
import TicketConfirmacion from "../components/TicketConfirmacion";
import { useInscripcion } from "../context/InscripcionContext";

export default function InscripcionScreen() {
  const { inscripcion } = useInscripcion();

  return (
    <KeyboardAvoidingView
      style={styles.pantalla}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.contenido}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.caja}>
          {inscripcion === null ? (
            <FormularioInscripcion />
          ) : (
            <TicketConfirmacion />
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  contenido: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },

  caja: {
    width: "100%",
    maxWidth: 500,
    alignSelf: "center",
  },
});