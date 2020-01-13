import { setAuthedUser } from './authedUser'
import { getInitialUsers } from '../utils/api'
import { getInitialQuestions } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'


const AUTHED_ID = null;

export function handleInitialQuestions() {
    return (dispatch) => {
        return getInitialQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions))
            })
    }
}

export function handleInitialUsers() {
    return (dispatch) => {
        return getInitialUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}