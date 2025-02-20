import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  componentDidMount() {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      this.setState(savedData);
    }
  }

  handleSubmit = (values, { setSubmitting }) => {
    localStorage.setItem("formData", JSON.stringify(values));
    setSubmitting(false);
    if (this.props.onBack) {
      this.props.onBack();
    }
  };

  render() {
    return (
      <Formik
        initialValues={{
          name: this.state.name,
          email: this.state.email,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Nome é obrigatório"),
          email: Yup.string().email("Email inválido").required("Email é obrigatório"),
        })}
        onSubmit={this.handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Nome</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Salvar
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default Step1;