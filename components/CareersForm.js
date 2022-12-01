import React from "react";
import { useForm } from "react-hook-form";
import DropZone from "./drag-and-drop/DropZone";
import axios from "axios";
import { useReducer } from "react";

//import ContactForm from "../components/ContactForm";

let messageSent = false;

export default function CareersForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(data) {
    let config = {
      method: "POST",
      url: `${
        process.env.URL == "http://localhost:3000" ? process.env.URL : ""
      }/api/careersend`,
      headers: { "Content-Type": "application/json" },
      data: data,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        console.log("Message was sent Successfully");
        messageSent = true;
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="container pt-3 mb-3">
      <div className="text-center">
        <h2 className="h2 text-primary baskerville-font">Careers</h2>
        <div className="d-flex justify-content-center">
          <p className="text-light text-container text-wrap">
            We are always looking for formal, friendly, professionals to expand
            our operation. Please send us your details using the contact form
            bellow and we will get in touch.
          </p>
        </div>
      </div>
      {/* onSubmit={handleSubmit(onSubmitForm)} */}
      <div className="d-flex justify-content-center">
        <form
          className="text-primary mb-3 contact-form"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className={`form-control ${
                errors.careerName ? "border-danger" : ""
              }`}
              id="name"
              placeholder="Enter name"
              {...register("careerName", {
                required: { value: true, message: "Your Name is required" },
              })}
            />
            <span className="text-danger py-2">
              {errors?.careerName?.message}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className={`form-control ${
                errors.careerEmail ? "border-danger" : ""
              }`}
              id="email"
              placeholder="Enter email"
              {...register("careerEmail", {
                required: { value: true, message: "Your Email is required" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <span className="text-danger py-2">
              {errors?.careerEmail?.message}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Phone Number</label>
            <input
              type="text"
              className={`form-control ${
                errors.careerTelephone ? "border-danger" : ""
              }`}
              id="telephone"
              placeholder="Enter Phone Number"
              {...register("careerTelephone", {
                required: {
                  value: true,
                  message: "Your Phone Number is required",
                },
                pattern: {
                  value:
                    /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/,
                  message: "Invalid Phone Number",
                },
              })}
            />
            <span className="text-danger py-2">
              {errors?.careerTelephone?.message}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="badgeNumber">Badge Number</label>
            <input
              type="text"
              className={`form-control ${
                errors.careerBadge ? "border-danger" : ""
              }`}
              id="badgeNumber"
              placeholder="Enter Phone Number"
              {...register("careerBadge", {
                required: {
                  value: true,
                  message: "Your Badge Number is required",
                },
                maxLength: {
                  value: 16,
                  message: "Must be a 16 digit number",
                },
                minLength: {
                  value: 16,
                  message: "Must be a 16 digit number",
                },
              })}
            />
            <span className="text-danger py-2">
              {errors?.careerBadge?.message}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="file">Your CV</label>
            <input
              type="file"
              className={`form-control ${
                errors.careerCV ? "border-danger" : ""
              }`}
              id="file"
              multiple
              {...register("careerCV", {
                required: {
                  value: true,
                  message: "Your CV is required",
                },
              })}
            />
            <span className="text-danger py-2">
              {errors?.careerCV?.message}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message (optional)</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              placeholder="Leave a message here"
              {...register("careerMessage")}
            ></textarea>
          </div>
          <div className="justify-content-end d-flex d-grid">
            <button type="submit" className="btn mt-2">
              Submit
            </button>
          </div>
        </form>
      </div>
      {messageSent && (
        <div className="alert alert-success mt-2">
          <p className="text-center">Message sent successfully</p>
        </div>
      )}
    </section>
  );
}
