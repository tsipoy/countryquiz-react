const React = require('react');
const PropTypes = require('prop-types');

function Score({ answers }) {
  return (
    <p>
      Score: {answers.reduce((score, answer) =>
         (answer.user === answer.correct ? score + 1 : score), 0)}
      /{answers.length}
    </p>
  );
}

Score.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string,
    correct: PropTypes.string,
    country: PropTypes.string,
  })).isRequired,
};

function Solution({ answer }) {
  return (
    <tr>
      <td>{answer.country}</td>
      <td>{answer.correct}</td>
      <td>{answer.user}</td>
    </tr>
  );
}

Solution.propTypes = {
  answer: PropTypes.shape({
    user: PropTypes.string,
    correct: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

function Solutions({ answers }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Capital</th>
          <th>Your Answer</th>
        </tr>
      </thead>
      <tbody>
        {answers.map(answer => <Solution key={answer.country} answer={answer} />)}
      </tbody>
    </table>
  );
}

Solutions.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string,
    correct: PropTypes.string,
    country: PropTypes.string,
  })).isRequired,
};

function Results({ answers }) {
  return (
    <div>
      <Score answers={answers} />
      <Solutions answers={answers} />
    </div>
  );
}

Results.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string,
    correct: PropTypes.string,
    country: PropTypes.string,
  })).isRequired,
};

module.exports = Results;