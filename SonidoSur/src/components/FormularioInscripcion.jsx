import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

import CampoFormulario from "./CampoFormulario";
import SelectorEntrada from "./SelectorEntrada";
import { useInscripcion } from "../context/InscripcionContext";

export default function FormularioInscripcion() {
  const [cargando, setCargando] = useState(false);

  const { guardarInscripcion } = useInscripcion();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nombreCompleto: "",
      email: "",
      edad: "",
      tipoEntrada: "",
      telefono: "",
    },
  });

  const enviarFormulario = (datos) => {
    setCargando(true);

    setTimeout(() => {
      reset();
      setCargando(false);
      guardarInscripcion(datos);
    }, 1000);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>SONIDO SUR</Text>
      <Text style={styles.subtitulo}>Inscripción al festival</Text>

      <Controller
        control={control}
        name="nombreCompleto"
        rules={{
          required: "Ingresá tu nombre completo",
          validate: (valor) =>
            valor.trim().length >= 3 ||
            "Ingresá tu nombre completo",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CampoFormulario
            label="Nombre completo"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="Ej: Juan Pérez"
            error={errors.nombreCompleto?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{
          required: "Ingresá un email válido",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Ingresá un email válido",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CampoFormulario
            label="Email"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="usuario@gmail.com"
            keyboardType="email-address"
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="edad"
        rules={{
          required: "La edad tiene que ser mayor a 12",
          validate: (valor) => {
            const soloNumeros = /^\d+$/.test(valor);
            const edadNumero = Number(valor);

            return (
              (soloNumeros &&
                edadNumero >= 12 &&
                edadNumero <= 99) ||
              "La edad tiene que ser mayor a 12"
            );
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CampoFormulario
            label="Edad"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="Ej: 17"
            keyboardType="numeric"
            error={errors.edad?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="tipoEntrada"
        rules={{
          required: "Elegí un tipo de entrada",
          validate: (valor) =>
            ["general", "vip"].includes(valor) ||
            "Elegí un tipo de entrada",
        }}
        render={({ field: { onChange, value } }) => (
          <SelectorEntrada
            value={value}
            onChange={onChange}
            error={errors.tipoEntrada?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="telefono"
        rules={{
          validate: (valor) =>
            valor === "" ||
            /^\d+$/.test(valor) ||
            "Solo se permiten números",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CampoFormulario
            label="Teléfono (opcional)"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="Ej: 1123456789"
            keyboardType="phone-pad"
            error={errors.telefono?.message}
          />
        )}
      />

      <Pressable
        style={[
          styles.botonConfirmar,
          (!isValid || cargando) && styles.botonDeshabilitado,
        ]}
        disabled={!isValid || cargando}
        onPress={handleSubmit(enviarFormulario)}
      >
        {cargando ? (
          <View style={styles.loading}>
            <ActivityIndicator color="#fff" />
            <Text style={styles.textoBoton}>
              Procesando inscripción...
            </Text>
          </View>
        ) : (
          <Text style={styles.textoBoton}>
            Confirmar inscripción
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: "100%",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 17,
    textAlign: "center",
    marginBottom: 25,
    color: "#555",
  },

  botonConfirmar: {
    backgroundColor: "#222",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 5,
  },

  botonDeshabilitado: {
    backgroundColor: "#aaa",
  },

  textoBoton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  loading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});