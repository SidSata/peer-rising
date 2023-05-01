import { lazy } from "react";

import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));


const ContactPage = () => (
  <Container>
    <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
  </Container>
);

export default ContactPage;
