import { View, Text, Pressable, StyleSheet } from "react-native";

export default function SelectorEntrada({
  value,
  onChange,
  error,
}) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Tipo de entrada</Text>

      <View style={styles.opciones}>
        <Pressable
          style={[
            styles.boton,
            value === "general" && styles.botonSeleccionado,
          ]}
          onPress={() => onChange("general")}
        >
          <Text
            style={[
              styles.textoBoton,
              value === "general" && styles.textoSeleccionado,
            ]}
          >
            General
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.boton,
            value === "vip" && styles.botonSeleccionado,
          ]}
          onPress={() => onChange("vip")}
        >
          <Text
            style={[
              styles.textoBoton,
              value === "vip" && styles.textoSeleccionado,
            ]}
          >
            VIP
          </Text>
        </Pressable>
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: 18,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },

  opciones: {
    flexDirection: "row",
    gap: 10,
  },

  boton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  botonSeleccionado: {
    backgroundColor: "#222",
    borderColor: "#222",
  },

  textoBoton: {
    fontSize: 16,
    color: "#222",
  },

  textoSeleccionado: {
    color: "#fff",
    fontWeight: "600",
  },

  error: {
    color: "#d32f2f",
    fontSize: 13,
    marginTop: 5,
  },
});