import "./style.css";

const Section = ({ header, content, optionalContent }) => (
  <section className="section">
    <div className="section__flex">
      <h2 className="section__subHeader">{header}</h2>
      {optionalContent}
    </div>
      {content}
  </section>
);

export default Section;
