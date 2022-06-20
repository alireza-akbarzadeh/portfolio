import React from "react";
import { BsTelegram, BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import ReactTooltip from "react-tooltip";
const SocialMedia = () => {
  const sameText = "Find me in";
  return (
    <div className={"app__social"}>
      <div>
        <a
          data-tip
          data-for='github'
          href='https://github.com/AlirezaDev951'
          target='_blank'
          rel='noreferrer'
        >
          <SiGithub />
        </a>
        <ReactTooltip id='github' place='right' effect='solid'>
          {sameText} GitHun
        </ReactTooltip>
      </div>
      <div>
        <a
          data-tip
          data-for='telegram'
          href='https://t.me/Alireza_Akbarzadeh_dev'
          target='_blank'
          rel='noreferrer'
        >
          <BsTelegram />
        </a>
        <ReactTooltip id='telegram' place='right' effect='solid'>
          {sameText} Telegram
        </ReactTooltip>
      </div>
      <div>
        <a
          data-tip
          data-for='linkedin'
          href='https://www.linkedin.com/in/alireza-akbarzadeh/'
          rel='noreferrer'
          target='_blank'
        >
          <BsLinkedin />
        </a>
        <ReactTooltip id='linkedin' place='right' effect='solid'>
          {sameText} Linkedin
        </ReactTooltip>
      </div>
      <div>
        <a
          data-tip
          data-for='whatsapp'
          href='https://wa.me/09381223880'
          rel='noreferrer'
          target='_blank'
        >
          <IoLogoWhatsapp />
        </a>
        <ReactTooltip id='whatsapp' place='right' effect='solid'>
          {sameText} Whats App
        </ReactTooltip>
      </div>
    </div>
  );
};

export default SocialMedia;
