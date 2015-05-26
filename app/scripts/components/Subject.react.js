import React from 'react';

export default class Subject extends React.Component{
  constructor(props) {
    super(props);
  }

  render (){
    return (
      <div className="Subject jumbotron">
            <h1>{this.props.selectedSubject.name}</h1>
            <p>{this.props.selectedSubject.description}</p>
      </div>
    );
  }
};
