import { lazy } from "react";
import CurriculumCreatorContent from "../../content/CurriculumCreatorContent.json";
import { Divider } from 'antd';
// import IntroContent from "../../content/IntroContent.json";



const SplitContainer = lazy(() => import("../../common/SplitContainer"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const UserField = lazy(() => import("../../components/UserField"));
const TeacherContentBlock = lazy(() => import("../../components/TeacherContentBlock"));
const Container = lazy(() => import("../../common/Container"));
const ImageGrid = lazy(() => import("../../components/ImageGrid"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));


const Home = () => {

  return (
    
    <Container>
      <ScrollToTop />
      <TeacherContentBlock
        type="right"
        title={CurriculumCreatorContent.title}
        content={CurriculumCreatorContent.text}
        button={CurriculumCreatorContent.button}
        icon="img/lesson_help.png"
        id="intro"
      />
      <div id="custom">
      <MiddleBlock
        title="View our customized curricula!"
        content=""
        button="Pricing Plans"
      /></div>
      <ImageGrid />
      <div id="browse">
      <MiddleBlock
        title="Browse our sample curricula!"
        content=""
        button=""
        
      /></div>
      
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
