import { Button, Container, Form } from "react-bootstrap";
import React, { useState } from "react";
const { registerUser } = require("../services/apiCall");

const Register = () => {
  /**
   * Declaración hook de estado estado usado para actualizar la tabla cuando se agrega un nuevo estudiante
   */
  const [refresh, setRefresh] = useState(0);

  /**
   * Declaración hook de estado usado para almacenar los datos provenietes de la BD para llenar la tabla estudiantes
   * const [studentTableData, setStudentTableData] = useState({ student: [] });
   */

  /**
   * Declaración de hook de estado usado para almacenar los datos de cada input del form
   */
  const [userFormData, setUserFormData] = useState({
    username: "",
    passsword: "",
    email: "",
  });
  /**
   * Hook de efecto usado para buscar los datos de la base de datos y se ejecuta cada vez que la variable de estado "refresh" se actualice
   */
  /*  useEffect(() => {
    fillTableStudent().then((response) => {
      setStudentTableData(response.data);
    });
  }, [refresh]);
  */

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
    registerUser(userFormData).then((response) => {
      if (response.status === 200) {
        setRefresh(Math.random());
      }
    });
  };

  /**
   * El form posee un atributo "onSubmit" el cual ejecuta la función "handleSubmit" al momento de clickear en el botón
   * Cada input tiene asignado un atributo "onChange" el cual ejecuta la función "handleInputChange" cuando
   * se modifica el mismo (input).
   */
  return (
    <Container className="my-2">
        
        <section>
            
            <h3 className='display-4 tituloQuienesSomos fw-bold text-center mb-3 pb-3'> Registrarse </h3>
            <Form className="mb-5" onSubmit={handleSubmit}  >
                <Form.Group class="mb-3">
                    <Form.Label for="username" >Nombre de usuario</Form.Label>
                    <Form.Control type="text"  id="inputName" name="username" onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label for="password">Contraseña</Form.Label>
                    <Form.Control type="password" id="inputPassword" name="password" onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group class="mb-3">
                    <Form.Label for="email" >Email</Form.Label>
                    <Form.Control type="email"  id="inputEmail" name="email" onChange={handleInputChange}></Form.Control>
                    <Form.Text> Nunca compartiremos su correo electrónico con alguien mas.</Form.Text>
                </Form.Group>
                <Button type="submit" variant="info" className="text-white" size="lg"  >Enviar</Button>
                <br></br>
                <br></br>
                 <a href="/" class="a-user">Iniciar Sesion</a>
                  
                
            </Form>  
            
        </section>
        
      
        </Container>
  );
};

export default Register;
