import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import TeacherContent from "../../content/TeacherContent.json";
import { Styles } from "../../styles/styles";


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const SplitContainer = lazy(() => import("../../common/SplitContainer"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Block = lazy(() => import("../../components/Block"));

// const Home = () => {
//   return (
//     <Container>
//       <div className="left-column">
//         <p>This is the demo text.</p>
//         <button>Button 1</button>
//         <button>Button 2</button>
//       </div>
//       <div className="right-column">
//         <p>Prompt for ChatGPT goes here.</p>
//       </div>
//     </Container>
//   );
// }


const Home = () => {
  return (
    <SplitContainer>
      <ScrollToTop />
      <div className="left-column">
        <Block
          title={TeacherContent.title}
          content={TeacherContent.text}
          // button={TeacherContent.button}
          // id="intro"
        />
      </div>
      <div className="right-column">
        <Block
          title={TeacherContent.title}
          content={TeacherContent.text}
        />
      </div>
    </SplitContainer>
  );
};

export default Home;
