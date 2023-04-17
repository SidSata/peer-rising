import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Container, FormGroup, TextWrapper, Content, ButtonContainer, GradeLevelDropdownMenu, SubjectDropdownMenu } from "./styles";
import { useForm } from "../../common/utils/useForm";
import { Row, Col } from "antd";
import { Slide, Zoom } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import validate from "../../common/utils/validationRules";
import { ContactProps, ValidationTypeProps } from "./types";


// TODO: Make buttons nicer

const CurriculumForm = ({ title, content, id, t }: ContactProps) => {
  const { values, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const [subject, setSubject] = useState('Subject');
  const [gradeLevel, setGradeLevel] = useState('Grade level');

  const handleSubjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(event.target.value);
  }

  const handleGradeLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGradeLevel(event.target.value);
  }

  
  return (
    <Container>
      <TextWrapper>
        <Content>
      <label htmlFor="subject">Create a curriculum for </label>
      <SubjectDropdownMenu />
      {/* <select id="subject" value={subject} onChange={handleSubjectChange}>
        <option value="Subject" disabled>Subject</option>
        <option value="Math">Math</option>
        <option value="Computer Science">Computer Science</option>
      </select> */}
      <label> targeted towards </label>
      <GradeLevelDropdownMenu />
      {/* <label htmlFor="gradeLevel"> targeted towards </label>
      <select id="gradeLevel" value={gradeLevel} onChange={handleGradeLevelChange}>
        <option value="Grade level" disabled>Grade level</option>
        <option value="Middle School">Middle School</option>
        <option value="High School">High School</option>
      </select> */}
      </Content></TextWrapper>
      <FormGroup autoComplete="off" onSubmit={handleSubmit}>
        <Input 
          type="text"
          name="email"
          placeholder="Your Email"
          value={values.email || ""}
          onChange={handleChange}
        />
        </FormGroup>
        <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
        </ButtonContainer>

    </Container>
  );
}

export default withTranslation()(CurriculumForm);





// const Block = ({ title, content, t }: Props) => {
//   return (
//     <Container>
//       <h6>{t(title)}</h6>
//       <TextWrapper>
//         <Content>{t(content)}</Content>
//       </TextWrapper>
//     </Container>
//   );
// };
