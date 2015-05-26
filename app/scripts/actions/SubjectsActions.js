import alt from "../alt.js";
import SubjectsFetcher from "../utils/SubjectsFetcher.js";

class SubjectsActions {
  constructor() {
    this.generateActions(
      'addLinkToSubject'
    );
  }

  createSubject(subject) {
    SubjectsFetcher.add(subject)
      .then(() => {
        this.actions.fetchSubjects();
      })
      .catch((error) => {
        this.actions.subjectsFailed(error);
      });
  }

  updateSubjects(subjects) {
    this.dispatch(subjects);
  }

  fetchSubjects(filter) {
    SubjectsFetcher.fetch(filter)
      .then((subjects) => {
        this.actions.updateSubjects(subjects);
      })
      .catch((error) => {
        this.actions.subjectsFailed(error);
      });
  }

  fetchSubjectsFailed() {
    this.dispatch(error);
  }

  selectSubject(subject) {
    this.dispatch(subject);
  }
}

export default alt.createActions(SubjectsActions);
