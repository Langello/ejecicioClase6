import './App.css'

function App() {
  

  return (
    <>
      <div className="container mt-5">
      <h2 className="mb-4 text-center">Formulario de Registro</h2>
      <div className='contariner d-flex justify-content-center align-items-center'>
      <form className='mx-auto'>
        <div className="mb-3 row">
          <label htmlFor="nombre" className="col-sm-2 col-form-label">Nombre:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nombre" name="nombre" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="apellido" className="col-sm-2 col-form-label">Apellido:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="apellido" name="apellido" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" name="email" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="telefono" className="col-sm-2 col-form-label">Teléfono:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="telefono" name="telefono" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="password" className="col-sm-3 col-form-label">Contraseña:</label>
          <div className="col-sm-9">
            <input type="password" className="form-control" id="password" name="password" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="confirmarPassword" className="col-sm-5 col-form-label">Confirmar&nbsp;Contraseña:</label>
          <div className="col-sm-7">
            <input type="password" className="form-control" id="confirmarPassword" name="confirmarPassword" />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Registrarse</button>
          </div>
        </div>
      </form>
      </div>
    </div>
    </>
  )
}

export default App
