import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Container, FormGroup, TextWrapper, Content, ButtonContainer, GradeLevelDropdownMenu, SubjectDropdownMenu, EmailInput, GradeLevelSelector, SubjectSelector } from "./styles";
import { useForm } from "../../common/utils/useForm";
import { Row, Col } from "antd";
import { Slide, Zoom } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import Block from "../Block";
// import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import validate from "../../common/utils/validationRules";
import { ContactProps, ValidationTypeProps } from "./types";
import { Select, Space, Input } from 'antd';


// TODO: Make buttons nicer
interface FormValues {
  email: string;
  subject: string;
  gradeLevel: string;
}


interface CurriculumFormProps {
  email: string;
  subject?: string;
  gradeLevel?: string;
  onSubmit: (data: FormValues) => void;
}


const CurriculumForm = ({ email = '', subject = '', gradeLevel = '', onSubmit }: CurriculumFormProps) => {
  
  const { values, handleChange,  } = useForm(
    validate
  ) as any;
  const [selectedSubject, setSelectedSubject] = useState(subject);
  const [selectedGradeLevel, setSelectedGradeLevel] = useState(gradeLevel);
  const [selectedEmail, setSelectedEmail] = useState(email); 


  

  const handleSubjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(event.target.value);
  }

  const handleGradeLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGradeLevel(event.target.value);
  }

  

  function EmailInput() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
  
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      const value = event.target.value;
      setEmail(value);
      setError(value ? '' : 'Email is required');
    }
  
    return (
      <div>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          onBlur={() => setError(email ? '' : 'Email is required')}
          style={{ marginBottom: '10px' }}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    );
  }
  
  return (
    <Container>
      <TextWrapper>
        <Content>
      <label htmlFor="subject">Create a curriculum for </label>
      <SubjectSelector />
      {/* <SubjectDropdownMenu /> */}
      {/* <select id="subject" value={subject} onChange={handleSubjectChange}>
        <option value="Subject" disabled>Subject</option>
        <option value="Math">Math</option>
        <option value="Computer Science">Computer Science</option>
      </select> */}
      <label> targeted towards </label>
      <GradeLevelSelector />
      {/* <GradeLevelDropdownMenu /> */}
      {/* <label htmlFor="gradeLevel"> targeted towards </label>
      <select id="gradeLevel" value={gradeLevel} onChange={handleGradeLevelChange}>
        <option value="Grade level" disabled>Grade level</option>
        <option value="Middle School">Middle School</option>
        <option value="High School">High School</option>
      </select> */}
      </Content></TextWrapper>
      {/* <FormGroup autoComplete="off" onSubmit={handleSubmit}>
        <Input 
          type="text"
          name="email"
          placeholder="Your Email"
          value={values.email || ""}
          onChange={handleChange}
        />
        </FormGroup> */}
        <TextWrapper><label> Your email: </label></TextWrapper>
        <EmailInput />
        <ButtonContainer>
                <Button name="submit">{ onSubmit }</Button>
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
