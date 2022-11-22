import { useEffect, useState } from "react";
import style from "./addSocialMediaModal.module.scss";
import LevantiButton from "../reusableComponents/button/button";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddSocialMediaModal({ show, onClose }) {
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanUp() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  if (!show) {
    return null;
  }

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalBody}>
          {/* <div className={style.dropzone}> */}
          <LevantiButton
            title={"Facebook"}
            action={() => console.log("lalla")}
          />
          <LevantiButton
            title={"Instagram"}
            action={() => console.log("lalla")}
          />
          <LevantiButton
            title={"Snapchat"}
            action={() => console.log("lalla")}
          />
          <LevantiButton
            title={"What's app"}
            action={() => console.log("lalla")}
          />
          <LevantiButton title={"Github"} action={() => console.log("lalla")} />
          <LevantiButton
            title={"Twitter"}
            action={() => console.log("lalla")}
          />

          <LevantiButton
            title={"Linkedin"}
            action={() => console.log("lalla")}
          />
          <Formik
            initialValues={{
              name: "",
              socialLinks: [
                { linkName: "facebook" },
                { linkName: "Instagram" },
              ],
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Name is Required!"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              setTimeout(() => {
                console.log("llaal");
                // signUp(values);
                alert(JSON.stringify(values, null, 2));
                console.log(values);
              }, 400);
            }}
          >
            <Form className={style.form}>
              {/* Name Field */}
              <Field name="name" type="text" placeholder="Display name." />
              <ErrorMessage name="name">
                {(msg) => <div className={style.errorMsg}>{msg}</div>}
              </ErrorMessage>
              <Field name="name" type="text" placeholder="Display name." />
              <ErrorMessage name="name">
                {(msg) => <div className={style.errorMsg}>{msg}</div>}
              </ErrorMessage>
              {/* Email Field */}

              <button type="submit" className={style.formBtn}>
                Add
              </button>
            </Form>
          </Formik>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default AddSocialMediaModal;
