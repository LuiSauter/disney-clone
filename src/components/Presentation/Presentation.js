import { Link } from "react-router-dom";
import { DownArrow } from "../../assets/icons/DownArrow";
import { BtnSignup } from "../BtnSignup/BtnSignup";
import Devices from "./Devices";

import { Container, CTA, CTALogoOne, Content, Description, Button, FooterContent, CTAGrid } from "./style"

function Presentation() {
  return (
    <Container>
      <figure />
      <div className="container-hero">
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <h1>More stories than ever before</h1>
          <BtnSignup>
            <Link to="/">SIGN UP FREE</Link>
            <Link to="/">LOG IN</Link>
          </BtnSignup>
          <p>
            * This web application is made entirely by hand for learning and fun
            purposes. Disney plus clone.
          </p>
          <span>Subscribe totally Free to take a look at my work.</span>
        </CTA>
        <Button href="#devices">
          <DownArrow />
        </Button>
      </div>
      <Content id="devices">
        <article>
          <CTALogoOne src="/images/logo-devices.png" alt="" />
          <div>
            <h2>Watch the way you want</h2>
            <Description>
              Enjoy the big screen experience on your TV, or watch on your
              tablet, laptop, phone and more. You can watch an ever-growing
              selection of titles in 4K. Plus, you can stream on 4 screens at
              once, so everyone’s happy.
            </Description>
          </div>
        </article>
      </Content>
      <FooterContent>
        <BtnSignup>
          <Link to="/">SIGN UP NOW</Link>
        </BtnSignup>
      </FooterContent>
      <Content>
        <h2>Available on your favorite devices</h2>
        <CTAGrid>
          <Devices />
        </CTAGrid>
      </Content>
      <FooterContent>
        <img src="/images/logo-disney.svg" alt="Disney plus" />
      </FooterContent>
    </Container>
  );
}

export default Presentation;