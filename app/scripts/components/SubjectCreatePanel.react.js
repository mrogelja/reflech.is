import React from 'react';
import {Input, ButtonInput, Glyphicon} from 'react-bootstrap'
import SubjectsActions from '../actions/SubjectsActions.js';

export default class SubjectCreatePanel extends React.Component{

  constructor(props) {
    super(props);
    this._submit = this._submit.bind(this);
  }

  render(){
    return (
      <div className="CentralBox">
        <h2>Créer un nouveau sujet</h2>

        <Input type='text' placeholder='Nom du sujet' ref="name"/>

        <Input type='textarea' placeholder='Description du sujet' ref="description"/>

        <ButtonInput type='submit' value='Créer' onClick={this._submit} />
      </div>
    );
  }

  _submit() {
    SubjectsActions.createSubject({
      name : this.refs.name.getValue(),
      description : this.refs.description.getValue()
    });
  }
};

