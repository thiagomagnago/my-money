import { useReducer } from "react"
import axios from "axios"

const reducer = null

const usePost = (url) => {
    const [data, dispatch] = useReducer(reducer, {
        loading: true,
        data: {}
    })

    const post = data => {
        dispatch({ type: 'REQUEST' })
        axios
            .post(url, data)
            .then(res => {
                dispatch({ type: 'SUCCESS', data: res.data })
            })
    }

    return [data, post]
}

export default usePost