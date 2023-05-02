import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import Block from "../Block";

import { ContactContainer } from "./styles";


import { useState } from 'react';
import { Form, Input, Button, notification, message } from 'antd';

interface FormData {
  name: string;
  email: string;
  message: string;
}

// interface ContactFormProps {}

// const ContactForm: React.FC<ContactFormProps> = () => {
  

//   return (
    
//   );
// };

// export default ContactForm;


const Contact = ({ title, content, id, t }: ContactProps) => {
  
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onFinish = async (values: FormData) => {
    setLoading(true);
    try {
      fetch('https://8e4e-142-254-1-167.ngrok-free.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ values }),
      })
      .then(response => {
        if (response.ok) {
          console.log('Contact submitted successfully!');
          setSuccess(true);
          form.resetFields();
          message.success('Your message has been sent successfully!');

          
        } else {
          console.log('Error submitting contact');
          message.error('Contact submitted successfully!');
        }
      })
      .catch(error => {
        console.error('Error submitting Contact:', error);
      });

      notification.success({
        message: 'Success',
        description: 'Message sent successfully!',
      });
      form.resetFields();

    } catch (error) {
      console.error('Error sending message: ', error);
      notification.error({
        message: 'Error',
        description: 'Failed to send message. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error('Failed:', errorInfo);
    notification.error({
      message: 'Validation error',
      description: 'Please fill in all the required fields.',
    });
  };
  
  const handleReset = (): void => {
    form.resetFields();
    setSuccess(false);
  };
  // const ValidationType = ({ type }: ValidationTypeProps) => {
  //   const ErrorMessage = errors[type];
  //   return (
  //     <Zoom direction="left">
  //       <Span erros={errors[type]}>{ErrorMessage}</Span>
  //     </Zoom>
  //   );
  // };

  return (
    <>
    {success ?  
      (
        <>
          <p>Thank you for reaching out! Please allow us some time to get back to you.</p>
          <Button onClick={handleReset}>Submit another form</Button>
        </>
      )
    : (<ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Form
        layout="vertical"
        name="basic"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please input your message!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
        </Col>
      </Row>
    </ContactContainer>)}
    </>
  );
};

export default withTranslation()(Contact);
