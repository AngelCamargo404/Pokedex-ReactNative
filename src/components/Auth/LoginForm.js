import 
{ 
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Keyboard 
} from 'react-native';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { user, userDetails } from "../../utils/userDB";
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
    const { login } = useAuth();
    const [error, setError] = useState("");
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,    
        onSubmit: (formValue) => {
            setError("");
            const { username, password } = formValue;

            if (username !== user.username || password !== user.password) {
                setError("Usuario o la contraseña no son correctas");
            } else {
                login(userDetails);
                // console.log(userDetails);
            }
        }
    }); 

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput 
        placeholder='Nombre de Usuario'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />

      <Button title='Entrar' onPress={formik.handleSubmit} />

        <Text style={styles.error}>{formik.errors.username}</Text>
        <Text style={styles.error}>{formik.errors.password}</Text>

        <Text style={styles.error}>{error}</Text>
    </View>
  )
}

function initialValues() {
    return {
        username: "",
        password: ""
    };
}

function validationSchema() {
    return {
        username: Yup.string().required("El Usuario es Obligatorio"),
        password: Yup.string().required("La Contraseña es Obligatoria")
    }
}

const styles = StyleSheet.create({
  title: {
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 10
  },
  error: {
    textAlign:'center',
    color:'#F00',
    marginTop: 20
  }
});