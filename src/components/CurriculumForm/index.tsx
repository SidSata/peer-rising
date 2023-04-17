import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Container, TextWrapper, Content } from "./styles";

// TODO: Make buttons nicer

function CurriculumForm() {
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
      <select id="subject" value={subject} onChange={handleSubjectChange}>
        <option value="Subject" disabled>Subject</option>
        <option value="Math">Math</option>
        <option value="Computer Science">Computer Science</option>
      </select>
      <label htmlFor="gradeLevel"> targeted towards </label>
      <select id="gradeLevel" value={gradeLevel} onChange={handleGradeLevelChange}>
        <option value="Grade level" disabled>Grade level</option>
        <option value="Middle School">Middle School</option>
        <option value="High School">High School</option>
      </select></Content></TextWrapper>
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
