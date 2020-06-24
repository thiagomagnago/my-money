import { useEffect, useReducer } from 'react'
import axios from 'axios';


// Pure function
const reducer = (state, action) => {
  console.log('state', state, 'action', action)

  if (action.type === 'REQUEST') {
    return {
      ...state,
      loading: true
    }
  }
  if (action.type === 'SUCCESS') {
    return {
      ...state,
      loading: false,
      data: action.data
    }
  }
  return state
}

const useDelete = () => {
    const [data, dispatch] = useReducer(reducer, {
        loading: true,
        data: {}
    })

    const remove = url => {
        dispatch({ type: 'REQUEST' })
        axios
            .delete(url)
            .then(res => {
                dispatch({ type: 'SUCCESS' })
            })
    }

    return [data, remove]
}

export default useDelete