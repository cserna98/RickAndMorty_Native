import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup"
import { user, userDetails } from "../../utils/UserDB";

export default function LoginForm() {

    const formik = useFormik({
        // Define los valores iniciales del formulario
        initialValues: {
            username: "",
            password: "",
          },
        // Define el esquema de validación del formulario utilizando Yup
        validationSchema: Yup.object(validationSchema()),
        // Define si se deben validar los campos al cambiar su valor
        validateOnChange: false,
        // Define la función que se ejecutará cuando se envíe el formulario
        onSubmit: () => {
          // Inicializa el mensaje de error a vacío
        setError("");
          // Obtiene los valores del formulario
        const { username, password } = formik.values;
          // Compara los valores del formulario con los valores del usuario
        if (username !== user.username || password !== user.password) {
            // Si los valores son incorrectos, establece un mensaje de error
            setError("El usuario o la contraseña no son correcto");
        } else {
            // Si los valores son correctos, llama a la función de inicio de sesión
            login(userDetails);
        }
        },
    });

    function validationSchema() {
        return {
            username: Yup.string().required("El usuario es obligatorio"),
            password: Yup.string().required("La contraseña es obligatoria"),
        };
    }

    return ( 
        <View>
            <Text style={styles.title}>Iniciar sesión</Text>
            <TextInput
                placeholder="Nombre de usuario"
                style={styles.input}
                autoCapitalize="none"
                value={formik.values.username}
                onChangeText={formik.handleChange("username")} 
                />
            <TextInput
                placeholder="Contraseña"
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
                />
            <Button title="Entrar" onPress={formik.handleSubmit} />

            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>

            <Text style={styles.error}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
      textAlign: "center",
      fontSize: 28,
      fontWeight: "bold",
      marginTop: 50,
      marginBottom: 15,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
    error: {
      textAlign: "center",
      color: "#f00",
      marginTop: 20,
    },
  })