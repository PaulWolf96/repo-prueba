import { Button, Container, Form, FormLabel } from "react-bootstrap";
import { loginUser } from "../services/apiCall";
import React, {useEffect, useState} from "react"; 
import HomePage from "./HomePage";

const Login = () => {
    
  /** 
   * Declaración hook de estado usado para actualizar la tabla cuando se agrega un nuevo estudiante
   */
  const [refresh, setRefresh] = useState(0);

  /**
   * Declaración hook de estado usado para almacenar los datos provenietes de la BD para llenar la tabla estudiantes
   */ 
  const [userCollectionData, setUserCollectionData] = useState({ user: [] });
   


  /**
   * Declaración de hook de estado usado para almacenar los datos de cada input del form
   */
   const [userFormData, setUserFormData] = useState({
    username: "",
    passsword: "",
  });


  /**
   * Hook de efecto usado para buscar los datos de la base de datos y se ejecuta cada vez que la variable de estado "refresh" se actualice
   */
    useEffect(() => {
    loginUser().then((response) => {
      setUserCollectionData(response.data);
    });
  }, [refresh]);
  

  /** 
   * Función que captura el cambio de valor en cada input del form
   * @param {*} event
   */
 const handleInputChange = (event) => {
  setUserFormData({
    ...userFormData,
    [event.target.name]: event.target.value,
  });
};



  /** 
   * Función que ejecuta el método POST saveStudent para guardar un estudiante al hacer submit
   * @param {*} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(userFormData).then((response) => {
      if (response.status === 200) {
        <HomePage />
        setRefresh(Math.random());
        
      }
    });
  };
  
  
  return (

      <Container className='flex-grow-1 my-2'>
        <h3 className='display-4 tituloQuienesSomos fw-bold text-center mb-3 pb-3 my-2'> Iniciar Sesion </h3>
        <Form className="mb-5" onSubmit={handleSubmit}>
          <Form.Group class="mb-3">
            <Form.Label for="username" class="form-label">Nombre de usuario</Form.Label>
            <input type="text" class="form-control" id="exampleInputText1" name="username" onChange={handleInputChange}></input>
          </Form.Group>
          <Form.Group class="mb-3">
            <Form.Label for="password" class="form-label">Contraseña</Form.Label>
            <Form.Control type="password" class="form-control" id="exampleInputPassword1" name="password" onChange={handleInputChange}></Form.Control>
          </Form.Group>
          <div className="pb-3">
            <a href="" class="a-user">¿Olvidaste tu contraseña?</a><span> /</span>
            <a href="/register" class="a-user">Registrarse</a>
          </div>
          <Button variant="info" className="text-white" size="lg" type="submit">Enviar</Button>
        </Form>

      </Container>   
    );
}

export default Login;