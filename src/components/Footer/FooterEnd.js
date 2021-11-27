import { GithubIcon, HeartIcon, InstagramIcon } from "../../assets/icons/NetworkIcons";
import { FooterStyle } from "./FooterStyle";

export const FooterEnd = () => {
  return (
    <FooterStyle>
      <div className="icons">
        <p>Luis G. Janco</p>
        <div className="love">
          <HeartIcon />
        </div>
        <a
          href="https://www.instagram.com/sauterdev/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a href="https://github.com/LuiSauter" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
      </div>
    </FooterStyle>
  );
}