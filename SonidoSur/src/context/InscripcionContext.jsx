import { createContext, useContext, useState } from "react";

const InscripcionContext = createContext();

export function InscripcionProvider({ children }) {
  const [inscripcion, setInscripcion] = useState(null);

  const guardarInscripcion = (datos) => {
    setInscripcion(datos);
  };

  const volverAInscribir = () => {
    setInscripcion(null);
  };

  return (
    <InscripcionContext.Provider
      value={{
        inscripcion,
        guardarInscripcion,
        volverAInscribir,
      }}
    >
      {children}
    </InscripcionContext.Provider>
  );
}

export function useInscripcion() {
  return useContext(InscripcionContext);
}