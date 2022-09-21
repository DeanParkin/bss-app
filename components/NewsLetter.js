import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

let newsletterSent = false;

export default function NewsLetter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitNewsletterForm(data) {
    let config = {
      method: "POST",
      url: `${
        process.env.URL == "http://localhost:3000" ? process.env.URL : ""
      }/api/mailinglist`,
      headers: { "Content-Type": "application/json" },
      data: data,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        console.log("Message was sent Successfully");
        newsletterSent = true;
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <section className="bg-primary">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* <div className="col-md-6 align-items-center"> */}
          <label
            htmlFor="subscribe"
            className="text-center fs-2 col-md-6 align-items-center justify-content-center mt-3 my-md-4 baskerville-font"
            id="newsLetterHeader"
          >
            LET&apos;S KEEP IN TOUCH.
            <br />
            JOIN US!
          </label>
          {/* </div> */}
          <div className="col-md-6 align-items-center my-4 my-md-5">
            <form onSubmit={handleSubmit(onSubmitNewsletterForm)}>
              <div className="input-group">
                <input
                  type="text"
                  name="subscribe"
                  size="40"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="Enter your email"
                  aria-labelledby="newsLetterHeader"
                  className={`form-control newsletter-input ${
                    errors.contactName ? "border-danger" : ""
                  }`}
                  {...register("mailingListEmail", {
                    required: {
                      value: true,
                      message: "Your Email is required",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid Email",
                    },
                  })}
                />

                <input
                  type="submit"
                  value="Send"
                  className="btn newsletter-submit"
                />
              </div>
            </form>
            <span className="text-danger py-2">
              {errors?.mailingListEmail?.message}
            </span>
            {newsletterSent && (
              <p className="text-center text-dark">Email sent successfully</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
