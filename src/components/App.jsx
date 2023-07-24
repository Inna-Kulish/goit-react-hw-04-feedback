import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";
import { MainContainer, StyledSection } from "components/App/App.styled";
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  heandleLeaveFeedback = buttonName => {
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage();

  return (
    <MainContainer>
      <StyledSection title='Please leave feedback'>
        <FeedbackOptions options={this.state} onLeaveFeedback={this.heandleLeaveFeedback}/>
        </StyledSection>
      <Section title='Statistics'>
        {totalFeedback ? (
        <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage}/>) : (
          <Notification message="There is no feedback"/>
        )}
      </Section>
    </MainContainer>
  )
};
}

export { App }