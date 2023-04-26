import styled from "styled-components";
import React from 'react';
import { Select, Space } from 'antd';

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
  top: 10%
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

