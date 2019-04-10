import React, { Component } from 'react';
import imagen from './cryptomonedas.png';
import Formulario from './componentes/Formulario'
import axios from 'axios';
import Resultado from './componentes/Resultado';
import Cargando from './componentes/Cargando';

class App extends Component {

  state ={
    resultado: {},
    monedaSeleccionada: '',
    criptoseleccionanda: '',
    cargando:false
  }

  cotizarCriptomoneda =(cotizacion) =>{
      //obtener los valores
      const {moneda, criptomoneda} = cotizacion;

      //realizar consulta con axios a la api
      const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      
       axios.get(url)
      .then(respuesta => {
        this.setState({
          resultado : respuesta.data.DISPLAY[criptomoneda][moneda],
          cargando: true
        },() => {
          setTimeout( () => {
            this.setState({
              cargando:false
            })
          },3000);
        })
      })

      //tres segundos despues cambiamo
  }

  render() {
    const resultado = (this.state.cargando) ?  <Cargando/> :  <Resultado
    resultado ={this.state.resultado}/>
    return (
      <div className="container">
        <div className="row">
          <div className="one-half column">
           <img className="logotipo" src={imagen} alt="imagen"/>
          </div>
          <div className="one-half column">
          <h1>Cotiza Criptomonedas al instante</h1>
            <Formulario
              cotizarCriptomoneda = {this.cotizarCriptomoneda}
            />
           {resultado}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
