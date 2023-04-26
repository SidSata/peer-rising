import styled from "styled-components";
import { Select, Space, Input } from 'antd';
import React, { useState } from 'react';


const { Option } = Select;


function SubjectSelector() {
  const [subject, setSubject] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string>('');

  function handleChange(value: string) {
    setSubject(value);
    setError('');
  }

  return (
    <div>
      <Select
        placeholder="Subject"
        value={subject}
        onChange={handleChange}
        onBlur={() => {
          if (!subject) {
            setError('Please select a subject');
          }
        }}
        style={{ width: '100%' }}
      >
        <Option value="Math">Math</Option>
        <Option value="Computer Science">Computer Science</Option>
      </Select>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

function GradeLevelSelector() {
  const [gradeLevel, setGradeLevel] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string>('');

  function handleChange(value: string) {
    setGradeLevel(value);
    setError('');
  }

  return (
    <div>
      <Select
        placeholder="Grade level"
        value={gradeLevel}
        onChange={handleChange}
        onBlur={() => {
          if (!gradeLevel) {
            setError('Please select a grade level');
          }
        }}
        style={{ width: '100%' }}
      >
        <Option value="Middle-School">Middle-School</Option>
        <Option value="High-School">High-School</Option>
      </Select>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
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

export { SubjectSelector, GradeLevelSelector, EmailInput };



const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const SubjectDropdownMenu: React.FC = () => (

  <Space wrap>
    <Select
      defaultValue="subject"
      style={{ width: 240 }}
      onChange={handleChange}
      options={[
        { value: 'Math', label: 'Math' },
        { value: 'Computer Science', label: 'Computer Science' },
      ]}
    />
  </Space>
);

export const GradeLevelDropdownMenu: React.FC = () => (
  <Space wrap>
    <Select
      defaultValue="grade level"
      style={{ width: 240 }}
      onChange={handleChange}
      options={[
        { value: 'Middle-School', label: 'Middle-School' },
        { value: 'High-School', label: 'High-School' },
      ]}
    />
  </Space>
);


export const Content = styled("p")`
  margin-top: 1.5rem;
`;

export const Container = styled("div")`
  position: relative;
  max-width: 700px;
  background: #fff;
  padding: 2rem;
  border-radius: 3rem;
  margin: 0 auto;
`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
  max-width: 400px;
`;

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")<any>`
  display: block;
  font-weight: 600;
  color: #fff;
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;
  color: #fff;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

