import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Login() {
  const navigate = useNavigate()
  const [usuario, setusuario] = useState("")
  const [contraseña, setcontraseña] = useState("")

  function logear() {
    const content = {
      email: usuario,
      password: contraseña
    }
    
    if (contraseña !== "" && usuario !== "") {
      axios.post("http://"+window.location.hostname+":5000/login", content).then(response => {
        localStorage.setItem("user", JSON.stringify( response.data.data))
        setusuario("")
        setcontraseña("")
        ir("/principal")
      }).catch(function (error) {
        alert('Ocurrió un error: ' + error.response.data.message);
        console.error(error);
      });
    } else {
      alert("No puede haber un campo vacio")
    }
  }

  const ir = (e) => {
    navigate(e)
  }

  useEffect(() => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem('user');
    }
  }, [])

  return (
    <div className="Login">
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <h2 className="text-white">NETCORE</h2>
        </div>
      </nav>
      <br></br>
      <h2>Login</h2>
      <div className="row">
        <br></br>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="card text-white bg-info mb-3" >
            <div className="card-header">Iniciar sesión</div>
            <div className="card-body">
              <h4 className="card-title">Usuario</h4>
              <p className="card-text">
                <input type="text" className="form-control" placeholder="Ingrese usuario " id="inputDefault" value={usuario} onChange={(e) => setusuario(e.target.value)} />
              </p>
              <h4 className="card-title">Contraseña</h4>
              <p className="card-text">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off" value={contraseña} onChange={(e) => setcontraseña(e.target.value)} />
              </p>
              <br></br>
              <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                  <div className="col-2">
                    <button type="button" className="btn btn-outline-light" onClick={logear}>Ingresar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Login;