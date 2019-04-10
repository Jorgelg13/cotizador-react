import React from 'react';

const Restultado = (props) => {

    if(Object.entries(props.resultado).length === 0) return null;

    return ( 
       <div className="resultado">
            <h2>Resultado</h2>
            <p className="precio">El precio es {props.resultado.PRICE}</p>
            <p>Precio mas alto del dia {props.resultado.HIGHDAY}</p>
            <p>Precio mas bajo del dia {props.resultado.LOWDAY}</p>
       </div>
     );
}
 
export default Restultado;