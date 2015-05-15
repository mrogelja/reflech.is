import React from 'react';
import Router from 'react-router';
import SubjectCreatePanel from './SubjectCreatePanel.react.js';
import SubjectSearchPanel from './SubjectSearchPanel.react.js';
import SubjectsStore from '../stores/SubjectsStore.js';
import SubjectsActions from '../actions/SubjectsActions.js';

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;


function getSubjectsState() {
  return {
    subjects: SubjectsStore.getState().subjects
  };
}

export default class Application extends React.Component{

  constructor(props) {
    super(props);
    this.state = getSubjectsState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    SubjectsStore.listen(this._onChange);
    SubjectsActions.fetchSubjects();
  }

  componentWillUnmount() {
    SubjectsStore.unlisten(this._onChange);
  }

  render() {
    const rest = !this.state.subjects ? '' : (
      <ul>
        {this.state.subjects.map((subject) => {
          return (
            <li>{subject.name}</li>
          );
        })}
      </ul>
    );

    return (
      <div>
        <header>
          <h1>
            <Link to="home">Reflech.is</Link>
          </h1>
        </header>

        <section className="Page">
          <RouteHandler/>
        </section>

        {rest}
      </div>
    );
  }

  _onChange() {
    this.setState(getSubjectsState());
  }
};
