import "./style.css";
import { StyledSection } from "./styled";

const Section = ({ header, content, optionalContent }) => (
  <StyledSection>
    <div className="section__flex">
      <h2 className="section__subHeader">{header}</h2>
      {optionalContent}
    </div>
      {content}
  </StyledSection>
);

export default Section;