"use client";

import { Formik } from "formik";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { initialValues } from "./initialValues";
import { validationSchema } from "./validationSchema";
import { Form } from "./Form";
import { toast } from "react-toastify";

interface Props {
  onSuccess?: () => void;
}

export const GetInTouchForm = ({ onSuccess }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  async function sendMail(
    full_name: string,
    company_name: string,
    message: string,
    email: string,
    reset: () => void
  ) {
    try {
      setIsLoading(true);

      // Split full name into first and last name
      const nameParts = full_name.trim().split(" ");
      const first_name = nameParts[0] || "";
      const last_name = nameParts.slice(1).join(" ") || "";

      // EmailJS template parameters
      const templateParams = {
        from_name: full_name,
        first_name,
        last_name,
        from_email: email,
        company_name,
        message,
        to_email: "info@stephanialtd.com",
      };

      // Send email using EmailJS
      await emailjs.send(
        "service_vmcwqxt",
        "template_jm7ht32",
        templateParams,
        "upOwbqAFVYaBvfAMU"
      );

      setIsLoading(false);
      toast.success("Message sent successfully!", { type: "success" });
      reset();

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setIsLoading(false);
      console.error("EmailJS error:", err);
      toast("Failed to send message. Please try again.", { type: "error" });
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(
        { full_name, company_name, message, email },
        { resetForm }
      ) => {
        sendMail(full_name, company_name, message, email, resetForm);
      }}
      validateOnBlur={false}
    >
      {(formikProps) => {
        return (
          <Form
            {...{
              formikProps,
              processing: isLoading,
            }}
          />
        );
      }}
    </Formik>
  );
};
