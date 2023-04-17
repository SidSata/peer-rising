import { lazy } from "react";
import TeacherContent from "../../content/TeacherContent.json";
import CurriculumCreatorContent from "../../content/CurriculumCreatorContent.json";
import { Divider } from 'antd';

const SplitContainer = lazy(() => import("../../common/SplitContainer"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const Block = lazy(() => import("../../components/Block"));
// const PromptField = lazy(() => import("../../components/PromptField"));
const CurriculumForm = lazy(() => import("../../components/CurriculumForm"));
const GPTField = lazy(() => import("../../components/GPTField"));


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
        
        <CurriculumForm title="" content="" id="" />
      </div>
    </SplitContainer>
  );
};

export default Home;
