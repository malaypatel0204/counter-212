import React from 'react'
import { Formik, Field, Form } from 'formik';


export const LoginWithFormik = () => {
  return (
    <div>

        <Formik

        initialValues={{
            email:"",
            password:""
        }}

        onSubmit={ (values) =>{
            console.log(values);
        }}
        
       
        
        >

<Form>

<label htmlFor="email">Email</label>
<Field id="email" name="email" placeholder="email" />

<label htmlFor="password">Password</label>
<Field id="password" name="password" placeholder="password" />


<input type='submit' value="Login"/>
</Form>
        </Formik>
    </div>
  )
}
