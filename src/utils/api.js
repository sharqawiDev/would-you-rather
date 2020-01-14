import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js'


export function getInitialUsers() {
  return _getUsers()
    .then(users => ({
      users
    }))
}

export function getInitialQuestions() {
  return _getQuestions()
    .then(questions => ({
      questions
    }))
}

export function saveQuestion(info) {
  return _saveQuestion(info)
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info)
}

export function timestampToDate(timestamp) {
  const date = new Date(timestamp)
  const time = date.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + date.toLocaleDateString()
}
