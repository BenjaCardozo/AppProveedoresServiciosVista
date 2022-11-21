import { Formik, Field, Form } from "formik";
import React from "react";

const Formulario = () => {
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
          clave1: "",
          clave2: "",
          barrio: "",
          contacto: "",
          rubro: "",
        }}
        // validate={(valores) => {
        //   let errores = {};

        //   //nombre
        //   if (!valores.nombre) {
        //     errores.nombre = "Por favor ingresa un Nombre.";
        //   } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
        //     errores.nombre = "El nombre solo puede contener letras";
        //   }

        //   //apellido
        //   if (!valores.apellido) {
        //     errores.apellido = "Por favor ingresa un Apellido.";
        //   } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
        //     errores.apellido = "El Apellido solo puede contener letras";
        //   }
        //   //email
        //   if (!valores.email) {
        //     errores.email = "Por favor ingresa un Email.";
        //   } else if (
        //     !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
        //     errores.email ="El Email solo puede contener letras,numeros,puntos,guiones y guion bajo.";
        //   }

        //   //contrasena
        //   if (!valores.clave1) {
        //     errores.clave1 = "Por favor ingresa una Contraseña.";}
        // //   }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(valores.clave1)) {
        // //     errores.clave1 = ".Minimo 8 caracteres \n .Maximo 15 \n .Al menos una letra mayúscula \n .Al menos una letra minucula \n .Al menos un dígito \n .No espacios en blanco\n .Al menos 1 caracter especial" 
        // //   } 

        //   //contrasena2

        //   if (!valores.clave2) {
        //     errores.clave2 = "Por favor ingresa una Contraseña.";
        //   }else if (valores.clave1 !== valores.clave2) {
        //     errores.clave2 = "Sus contraseñas no coinciden" 
        //   } 

        //   //barrio
        //   if (!valores.barrio) {
        //     errores.barrio = "Por favor ingresa Un Barrio.";
        //   } 
          
        //   //contacto
        //   if (!valores.contacto) {
        //     errores.contacto = "Por favor ingresa un numero telefonico.";
        //   } else if (!/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/.test(valores.contacto)){
        //     errores.contacto = "El numero telefonico ingresado no es valido.";
        //   }
          
        //   //rubro
        //   if (!valores.rubro) {
        //     errores.rubro = "Por favor seleccione una Opcion.";
        //   }

        //   return errores;
        // }}
        onSubmit={(valores) => {
          console.log(valores);
          localStorage.setItem(valores);
          localStorage.setItem("Usuario", JSON.stringify(valores));
        }}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
          <Form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu Nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.nombre && <div className="error">{errors.nombre}</div>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="correo@correo.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="clave">Contraseña</label>
              <Field
                type="password"
                id="clave1"
                name="clave1"
                placeholder="Contraseña"
                value={values.clave1}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.clave1 && <div className="error">{errors.clave1}</div>}
            </div>
            <div>
              <label htmlFor="clave2">Repetir Contraseña</label>
              <Field
                type="password"
                id="clave2"
                name="clave2"
                placeholder="Repita Contraseña"
                value={values.clave2}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.clave2 && <div className="error">{errors.clave2}</div>}
            </div>
            <div>
              <label htmlFor="barrio">Barrio</label>
              <Field
                type="text"
                id="barrio"
                name="barrio"
                placeholder="Barrio/Localidad"
                value={values.barrio}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.barrio && <div className="error">{errors.barrio}</div>}
            </div>
            <div>
              <label htmlFor="contacto">Numero Telefonico</label>
              <Field
                type="tel"
                id="contacto"
                name="contacto"
                placeholder="Numero Telefonico"
                value={values.contacto}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.contacto && (
                <div className="error">{errors.contacto}</div>
              )}
            </div>
            <div>
              <label htmlFor="">Rubro</label>
              <Field
                type="radio"
                name="rubro"
                placeholder="Cliente"
                value="Cliente"
              />
              {" "}
              Cliente <br />
              <Field
                type="radio"
                name="rubro"
                placeholder="Usuario"
                value="Usuario"
              />
              {" "}
              Usuario
              {errors.rubro && <div className="error">{errors.rubro}</div>}
            </div>
            <button type="submit" onSubmit={handleSubmit}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;