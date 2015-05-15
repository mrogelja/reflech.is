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
      .then((subjects) => {
        this.actions.updateSubjects(subjects);
      })
      .catch((error) => {
        this.actions.subjectsFailed(error);
      });
  }

  updateSubjects(subjects) {
    this.dispatch(subjects);
  }

  fetchSubjects() {
    this.dispatch();

    SubjectsFetcher.fetch()
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
}

export default alt.createActions(SubjectsActions);
