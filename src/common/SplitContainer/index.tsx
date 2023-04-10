import { SplitContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border, children }: ContainerProps) => (
  <SplitContainer border={border}>{children}</SplitContainer>
);

export default Container;
