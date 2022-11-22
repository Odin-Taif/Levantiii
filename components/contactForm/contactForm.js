import { useRef } from "react";

// import emailjs from "emailjs-com";
import style from "./contactForm.module.scss";
import { SeclectCountry, CheckBox } from "../componentsHub";

const ContactForm = () => {
  const ref = useRef(null);
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_7054qdy",
  //       "template_q5iskbq",
  //       form.current,
  //       "dWlURBGetKYlEjW64"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );

  //   e.target.reset();
  // };

  const createYourCard = () => {
    console.log("helleo");
    ref.current.focus();
  };
  return (
    <section id="contact">
      <div className={style.contactContainer}>
        <div className={style.contactForm}>
          <form className={style.form} ref={form} onSubmit={sendEmail}>
            <label className={style.formHeader}>
              Work with Top Software Developers
            </label>
            <input
              ref={ref}
              type="text"
              name="name"
              placeholder="Type your full Name"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Type your Email"
              required
            />

            <input
              type="text"
              name="name"
              placeholder="Type your phone number"
              required
            />
            <SeclectCountry />

            <input
              type="text"
              name="text"
              placeholder="Type your business field"
              required
            />
            <textarea
              name="message"
              placeholder="How can we help, you may take look at the services we offer down below?"
              rows="7"
              required
            ></textarea>
            <CheckBox
              value={
                "I want to receive news and updates once in a while We will add your info to our CRM for contacting you regarding your request."
              }
              label={
                "I want to receive news and updates once in a while We will add your info to our CRM for contacting you regarding your request."
              }
            />
            <button type="submit" className={style.formBtn}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
