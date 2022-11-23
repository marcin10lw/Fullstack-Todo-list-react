import "./style.css";

const Section = ({ sectionHeader, sectionContent, sectionOptionalContent }) => (
  <section className="section">
    <div className="section__container section__container--flex">
      <h2 className="section__subHeader">{sectionHeader}</h2>
      {sectionOptionalContent}
    </div>
    <div className="section__container">
      {sectionContent}
    </div>
  </section>
);

export default Section;
