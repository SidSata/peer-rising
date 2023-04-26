import { lazy } from "react";
import TeacherContent from "../../content/TeacherContent.json";
import CurriculumCreatorContent from "../../content/CurriculumCreatorContent.json";
import { Divider } from 'antd';
// import { EmailInput } from "../../components/CurriculumForm/styles";

const SplitContainer = lazy(() => import("../../common/SplitContainer"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const Block = lazy(() => import("../../components/Block"));
const CurriculumForm = lazy(() => import("../../components/CurriculumForm"));
const UserField = lazy(() => import("../../components/UserField"));


const Home = () => {

  return (
    <SplitContainer>
      <ScrollToTop />
      <div className="left-column">
      <Block
          title={CurriculumCreatorContent.title}
          content={CurriculumCreatorContent.text}
        />
      </div>
      <Divider type="vertical" style={{ height: "100%", backgroundColor: "#000" }}/>
      <div className="right-column">
        
        {/* <CurriculumForm email="" subject="" gradeLevel="" /> */}
        <UserField />
      
      </div>
    </SplitContainer>
  );
};

export default Home;
