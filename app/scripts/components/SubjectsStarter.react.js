import React from 'react';
import Router from 'react-router';
import {Input, Glyphicon} from 'react-bootstrap'

var Link = Router.Link;
var Navigation = Router.Navigation;

export default class SubjectsStarter extends React.Component{
  constructor(props, context) {
    super(props);
    this.router = context.router;
    this._onSearchFocus = this._onSearchFocus.bind(this);
  }

  render (){
    const searchGlyph = <Glyphicon glyph='search' />;

    return (
      <div className="SubjectsStarter CentralBox">
        <h3>
          <Link to="create">Créer un nouveau sujet</Link>
        </h3>
        <div className="SubjectsStarter-separator Separator">
          <span className="Separator-text"> ou </span>
        </div>

        <div>
          <Input type='text' onFocus={ this._onSearchFocus } placeholder="Chercher un sujet existant." addonAfter={searchGlyph}/>
        </div>
      </div>
    );
  }

  _onSearchFocus(event){
    this.router.replaceWith('search');
  }
};

SubjectsStarter.contextTypes = {
  router: React.PropTypes.func.isRequired
};

