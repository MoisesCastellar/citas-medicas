import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validacion del Formulario
    if([ nombre, propietario, email, fecha, sintomas].includes('') ) {
      console.log('Hay al menos un campo vacio')
      setError(true)
      return;
    } 
    setError(false)
  }

  return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="mb-10 mt-5 text-center text-xl">
              Añade pacientes y {''}
              <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form
          onSubmit={handleSubmit} 
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          
          {error && 
            <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
              <p>Todos los campos son obligatorios</p>
            </div>
          }

          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase">Nombre de Mascota</label>

            <input 
              id="mascota"
              type="text" 
              placeholder="Nombre de lamascota"
              className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase">Nombre del propietario</label>

            <input 
              id="propietario"
              type="text" 
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase">Email</label>

            <input 
              id="email"
              type="email" 
              placeholder="Email"
              className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase">Alta</label>

            <input 
              id="alta"
              type="date" 
              className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase">Sintomas</label>

            <textarea
              id="sintomas"
              type="textarea" 
              placeholder="Descripcion de los sintomas"
              className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />
          </div>

          <input 
              type="submit"
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer
              transition-colors" 
              value="Agregar Paciente"
                
          />
        </form>
      </div>
  )
}

export default Formulario;
