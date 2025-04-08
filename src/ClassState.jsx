import React from "react";
import { Loading } from "./loading";
class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: true,
      loading: false,
    };
  }

  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount");
  // }

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  componentDidUpdate() {
    console.log("actualizacion");

    if (this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validacion");

        this.setState({ loading: false });

        console.log("Terminando la validación");
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por favor, escribe el código de seguridad.</p>

        {this.state.error && <p>El código es incorrecto</p>}

        {this.state.loading && <Loading />}

        <input placeholder="Código de seguridad" />
        <button onClick={() => this.setState({ loading: true })}>
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
