import React, { useState } from 'react';
import './sign-up.css';
import {useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loader from '../../Loader';
import Button from '../../components/Button';
import { SignUpAxios } from '../../Services';

const customId = 'custom-id';

function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('**Required!'),

    lastName: Yup.string()
      .required('**Required!'),

    email: Yup.string()
      .email('Invalid email format!')
      .required('**Required!'),

    mobileNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number is not valid')
      .required('**Required!'),

    password: Yup.string()
      .min(6, 'Password must be equal to or more than 6 characters!')
      .max(50, 'Too Long!')
      .required('**Required!'),
  });

  const onSubmit = (values, onSubmitProps) => {
    // console.log('Submit Values',values)
    setLoading(true);
    SignUpAxios(values)
      .then((res) => {
        setLoading(false);
        // console.log(res)
        toast.success('Register Successfully!!', {
          toastId: customId,
        });
     
        onSubmitProps.resetForm();
        navigate('/login');
      })
      .catch((err) => {
        setLoading(false);
        // console.log(err)
        toast.error('Error!', {
          toastId: customId,
        });
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <section className="signup-page margin-from-top">
        {loading
          ? <Loader />
          : (
            <div className="">
              <div className="formsSection absolute-center all-containers">
                <div className="">
                  <h3>Sign-up Here !!</h3>
                  <form className="" onSubmit={formik.handleSubmit}>
                    <div className="">
                      <input type="text" {...formik.getFieldProps('firstName')} placeholder="First Name" />
                      { formik.touched.firstName && formik.errors.firstName ? <p className="text-danger error pl-2">{formik.errors.firstName}</p> : null}
                    </div>
                    <div className="">
                      <input type="text" {...formik.getFieldProps('lastName')} placeholder="Last Name" />
                      { formik.touched.lastName && formik.errors.lastName ? <p className="text-danger error">{formik.errors.lastName}</p> : null}
                    </div>

                    <div className="">
                      <input type="text" {...formik.getFieldProps('email')} placeholder="E-mail" />
                      { formik.touched.email && formik.errors.email ? <p className="text-danger error">{formik.errors.email}</p> : null}
                    </div>
                    <div className="">
                      <input type="text" {...formik.getFieldProps('mobileNumber')} placeholder="Phone Number" />
                      { formik.touched.mobileNumber && formik.errors.mobileNumber ? <p className="text-danger error">{formik.errors.mobileNumber}</p> : null}
                    </div>

                    <div className="">
                      <input type="password" {...formik.getFieldProps('password')} placeholder="Password" />
                      { formik.touched.password && formik.errors.password ? <p className="text-danger error">{formik.errors.password}</p> : null}
                    </div>
                    <div>
                    <Button type='submit' className='btn' text='Sign-up' />
                    </div>
                    <div className="signupLink">
                      <p>
                        Already have an Account?
                        <NavLink to="/login"> Login Here!!</NavLink>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

      </section>
    </>
  );
}

export default SignUp;
