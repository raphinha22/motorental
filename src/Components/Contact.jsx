import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeadImgcontact from "./team/HeadImgcontact";
import Phonenumberteam from "./team/Phonenumberteam";

const notify = () => {
  toast.success("messages sent successfully", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_50zqoa4", "template_88dfsew", form.current, {
        publicKey: "ym1NdUf9fMJc8LaGD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.to_name.value = "";
    e.target.from_name.value = "";
    e.target.message.value = "";
  };

  return (
    <div className="page-contact">
      <HeadImgcontact />
      <div className="contact">
        <h4>Contact</h4>
        <h2>Get In Touch</h2>
        <div className="contact-page">
          <form ref={form} onSubmit={sendEmail}>
            <label className="name">Name</label>
            <input
              type="text"
              name="to_name"
              placeholder="User Name"
              required
            />
            <label className="email">Email</label>
            <input
              type="email"
              name="from_name"
              placeholder="Your Email"
              required
            />
            <label className="sms">Message</label>
            <textarea
              name="message"
              rows="13"
              placeholder="Messages"
              required
            />
            <input
              type="submit"
              value="Send"
              className="submit"
              onClick={notify}
            />
            <div className="alert">
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
      <Phonenumberteam />
    </div>
  );
};

export default Contact;
