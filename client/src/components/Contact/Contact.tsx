import "./contact.css";
import NavBar from "../Navbar/Navbar";

function Contact() {
  return (
    <>
      <NavBar />

      <form
        className="form-all"
        action="https://formspree.io/f/xyzwlqev"
        method="POST"
      >
        <h1 className="title">Contact Me</h1>
        <div className="les_inputs">
          <div className="name">
            <label>
              Name
              <input type="text" name="lastname" placeholder="Name" required />
            </label>
          </div>

          <div className="email">
            <label>
              Email
              <input type="email" name="mail" placeholder="E-mail" required />
            </label>
          </div>

          <div className="text">
            <label className="input_message">
              <p className="word_h5">Message</p>
              <textarea name="text" placeholder="Message" required />
            </label>
          </div>
        </div>
        <button type="submit" className="explore-button">
          Send
        </button>
      </form>
    </>
  );
}

export default Contact;
