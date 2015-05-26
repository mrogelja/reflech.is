import React from 'react';
import AltContainer from 'alt/AltContainer';
import Router from 'react-router';
import SubjectCreatePanel from './SubjectCreatePanel.react.js';
import SubjectSearchPanel from './SubjectSearchPanel.react.js';
import SubjectsStore from '../stores/SubjectsStore.js';
import SubjectsActions from '../actions/SubjectsActions.js';

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;


function getSubjectsState() {
  return {
    subjects: SubjectsStore.getState().subjects,
    selectedSubject: SubjectsStore.getState().selectedSubject
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
    return (
        <div>
          <header>
            <h1>
              <Link to="home">Reflech.is</Link>
            </h1>
          </header>

          <section className="Page">
            <RouteHandler subjects={this.state.subjects} selectedSubject={this.state.selectedSubject}/>
          </section>
        </div>
    );
  }

  _onChange() {
    this.setState(getSubjectsState());
  }
};
