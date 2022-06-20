import { AppWrap, MotionWrap } from "../../wrapper";
import images from "../../constant/images";
import { AboutContainer } from "./Footer_Styled";
import useFooter from "./useFooter.js";
const Footer = () => {
  const { form, handleSendEmail, handleClick, loading, isFormSubmitted } =
    useFooter();
  return (
    <AboutContainer>
      <h2 className={"head-text"}>Take a Coffee & Chat With me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:devtools95@email.com' className={"p-text"}>
            Alireza.Akbarzadeh.dev@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel:+98 09381223880' className={"p-text"}>
            +98 09381223880
          </a>
        </div>
      </div>
      <div className={"app__footer-form app__flex"}>
        <form ref={form} onSubmit={handleSendEmail} style={{ width: "100%" }}>
          <div className='app__flex'>
            <input
              type='text'
              className={"p-text"}
              name={"name"}
              placeholder={"your Name"}
            />
          </div>
          <div className='app__flex'>
            <input
              type='email'
              className={"p-text"}
              name={"email"}
              placeholder={"your Email"}
            />
          </div>
          <div className=''>
            <textarea
              name='message'
              id=''
              cols='30'
              rows='10'
              className={"p-text"}
              placeholder={"Your Message"}
            />
          </div>
          <button type={"submit"} className={"p-text"} onClick={handleClick}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </form>
      </div>
      {isFormSubmitted && (
        <div>
          <h3 className={"head-text"}>Thank Your For Getting in Touch</h3>
        </div>
      )}
    </AboutContainer>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
