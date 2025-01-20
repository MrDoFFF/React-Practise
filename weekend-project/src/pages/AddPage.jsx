import React from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddPage({ addImmigration }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add V</title>
      </Helmet>
      <Formik
        initialValues={{
          image: "",
          country: "",
          title: "",
          description: "",
        }}
        validationSchema={Yup.object({
          image: Yup.string().required("Image is required"),
          country: Yup.string().required("Country is required"),
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          addImmigration(values);
          setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="image">Image</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="country">Country</label>
          <Field name="country" type="text" />
          <ErrorMessage name="country" />

          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="description">Description</label>
          <Field name="description" type="text" />
          <ErrorMessage name="description" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddPage;
