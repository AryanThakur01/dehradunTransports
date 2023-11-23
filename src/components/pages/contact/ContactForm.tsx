"use client";
import Input from "@/components/ui/input";
import Section from "@/components/ui/section";
import { Form, Formik, FormikProvider, FormikValues, useFormik } from "formik";
import ContactUs from "@/images/contact-us.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as yup from "yup";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

interface FormValues {
  name: string;
  email: string;
  contact: string;
}
const ContactForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      let body = `First Name=${values.name}%0D%0AContact=${values.contact}%0D%0AEmail=${values.email}`;
      router.push(
        `mailto:thakuraryan942@gmail.com?subject=Contact&body=${body}`,
      );
    },
    validationSchema: yup.object({
      name: yup.string().required("Enter Your Name"),
      email: yup.string().required("Enter Your Email").email(),
      contact: yup
        .string()
        .required("Enter Your Contact Number")
        .length(10, "Recheck Contact"),
    }),
  });
  return (
    <>
      <Section>
        <div className="bg-secondary flex items-center p-4 gap-3 rounded shadow-lg border border-border my-7">
          <FormikProvider value={formik}>
            <Form className="flex flex-col gap-4 w-1/2">
              <h3 className="text-center font-bold text-card-foreground">
                Reach Us
              </h3>
              <div className="flex gap-2">
                <Input
                  type="text"
                  uni="name"
                  placeholder="Enter your name"
                  label="Name"
                  required={true}
                />
                <Input
                  type="email"
                  uni="email"
                  placeholder="Enter your email"
                  label="Email"
                  required={true}
                />
              </div>
              <Input
                type="text"
                uni="contact"
                placeholder="Enter your phone number"
                label="Phone Number"
                required={true}
              />
              <Button type="submit" variant="default">
                Submit
              </Button>
            </Form>
          </FormikProvider>
          <div className="h-80 overflow-hidden hidden md:flex items-center rounded-lg border border-border">
            <Image src={ContactUs} alt="Contact Us" />
          </div>
        </div>
      </Section>
    </>
  );
};
export default ContactForm;
