import React from 'react';
import SubjectListItem from './SubjectsListItem.react.js';

export default class SubjectsList extends React.Component{
  constructor(props, context) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  render (){
    return (
      <div className="SubjectsList row">
        {this.props.subjects.map((subject) => {
          return <SubjectListItem subject={ subject } />;
        })}
      </div>
    );
  }

  _onClick (e){
    console.log(arguments);
  }
};
