import { StyledSection, Flex, Subheader } from "./styled";

const Section = ({ header, content, optionalContent }) => (
  <StyledSection>
    <Flex>
      <Subheader>{header}</Subheader>
      {optionalContent}
    </Flex>
      {content}
  </StyledSection>
);

export default Section;