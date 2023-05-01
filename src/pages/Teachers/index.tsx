import { lazy } from "react";
import CurriculumCreatorContent from "../../content/CurriculumCreatorContent.json";
import { Divider } from 'antd';
// import IntroContent from "../../content/IntroContent.json";



const SplitContainer = lazy(() => import("../../common/SplitContainer"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
// const Block = lazy(() => import("../../components/Block"));
const UserField = lazy(() => import("../../components/UserField"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Container = lazy(() => import("../../common/Container"));




const Home = () => {

  return (
    
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={CurriculumCreatorContent.title}
        content={CurriculumCreatorContent.text}
        button={CurriculumCreatorContent.button}
        icon="img/lesson_help.png"
        id="intro"
      />

      <h3 > Browse our sample curricula! </h3>
    <SplitContainer>
      
      

      <div className="left-column">
      {/* <Block
          title={CurriculumCreatorContent.title}
          content={CurriculumCreatorContent.text}
        /> */}
        <img src="img/try_tool.png" alt="Try our tool" width="100%" height="100%"/>
      
      </div>
      <Divider type="vertical" style={{ height: "100%", backgroundColor: "#000" }}/>
      <div className="right-column">
        
        {/* <CurriculumForm email="" subject="" gradeLevel="" /> */}
        <UserField />
      
      </div>
    </SplitContainer>
    </Container>
  );
};

export default Home;
