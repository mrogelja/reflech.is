import React from 'react';
import Router from 'react-router';
import SubjectsAction from '../actions/SubjectsActions.js';

export default class SubjectsListItem extends React.Component{
  constructor(props, context) {
    super(props);
    this.router = context.router;
    this._onClick = this._onClick.bind(this);
  }

  render (){
    return (
      <div className="SubjectsList-item col-md-4" onClick={this._onClick}>
        <div className="jumbotron">
          <h2>{this.props.subject.name}</h2>
          <p>{this.props.subject.description}</p>
        </div>
      </div>
    );
  }

  _onClick (e){
    SubjectsAction.selectSubject(this.props.subject);
    this.router.transitionTo('subject', {subjectId: this.props.subject._id});
  }
};


SubjectsListItem.contextTypes = {
  router: React.PropTypes.func.isRequired
};
