import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";

// Components;
import Toast from "./Toast";

// Variables
import { colors, prefix } from "./../shared/styles.js";

// Styles
const StylesFormContact = styled.div`
  .invalid {
    background-color: ${colors.rouge};
    color: ${colors.white};
    display: inline-block;
    font-size: 0.875rem;
    margin-top: 10px;
    padding: 2.5px 12.5px;
  }
`;

export const FormContact = ({
  firstName,
  lastName,
  email,
  phone,
  subject,
  message,
  submitting,
  submit,
  validation,
}) => {
  const [conf, setConf] = useState({ visible: false });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const schema = Yup.object({
    firstName: Yup.string().required(validation?.firstNameRequired),
    lastName: Yup.string().required(validation?.lastNameRequired),
    email: Yup.string()
      .required(validation?.emailRequired)
      .email(validation?.emailInvalid),
    phone: Yup.string().required(validation?.phoneRequired),
    subject: Yup.string().required(validation?.subjectRequired),
    message: Yup.string().required(validation?.messageRequired),
  });

  const submitHandler = (values, { setSubmitting, resetForm }) => {
    const { firstName, lastName, email, phone, subject, message } =
      values || {};

    const formValues = {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    };

    axios({
      method: "post",
      url: `${process.env.GATSBY_AWS_API_GATEWAY}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(formValues),
    })
      .then((response) => {
        if (response.status === 200) {
          resetForm();
          setConf({
            type: "success",
            error: false,
            heading: validation.successHeader,
            body: validation.successBody,
            visible: true,
          });
          setTimeout(() => handleClose(), 5000);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        if (error) {
          setConf({
            type: "alert",
            error: true,
            heading: validation.errorHeader,
            body: validation.errorBody,
            visible: true,
          });
          setTimeout(() => handleClose(), 5000);
        }
      });
  };

  const handleClose = () => {
    setConf({ ...conf, visible: false });
  };

  return (
    <div className={`${prefix}-form-contact`}>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={submitHandler}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isValid,
          handleBlur,
          isSubmitting,
        }) => (
          <StylesFormContact>
            <Toast handleClose={handleClose} conf={conf} />
            <Form
              noValidate
              onSubmit={handleSubmit}
              action={`${process.env.GATSBY_AWS_API_GATEWAY}`}
              method="POST"
            >
              <Container className="g-0">
                <Row>
                  <Col xs={12} md={6} className="mb-4">
                    <label className="form-label">{firstName}</label>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder={firstName}
                      name="firstName"
                      id="firstName-input"
                      value={values.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && touched.firstName ? (
                      <span className="invalid border-radius-1">
                        {errors.firstName}
                      </span>
                    ) : null}
                  </Col>
                  <Col xs={12} md={6} className="mb-4">
                    <label className="form-label" htmlFor="lastName-input">
                      {lastName}
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder={lastName}
                      name="lastName"
                      id="lastName-input"
                      value={values.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && touched.lastName ? (
                      <span className="invalid">{errors.lastName}</span>
                    ) : null}
                  </Col>
                  <Col xs={12} md={6} className="mb-4">
                    <label className="form-label" htmlFor="email-input">
                      {email}
                    </label>
                    <Field
                      type="email"
                      className="form-control"
                      placeholder={email}
                      name="email"
                      id="email-input"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && touched.email ? (
                      <span className="invalid">{errors.email}</span>
                    ) : null}
                  </Col>
                  <Col xs={12} md={6} className="mb-4">
                    <label className="form-label" htmlFor="phone-input">
                      {phone}
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder={phone}
                      name="phone"
                      id="phone-input"
                      value={values.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && touched.phone ? (
                      <span className="invalid">{errors.phone}</span>
                    ) : null}
                  </Col>
                  <Col xs={12} md={6} className="mb-4">
                    <label className="form-label" htmlFor="subject-input">
                      {subject}
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder={subject}
                      name="subject"
                      id="subject-input"
                      value={values.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && touched.subject ? (
                      <span className="invalid">{errors.subject}</span>
                    ) : null}
                  </Col>
                  <Col xs={12} md={6} className="mb-4">
                    <label className="form-label" htmlFor="message-input">
                      {message}
                    </label>
                    <Field
                      className="form-control"
                      name="message"
                      id="message-input"
                      rows={3}
                      value={values.message}
                      onChange={handleChange}
                      component="textarea"
                    />
                    {errors.message && touched.message ? (
                      <span className="invalid">{errors.message}</span>
                    ) : null}
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} className="">
                    <div className="d-flex justify-content-end">
                      <button
                        className="btn bg-marino text-white"
                        disabled={!isValid || isSubmitting}
                        type="submit"
                      >
                        {isSubmitting ? submitting : submit}
                      </button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Form>
          </StylesFormContact>
        )}
      </Formik>
    </div>
  );
};

export default FormContact;
