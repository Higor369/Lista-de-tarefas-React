// sempre usar p thunk para acessar o estado direto do actionCreate



import axios from 'axios'
const url = 'http://localhost:3009/api/todos'
export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${url}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

// export const add = (description) => {
//     const request = axios.post(url, { description})

//     return[{
//         type: 'TODO_ADDED',
//         payload: request
//     }, search()]
// } com o mult

export const add = (description) => {
    return disparch => {
        axios.post(url, { description})
        .then(resp => disparch(clear()))
        .then(resp => disparch(search()))
    } // com thunk

}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${url}/${todo._id}`, {...todo, done: true})
        .then( resp => dispatch({
            type: 'TODO_MARKED_AS_DONE',
            payload: resp.data
        }))
        .then(resp => dispatch(search()))
    }

}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}