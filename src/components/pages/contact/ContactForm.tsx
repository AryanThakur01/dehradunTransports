"use client";
import { Input } from "@/components/ui/input";
import Section from "@/components/ui/section";
import { Formik } from "formik";
import ContactUs from "@/images/contact-us.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <>
      <Section>
        <div className="bg-secondary flex items-center p-4 gap-3 rounded shadow-lg border border-border">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));

                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-center font-bold text-card-foreground">
                  Reach Us
                </h3>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                {errors.email && touched.email && errors.email}

                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />

                {errors.password && touched.password && errors.password}

                <Button type="submit" disabled={isSubmitting} variant="default">
                  Submit
                </Button>
              </form>
            )}
          </Formik>
          <div className="h-80 overflow-hidden flex items-center">
            <Image src={ContactUs} alt="Contact Us" className="rounded-md" />
          </div>
        </div>
      </Section>
    </>
  );
};
export default ContactForm;
