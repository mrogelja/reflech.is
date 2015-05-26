import alt from "../alt.js";
import SubjectsActions from '../actions/SubjectsActions.js';

class SubjectsStore {
  constructor() {
    this.subjects = [];
    this.selectedSubject = null;
    this.errorMessage = null;

    this.bindListeners({
      updateSubjects: SubjectsActions.UPDATE_SUBJECTS,
      fetchSubjects: SubjectsActions.FETCH_SUBJECTS,
      fetchSubjectsFailed: SubjectsActions.FETCH_SUBJECTS_FAILED,
      selectSubject: SubjectsActions.SELECT_SUBJECT
    })
  }

  updateSubjects(subjects) {
    this.subjects = subjects;
  }

  fetchSubjects(subjects) {
    this.subjects = subjects;
  }

  fetchSubjectsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  selectSubject(subject) {
    this.selectedSubject = subject;
  }
}

export default alt.createStore(SubjectsStore, 'SubjectsStore');
