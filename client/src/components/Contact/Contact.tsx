import "./contact.css";
import NavBar from "../Navbar/Navbar";
import { useState } from "react";
import { toast } from 'react-toastify';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xyzwlqev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if(response.status === 200)
      toast.success("Your message got sent");
    else
      toast.error("An error occurred");

      console.log(response)

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <NavBar />

      <form className="form-all" onSubmit={handleSubmit}>
        <h1 className="title">Contact Me</h1>
        <div className="les_inputs">
          <div className="name">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </label>
          </div>

          <div className="email">
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </label>
          </div>

          <div className="text">
            <label className="input_message">
              <p className="word_h5">Message</p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
              />
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
