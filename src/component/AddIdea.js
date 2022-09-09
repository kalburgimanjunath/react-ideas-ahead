import React, { useEffect, useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function AddIdea() {
  const [ideas, setIdeas] = useState();
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/appWToptGxYlLEtgo/Table%201?api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        // setIdeas(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <h1>Ideas List</h1>
      <Formik
        initialValues={{ title: '', description: '', image: '', url: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Required';
          }
          if (!values.description) {
            errors.description = 'Required';
          }
          if (!values.image) {
            errors.image = 'Required';
          }
          if (!values.url) {
            errors.url = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="title">Title</label>
            <Field type="title" name="title" placeholder="Enter Idea Title" />
            <ErrorMessage name="title" component="div" />
            <label htmlFor="description">Description</label>
            <Field
              type="text"
              name="description"
              placeholder="Enter description"
            />
            <ErrorMessage name="description" component="div" />
            <label htmlFor="image">Image</label>
            <Field type="file" name="image" placeholder="Enter Idea image" />
            <ErrorMessage name="image" component="div" />
            <label htmlFor="url">Demo url</label>
            <Field type="text" name="url" placeholder="Enter Idea demo url" />
            <ErrorMessage name="url" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Add Idea
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
