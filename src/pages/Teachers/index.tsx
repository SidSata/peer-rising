import { lazy } from "react";
import TeacherContent from "../../content/TeacherContent.json";
import CurriculumCreatorContent from "../../content/CurriculumCreatorContent.json";
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
          title={CurriculumCreatorContent.title}
          content={CurriculumCreatorContent.text}
        />
      </div>
    </SplitContainer>
  );
};

export default Home;
