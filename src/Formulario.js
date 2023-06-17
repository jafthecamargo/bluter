import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import "./styles/Formulario.css";

const Formulario = () => {

  const navigate = useNavigate();
  /**useState para almacenar los valores del formulario, como valor inicial estamos creando un
   * objeto con tres propiedades todos vacios, el objeto se llama 'values'
   */
  const [values, setValues] = useState({
    name: "",
    edad: null,
    typeBlood: "",
    email: "",
    cel: null,
    info: "",
  });

  /**useState para manerjar las validaciones, igual se est crea un objeto con tres propiedades de cadena vacia */
  const [validations, setValidations] = useState({
    name: "",
    edad: null,
    typeBlood: "",
    email: "",
    cel: null,
    info: "",
  });

  /**Valida todos los campos del formulario y se llama al presionar un boton para enviar el formulario*/
  const validateAll = () => {
    /**extraigo las propiedades name, email y typeBlood del objeto values usando desestructuracion, las
     * propiedades contienen los valores que ha ingresado el usuario
     */
    const { name, email, typeBlood, edad, cel, info } = values;

    /**Creo el objeto validations con las propiedades, name, email, typeBlood
     * este objeto se usa para almacenar los mensajes correspondientes a cada campo del formulario
     */
    const validations = {
      name: "",
      email: "",
      typeBlood: "",
      edad: null,
      cel: null,
      info: "",
    };

    let isValid = true; /**variable que se utilizara para determinar si todos los campos del formulario son validos */

    /**Verifico si el campo name esta vacio, en caso de que si, se establece el mensaje
     * en el campo name del objeto validations
     */
    if (!name) {
      validations.name = "Name is required";
      isValid = false;
    }

    /**se verifica que el campo name no tenga una longitud menor a 3 o mayor a 50, si es asi se establece el mensaje
     * en el campo name de el objeto validations
     */
    if ((name && name.length < 3) || name.length > 50) {
      validations.name = "Name must contain between 3 and 50 characters";
      isValid = false;
    }

    /**se realizan las misma acciones que arriba, solo que ahora para el campo email del objeto validations*/
    if (!email) {
      validations.email = "email is required";
      isValid = false;
    }

    /**se verifica que el email cumpla con cierto formato, de no ser asi entonces se establece el mensaje */
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      validations.email = "email format must be as example@mail.com";
      isValid = false;
    }

    if (!typeBlood) {
      validations.typeBlood = "typeBlood is required";
      isValid = false;
    }

    if (!edad) {
      validations.edad = "edad is required";
      isValid = false;
    }

    if (edad < 18) {
      validations.edad = "edad must be 18 years old or more";
      isValid = false;
    }

    if (!cel) {
      validations.cel = "numero de telefono requerido";
      isValid = false;
    }

    if (cel.length < 10) {
      validations.cel = "El numero de telefono debe tener 10 digitos";
      isValid = false;
    }

    if (!info) {
      validations.info =
        'Porfavor indique si se encuentra tomando algun medicamento, en caso de que no, escriba "ninguno"';
      isValid = false;
    }

    /**en caso de que 'isValid' ya no sea true, entonces los mensajes se establecen en el objeto
     * validations pero del setState, para ello ocupamos setVaidations
     */
    if (!isValid) {
      setValidations(validations);
    }

    /**si 'isValid' nunca cambio de valor, entoncesse retorna un true dando a entender que todos los parametros
     * son validos
     */
    return isValid;
  };

  /**Valida un solo campo del formulario y se llama cuando detecta un cambio en ese campo */
  const validateOne = (e) => {
    /** Se extrae la propiedad name del elemento que disparo elevento, usando la desetructuracion
     * del objeto e.target, la propiedad 'name' corresponde al nombre del campo que ha cambiado
     */
    const { name } = e.target;

    /**Se accede al valor actual del campo que ha cambiado mediante la propiedad 'name' del objeto values
     * este objeto contiene los valores actuales de todos los campos del formualario
     */
    const value = values[name];

    let message = ""; //Variable para guardar los mensajes de la validacion

    /**si el campo que ha cambiado esta vacio entonces se asigna el mensaje de error,
     * el mensaje especifica el nombre del campo que es requerido
     */
    if (!value) {
      message = `${name} is required`;
    }

    /**se verifica que el campo nombre tenga entre 3 y 50 caracteres, en caso contrario se
     * asigna el mensaje de error, en la sintaxis 'value && name === "name"' primero se evalua si
     * value es verdadero o no, si es falso no se evalua la segunda parte de la expresion, luego se evalua
     * si la variable 'name' es igual a la cadena "name"
     */
    if (value && name === "name" && (value.length < 3 || value.length > 50)) {
      message = "name must contain between 3 and 50 characters";
    }

    /**Se verifica que si el campo email cambio, este tenga un formato valido y en caso contrario
     * se asigna el mensaje de error
     */
    if (value && name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      message = "email format must be as example@mail.com";
    }

    if (value && name === "edad" && value < 18) {
      message = "age must be higer than 18";
    }

    if (value && name === "cel" && value.length < 10) {
      message = "el numero de telefono debe tener 10 digitos";
    }

    if (value && name === "info" && value.length < 5) {
      message =
        'porfavor indique si se encuentra tomando algun medicamente, en caso de que no escriba "ninguno"';
    }

    /**se actualiza el objeto validations con el nuevo mensaje */
    setValidations({ ...validations, [name]: message });
  };

  /**funcion que maneja el cambio de los valores del formulario, estoy usando la sintaxis de arrowFunction */
  const handleChange = (e) => {
    /**Esta sintaxis se refiere a una desestructuracion de el objeto e, se obtendra el 'value(valor)' y el 'name' del campo
     * que acaba de cambiar
     */
    const { name, value } = e.target;

    /**se establecen los valores al objeto 'values' obteniendo el nombre del campo y asignado el valor con 'value' */
    setValues({ ...values, [name]: value });
  };

  /**Funcion que se encarga de manejar el envio del formulario */
  const handleSubmit = (e) => {
    /**preventDefault evita que el formulario se envie automaticamente al presionar el boton de envio */
    e.preventDefault();

    /** se llama a la funcion validateAll para validar todos los campos y su valor se almacena en la variable
     * isValid
     */
    const isValid = validateAll();

    /**si isValid es falso, entonces la ejecucion de la funcion se detiene y se retorna un valor negativo */
    if (!isValid) {
      return false;
    }

    /**en caso de que isValid sea true entonces se mostrara una alerta mostrando los valores ingresados
     * en el formulario usando JSON.stringify(), esta funcion convierte el objeto 'values' en una cadena JSON
     */
    //alert(JSON.stringify(values));

    //ocupo navigate para poder redirigir a otra pestaña, lo ocupare momentaneamente para enviar los correos
    navigate('/correo')
  };

  /**se extraen los valores de las propiedades 'name', 'email', 'typeBlood' del objeto 'values'
   * y se guardan en las variables con los mismos nombres
   */
  const { name, email, typeBlood, edad, cel, info } = values;

  /**utilizo la desestructuracion para crear tres variables nuevas,'nameVal'... , y asignarles valores
   * basados en las propiedades del objeto 'values', en este caso se ocupa el patron 'nombreOriginal: nuevoNombre'
   * para asignar una propiedad de un objeto a una variable con un nombre diferente
   *
   * En este caso se esta tomando el objeto 'validations' y creando las tres nuevas variables que contienen los valores
   * de las propiedades correspondientes, por lo que al finalizar la linea se crearan tres nuevas variables que contienen
   * los mensajes de validacion especifico de cada campo, que se mostraran solo en caso de que haya errores en los campos del formulario
   */
  const {
    name: nameVal,
    email: emailVal,
    typeBlood: typeBloodVal,
    edad: edadVal,
    cel: celVal,
    info: infoVal,
  } = validations;

  return (
    <>
      <div className="container">
        <h2>Formulario de solicitud de donacion de sangre</h2>
        <form onSubmit={handleSubmit} className="formulario" >
          <div>
            <label>
              Nombre:
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                onBlur={validateOne}
              />
              <div>{nameVal}</div>
            </label>
          </div>

          <div>
            <label>
              Edad:
              <input
                type="number"
                name="edad"
                value={edad}
                onChange={handleChange}
                onBlur={validateOne}
              />
              <div>{edadVal}</div>
            </label>
          </div>

          <div>
            <p>Indique su tipo de sangre</p>
            <label>
              A+
              <input
                type="radio"
                name="typeBlood"
                value="A+"
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>

            <label>
              O+
              <input
                type="radio"
                name="typeBlood"
                value="O+"
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>

            <label>
              B+
              <input
                type="radio"
                name="typeBlood"
                value="B+"
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>

            <label>
              AB+
              <input
                type="radio"
                name="typeBlood"
                value="AB+"
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>

            <label>
              A-
              <input
                type="radio"
                name="typeBlood"
                value="A-"
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>

            <label>
              O-
              <input
                type="radio"
                name="typeBlood"
                value="O-"
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>

            <label>
              B-
              <input
                type="radio"
                name="typeBlood"
                value="B-"
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>

            <label>
              AB-
              <input
                type="radio"
                name="typeBlood"
                value="AB-"
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>

            <div>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div>{emailVal}</div>
              </label>
            </div>

            <div>
              <label>
                Telefono:
                <input
                  type="tel"
                  name="cel"
                  value={cel}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div>{celVal}</div>
              </label>
            </div>

            <div>
              <label>Informacion medica:</label>
              <textarea
                type="text"
                name="info"
                value={info}
                onChange={handleChange}
                onBlur={validateOne}
                placeholder="Escriba aqui si tiene alergia a algun medicamento, asi como tambien si se encuentra tomando algun medicamento"
              />
              <div>{infoVal}</div>
            </div>
            <div>{typeBloodVal}</div>
          </div>

          <button type="submit">Enviar</button>
        </form>

        <div>
          <h2>Valores del formulario</h2>
          <p>{JSON.stringify(values)}</p>
        </div>
      </div>
    </>
  );
};
export default Formulario
