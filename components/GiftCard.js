import { useForm } from "react-hook-form";
import axios from "axios";

let giftVoucherSent = false;

export default function GiftCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitGift(data) {
    let config = {
      method: "POST",
      url: `${
        process.env.URL == "http://localhost:3000" ? process.env.URL : ""
      }/api/giftvouchersend`,
      headers: { "Content-Type": "application/json" },
      data: data,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        console.log("Message was sent Successfully");
        giftVoucherSent = true;
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return <>
    <section className="container pt-3 mb-3">
      <div className="text-center">
        <h2 className="h2 text-primary baskerville-font">Gift Voucher</h2>
        <div className="d-flex justify-content-center">
          <p className="text-light text-container text-wrap">
            We offer gift vouchers if you want to buy someone a couple of
            drinks. We do prefer to do things in person, send us your contact
            details here, we will require proof of ID on purchase and at sale.
            we will the contact you as soon as possible.
          </p>
        </div>
      </div>
      {/* onSubmit={handleSubmit(onSubmitForm)} */}
      <div className="d-flex justify-content-center">
        <form
          className="text-primary mb-3 contact-form"
          onSubmit={handleSubmit(onSubmitGift)}
        >
          <div className="form-group">
            <label htmlFor="gift-name">Name</label>
            <input
              type="text"
              className={`form-control ${
                errors.giftContactName ? "border-danger" : ""
              }`}
              id="gift-name"
              placeholder="Enter name"
              {...register("giftContactName", {
                required: { value: true, message: "Your Name is required" },
              })}
            />
            <span className="text-danger py-2">
              {errors?.giftContactName?.message}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              className={`form-control ${
                errors.giftContactPhoneNumber ? "border-danger" : ""
              }`}
              id="phoneNumber"
              placeholder="Enter Phone Number"
              {...register("giftContactPhoneNumber", {
                required: {
                  value: true,
                  message: "Your Phone Number is required",
                },
                pattern: {
                  //value: /^[0-9]{12}$/,
                  value:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                  message: "Please enter a valid phone number",
                },
              })}
            />
            <span className="text-danger py-2">
              {errors?.giftContactPhoneNumber?.message}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="gift-email">Email</label>
            <input
              type="text"
              className={`form-control ${
                errors.giftContactEmail ? "border-danger" : ""
              }`}
              id="gift-email"
              placeholder="Enter email"
              {...register("giftContactEmail", {
                required: { value: true, message: "Your Email is required" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <span className="text-danger py-2">
              {errors?.giftContactEmail?.message}
            </span>
          </div>
          <div className="form-group">
            <label className="" htmlFor="exampleInputAmount">
              Amount
            </label>
            <div className="input-group">
              <div
                className={`input-group-text ${
                  errors.amount ? "border-danger" : ""
                }`}
              >
                £
              </div>
              <input
                type="number"
                id="exampleInputAmount"
                className={`form-control ${
                  errors.amount ? "border-danger" : ""
                }`}
                placeholder="Price"
                {...register("amount", {
                  required: {
                    value: true,
                    message: "The gift voucher value is required",
                  },
                  min: { value: 5, message: "The minimum spend is £5" },
                })}
              />
            </div>
            <span className="text-danger py-2">
              {errors?.amount?.message}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="gift-message">Message (optional)</label>
            <textarea
              className={`form-control ${
                errors.giftContactMessage ? "border-danger" : ""
              }`}
              id="gift-message"
              rows="3"
              placeholder="Let us know how we can help"
              {...register("giftContactMessage", {})}
            ></textarea>
            <span className="text-danger py-2">
              {errors?.giftContactMessage?.message}
            </span>
          </div>
          <div className="justify-content-end d-flex d-grid">
            <button type="submit" className="btn mt-2">
              Submit
            </button>
          </div>
        </form>
      </div>
      {giftVoucherSent && (
        <div className="alert alert-success mt-2">
          <p className="text-center">Message sent successfully</p>
        </div>
      )}
    </section>
  </>;
}
