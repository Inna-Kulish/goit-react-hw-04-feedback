import PropTypes from 'prop-types';
import { Title } from "./Section.styled";

const Section = ({ className, title, children }) => (
    <section className={className}>
        <Title>{title}</Title>
        {children}
    </section>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
    className: PropTypes.string,
}

export { Section }