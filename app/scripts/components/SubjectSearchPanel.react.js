import React from 'react';
import {Input, Glyphicon} from 'react-bootstrap';
import SubjectsList from './SubjectsList.react.js';
import SubjetcsActions from '../actions/SubjectsActions.js';

export default class SubjectSearchPanel extends React.Component{
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    this.refs.input.getInputDOMNode().focus();
  }

  render(){
    return (
    <div className="CentralBox">
      <h2>Rechercher un sujet</h2>

      <Input type='text' onChange={this._onChange} ref="input" placeholder="Chercher un sujet existant." addonAfter={<Glyphicon glyph='search' />}/>

      <SubjectsList subjects={this.props.subjects} />
    </div>
    );
  }

  _onChange(e){
    SubjetcsActions.fetchSubjects(this.refs.input.getValue());
  }
};
