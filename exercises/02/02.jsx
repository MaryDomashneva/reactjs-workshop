/* eslint
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/destructuring-assignment: off,
*/
import React from 'react';

// Exercise 02/02
// ===========
//
// This is a slight extension of exercise 02/01, but this time we will
// convert our input to become a "controlled" component.
//
// Tasks
// --------
// ✅    Create the exact same functionality as in 02/01
// ✅    Your <input /> component should now be a "controlled" component
//
// ⭐️    Add a button component that when clicked updates the state to a
//        given team name. You are free to choose the team name.
//      When clicked, both the input and text display should render your
//        chosen team name.
//
// Tips
// ------
// 🐨     You can COPY your solution from Exercise 02/01 as a starting point!
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { team: '' };

    this.handleTeamState = this.handleTeamState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleTeamState(event) {
    this.setState({ team: event.target.value });
  }

  handleClick(event) {
    alert('A team name was submitted: ' + this.state.team);
    this.setState({ team: 'hhhhhh' });
    event.preventDefault();
  }

  render() {
    return (
      <div className="w-1/4">
        <form onSubmit={this.handleSubmit}>
          <label>
            Team: <input type="text" value={this.state.team} onChange={this.handleTeamState} />
          </label>
          <div>
            {this.state.team}
          </div>
          <button onClick={this.handleClick}> Update </button>
        </form>
      </div>
    );
  }
}

export default App;
