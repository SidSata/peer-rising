import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

import { useHistory } from "react-router-dom";




const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const history = useHistory();

  const handleTeacherClick = () => {
    history.push("/teachers");
  }

  const handleAboutClick = () => {
    history.push("/");
  }
  
  const handleContactClick = () => {
    history.push("/");
    scrollTo("contact");
  }

  const handlePlansClick = () => {
    history.push("/plans");
  }

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
    setVisibility(false);
  };
  
  const MenuItem = () => {
    
    return (
      <>
        <CustomNavLinkSmall onClick={handleAboutClick}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={handleTeacherClick}>
          <Span>{t("Teachers")}</Span>
        </CustomNavLinkSmall>
        
        <CustomNavLinkSmall onClick={handlePlansClick}>
          <Span>{t("Browse Plans")}</Span>
        </CustomNavLinkSmall>


        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={handleContactClick}
        >
          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logoheader.svg" width="300px" height="176px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
