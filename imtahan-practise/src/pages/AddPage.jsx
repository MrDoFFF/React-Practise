import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import { Helmet } from 'react-helmet';

function AddPage() {
  return (
    <div>
      <Helmet>
        <title>Add</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Formik
        initialValues={{ image: '', title: '', price: '' }}
        validationSchema={Yup.object({
          image: Yup.string()
            .max(15, 'Must be 50 characters or less')
          ,
          title: Yup.string()
            .max(20, 'Must be 30 characters or less')
          ,
          price: Yup.string() .max(20, 'Must be 20 characters or less'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="image">Image</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddPage
