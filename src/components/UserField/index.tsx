import { useState } from 'react';
import { Select, Input, Button, Form } from 'antd';
import { withTranslation } from 'react-i18next';

const { Option } = Select;

interface SubjectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface GradeLevelOption {
  label: string;
  value: string;
  disabled?: boolean;
}

const subjectOptions: SubjectOption[] = [
  { label: 'Math', value: 'math' },
  { label: 'Computer Science', value: 'computer_science' },
  { label: 'Physics', value: 'physics', disabled: true },
  { label: 'College Preparation', value: 'college_preparation', disabled: true },
  { label: 'Chemistry', value: 'chemistry', disabled: true },
];

const gradeLevelOptions: GradeLevelOption[] = [
  { label: 'High-school', value: 'high_school' },
  { label: 'Middle-school', value: 'middle_school' },
  { label: 'Elementary school', value: 'elementary_school', disabled: true },
];

const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const UserField: React.FC = () => {
  const [subject, setSubject] = useState<string | null>(null);
  const [gradeLevel, setGradeLevel] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    
    form.validateFields().then((values) => {
      const { subject, gradeLevel, email } = values;
      console.log('Submitting:', subject, gradeLevel, email);
      // Call backend API with subject, gradeLevel, and email
      fetch('https://8e4e-142-254-1-167.ngrok-free.app/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subject, gradeLevel, email }),
      })
      .then(response => {
        if (response.ok) {
          console.log('Data submitted successfully!');
          setSubmitted(true);
          setSubject('');
          setGradeLevel('');
          setEmail('');
        } else {
          console.log('Error submitting data');
          
        }
      })
      .catch(error => {
        console.error('Error submitting data:', error);
      });
      });

      
  };

  const handleReset = (): void => {
    form.resetFields();
    setSubject(null);
    setGradeLevel(null);
    setEmail(null);
    setSubmitted(false);
  };

  return (
    <>
     {submitted ? 
     
     (
      <>
        <p>Thank you for your submission! Please check your email for the sample curriculum.</p>
        <Button onClick={handleReset}>Submit another form</Button>
      </>
    )
     : (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item
        label="Subject"
        name="subject"
        rules={[{ required: true, message: 'Please select a subject' }]}
      >
        <Select value={subject} onChange={(value) => setSubject(value)}>
          {subjectOptions.map((option) => (
            <Option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Grade level"
        name="gradeLevel"
        rules={[{ required: true, message: 'Please select a grade level' }]}
      >
        <Select value={gradeLevel} onChange={(value) => setGradeLevel(value)}>
          {gradeLevelOptions.map((option) => (
            <Option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input value={email ? email : ''} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit"  disabled={!subject || !gradeLevel || !validateEmail(email!)}>
          Submit
        </Button>
      </Form.Item>
    </Form> 
    )}
    </>
  );
};

export default withTranslation()(UserField);
