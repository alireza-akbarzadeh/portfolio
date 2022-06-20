import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const useFooter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, message, email } = formData;
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let form = useRef(null);
  const handleSendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fz13w75",
        "template_atev5js",
        form.current,
        "iP-ks6pIK6HeeuG03"
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };
  const handleClick = () => {
    setLoading(true);
    setIsFormSubmitted(true);
    setTimeout(() => {
      setLoading(false);
      setIsFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };
  return { isFormSubmitted, form, handleClick, handleSendEmail, loading };
};

export default useFooter;
