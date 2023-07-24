import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import { ButtonList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttonNames = Object.keys(options);

    return (
        <ButtonList>
            {buttonNames.map(buttonName => (
<li key={nanoid()}><Button type='button' onClick={() => onLeaveFeedback(buttonName)}>{buttonName}</Button></li>
            ))}
        </ButtonList>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.object,
    ononLeaveFeedback: PropTypes.func,
}

export { FeedbackOptions }