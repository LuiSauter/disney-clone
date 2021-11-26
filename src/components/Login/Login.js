import { BgImage, Container, ContentHero, CTA, CTALogoOne, SignUp, Description, Content, Footer, Button } from "../style"

function Login() {
  return (
    <Container>
      <BgImage />
      <ContentHero>
        <CTA>
          <Description>
            With Combo +, take advantage of the best of Disney + and Star + at a
            single price.
          </Description>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Footer>
            * This web application is made entirely by hand for learning and fun
            purposes. Disney plus clone.
          </Footer>
        </CTA>
        <Button>hola</Button>
      </ContentHero>
      <Content>
        <CTA>
          <Description>
            Con Combo+, aprovechá lo mejor de Disney+ y Star+ a un precio único.
          </Description>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
        </CTA>
      </Content>
    </Container>
  );
}

export default Login