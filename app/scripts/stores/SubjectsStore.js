import alt from "../alt.js";
import SubjectsActions from '../actions/SubjectsActions.js';

class SubjectsStore {
  constructor() {
    this.subjects = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateSubjects: SubjectsActions.UPDATE_SUBJECTS,
      handleFetchSubjects: SubjectsActions.FETCH_SUBJECTS,
      handleFetchSubjectsFailed: SubjectsActions.FETCH_SUBJECTS_FAILED
    })
  }

  handleUpdateSubjects(subjects) {
    this.subjects = subjects;
  }

  handleFetchSubjects(subjects) {
    this.subjects = subjects;
  }

  handleFetchSubjectsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(SubjectsStore, 'SubjectsStore');
