import { setAuthedUser } from './authedUser'
import { receiveUsers, saveUserAnswer, addUserQuestion } from './users'
import { receiveQuestions, saveQAnswer, addQuestion } from './questions'
import { getInitialUsers, getInitialQuestions, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'



export function handleInitialQuestions() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

const AUTHED_ID = null;

export function handleInitialUsers() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}

export function handleSaveQuestionAnswer(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestionAnswer({ authedUser, qid, answer })
            .then(() => {
                dispatch(saveQAnswer(authedUser, qid, answer))
                dispatch(saveUserAnswer(authedUser, qid, answer))
                dispatch(hideLoading())
            })
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const author = authedUser
        dispatch(showLoading())
        return saveQuestion({ optionOneText, optionTwoText, author })
            .then((poll) => {
                dispatch(addQuestion(poll))
                dispatch(addUserQuestion(authedUser, poll.id))
                dispatch(hideLoading())
            })
    }
}