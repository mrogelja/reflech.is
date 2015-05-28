require('babel-jest');

jest.dontMock('../SubjectsStore');

describe('SubjectsStore', function(){
  var alt, callback, SubjectsStore;

  beforeEach(function(){
    alt = require('../../app');
    alt.dispatcher = { register: jest.genMockFunction() };
    SubjectsStore = require('../SubjectsStore');
    callback = alt.dispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(alt.dispatcher.register.mock.calls.length).toBe(1);
  });
});
