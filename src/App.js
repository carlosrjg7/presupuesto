import React, { useState, useEffect } from 'react';
import Pregunta from './Components/Pregunta';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';
import ControlPresupuesto from './Components/ControlPresupuesto'

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [ mostrarPregunta, actualizarPregunta ] = useState(true);
  const [ gastos, setGastos ] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  useEffect(() => {
    if(crearGasto){
      setGastos([
        ...gastos,
        gasto
      ])


      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      setCrearGasto(false);
    }
  },[gasto]);


  return (
    <div>
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">

          {
            mostrarPregunta ? (
              <Pregunta
                setPresupuesto = {setPresupuesto}
                setRestante = {setRestante}
                actualizarPregunta = {actualizarPregunta}
              />
            ):(

              <div className="row">
                <div className="one-half column">
                  <Formulario
                    setGasto={setGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>

            )
          }

          

          
        </div>
      </header>
    </div>
    
  );
}

export default App;
