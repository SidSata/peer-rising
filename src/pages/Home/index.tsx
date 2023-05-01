import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import ContactContent from "../../content/ContactContent.json";
// import TeacherContent from "../../content/TeacherContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="img/iu (1).jpeg"
        id="intro"
      />
      {/* <ContentBlock
        type="left"
        title={TeacherContent.title}
        content={TeacherContent.text}
        icon="img/iu.jpeg"
        id="intro"
      /> */}
      
      <img src="img/teaching_tough.png" alt="Teaching is tough" width="100%" height="100%"/>
      <img src="img/our_services.png" alt="Services offerd" width="100%" height="100%"/>
      
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />

    </Container>
  );
};

export default Home;
