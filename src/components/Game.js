import React, { Component } from 'react';
import Question from './Question';
import { loadQuestions } from '../helpers/QuestionsHelper';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      currentQuestion: null,
      loading: true,
      score: 0,
    };
  }
  // retrieve question set from API using the Fetch API
  // convert that response to a format that we want
  // choose the first question of that array and pass it to the question component

  async componentDidMount() {
    try {
      const questions = await loadQuestions();
      console.log(questions);
      this.setState({ questions }, () => {
        this.changeQuestion();
      },
      );
    } catch (err) {
      console.log(err);
    }
    // w/o async await v
    // fetch(url)
    //   .then((res) => {
    //     console.log(res);
    //     return res.json();
    //   })
    //   .then(({ results }) => {
    //     console.log(results);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }

  changeQuestion = (bonus = 0) => {
    // get a random index of a question
    const randomQuestionIndex = Math.floor(Math.random() * this.state.questions.length);
    // set the current question to the question at that random index
    const currentQuestion = this.state.questions[randomQuestionIndex];
    // remove that question from the questions going forward
    const remainingQuestions = [...this.state.questions];
    remainingQuestions.splice(randomQuestionIndex, 1);
    // update the state to reflect these changes
    this.setState((prevState) => ({
      questions: remainingQuestions,
      currentQuestion,
      loading: false,
      score: (prevState.score += bonus),
    }));
    console.log(this.state.score);
  };

  render() {
    return (
      <>
        {this.state.loading && <div id="loader" />}
        {!this.state.loading && this.state.currentQuestion && (
        <Question question={this.state.currentQuestion} changeQuestion={this.changeQuestion} />
        )}
      </>
    );
  }
}
