import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  console.log(value);

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (loading) {
      setTimeout(() => {
        console.log("Haciendo la validacion");

        if (value === SECURITY_CODE) {
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }

        setLoading(false);
      }, 3000);
    }

    console.log("Terminando la validación");
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Por favor, escribe el código de seguridad.</p>

      {error && <p>El código es incorrecto</p>}

      {loading && <p>Cargando...</p>}

      <input
        placeholder="Código de seguridad"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}

export { UseState };
