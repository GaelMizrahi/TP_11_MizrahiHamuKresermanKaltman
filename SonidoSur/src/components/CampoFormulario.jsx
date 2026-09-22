import { View, Text, TextInput, StyleSheet } from "react-native";

export default function CampoFormulario({
  label,
  value,
  onChangeText,
  onBlur,
  placeholder,
  keyboardType = "default",
  error,
}) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />

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
    marginBottom: 7,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },

  inputError: {
    borderColor: "#d32f2f",
  },

  error: {
    color: "#d32f2f",
    fontSize: 13,
    marginTop: 5,
  },
});