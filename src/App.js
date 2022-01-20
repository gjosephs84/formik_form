import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';
function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: '',
    },
    onSubmit: values => {
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};
      if (!values.emailField) errors.emailField = "Field required";
      if (!values.pswField) errors.pswField = "Field reuired";
      if (values.emailField) {
        let isEmail = values.emailField.includes('@') && values.emailField.includes('.');
        if (!isEmail) errors.emailField = "Username should be an email";
      };
      return errors
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <div>Email</div>
      <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
      {formik.errors.emailField ? <div style={{color: 'red'}}>{formik.errors.emailField}</div> : null}
      <div>Password</div>
      <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
      {formik.errors.pswField ? <div style={{color: 'red'}}>{formik.errors.pswField}</div> : null}
      <button name="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
