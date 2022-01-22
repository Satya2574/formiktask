import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'

const App = () => {
 
  const formik = useFormik({
      initialValues : {
        name:'',
        email:'',
        list:'',
        password:'',
        confirmpassword:''
      },
      validationSchema:yup.object({
         name:yup.string()
         .required("Name is required")
         .strict()
         .trim()
         .min(5,"Minimum 5 characters required")
         .max(15,"maximum 15 characters onley"),
         email:yup.string()
         .email()
         .required("Email is required"),
         list:yup.string()
         .required("select any one option required"),
         password:yup.string()
         .required("Enter the password required")
         .min(8,"Minimum 8 characters required"),
         confirmpassword:yup.string()
         .oneOf([yup.ref('password'),null],"Confirm password must be same with password")
         .required("Confirm your password required")
    }),
      onSubmit:(userInputData) =>{
          console.log(userInputData);
      }
})
 return(
    <div className='container mt-3'>
      <div className='jumbotron'>
         <form autoComplete='off' onSubmit = {formik.handleSubmit}>
           <div className='form-group'>
           <label>Name:</label>
           <input 
           className='form-control'
           type="text" 
           name="name" 
           onChange= {formik.handleChange}
           value= {formik.values.name }
          />
           {formik.errors.name ?
          <div className='text-danger'>{formik.errors.name}</div>
          : null 
          }
           </div>
           <div className='form-group'>
           <label>Email:</label>
           <input 
           className='form-control'
           type="text" 
           name="email" 
           onChange= {formik.handleChange}
           value= {formik.values.email }
          />
           {formik.errors.email ?
          <div className='text-danger'>{formik.errors.email}</div>
          : null 
          }
           </div>
           <div className='form-group'>
             <label for='sel1'>Select list:</label>
             <select
             name="list" 
             onChange= {formik.handleChange}
             value= {formik.values.list }
             className='form-control' id='sel1'>
               <option value= ''>--Select One--</option>
               <option value='1'>1</option>
               <option value='2'>2</option>
               <option value='3'>3</option>
             </select>
             {formik.errors.list ?
          <div className='text-danger'>{formik.errors.list}</div>
          : null 
          }
           </div>
           <div className='form-group'>
           <label>Password:</label>
           <input 
           className='form-control'
           type="text" 
           name="password" 
           onChange= {formik.handleChange}
           value= {formik.values.password }
          />
           {formik.errors.password ?
          <div className='text-danger'>{formik.errors.password}</div>
          : null 
          }
           </div>
           <div className='form-group'>
           <label>Confirm Password:</label>
           <input 
           className='form-control'
           type="text" 
           name="confirmpassword" 
           onChange= {formik.handleChange}
           value= {formik.values.confirmpassword }
          />
           {formik.errors.email ?
          <div className='text-danger'>{formik.errors.confirmpassword}</div>
          : null 
          }
           </div>
           <button className = "btn btn-primary">Sumbit</button>
         </form>
         </div>
    </div>
  )
        }

export default App;
