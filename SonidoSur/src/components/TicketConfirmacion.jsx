import { View, Text, Pressable, StyleSheet } from "react-native";
import { useInscripcion } from "../context/InscripcionContext";

export default function TicketConfirmacion() {
  const { inscripcion, volverAInscribir } = useInscripcion();

  return (
    <View style={styles.ticket}>
      <Text style={styles.marca}>SONIDO SUR</Text>
      <Text style={styles.confirmacion}>¡Inscripción confirmada!</Text>

      <View style={styles.separador} />

      <Text style={styles.etiqueta}>Nombre completo</Text>
      <Text style={styles.dato}>{inscripcion.nombreCompleto}</Text>

      <Text style={styles.etiqueta}>Email</Text>
      <Text style={styles.dato}>{inscripcion.email}</Text>

      <Text style={styles.etiqueta}>Edad</Text>
      <Text style={styles.dato}>{inscripcion.edad}</Text>

      <Text style={styles.etiqueta}>Tipo de entrada</Text>
      <Text style={styles.dato}>
        {inscripcion.tipoEntrada === "vip" ? "VIP" : "General"}
      </Text>

      {inscripcion.telefono !== "" && (
        <>
          <Text style={styles.etiqueta}>Teléfono</Text>
          <Text style={styles.dato}>{inscripcion.telefono}</Text>
        </>
      )}

      <View style={styles.separador} />

      <Pressable
        style={styles.boton}
        onPress={volverAInscribir}
      >
        <Text style={styles.textoBoton}>
          Volver a inscribir a otra persona
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  ticket: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#222",
    borderRadius: 14,
    padding: 22,
  },

  marca: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },

  confirmacion: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 18,
  },

  separador: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    borderStyle: "dashed",
    marginVertical: 18,
  },

  etiqueta: {
    fontSize: 13,
    color: "#666",
    marginBottom: 2,
  },

  dato: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 14,
  },

  boton: {
    backgroundColor: "#222",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },

  textoBoton: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
});