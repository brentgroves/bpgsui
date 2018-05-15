export const SET_STEP = 'report/SET_STEP'

const initialState = {
  step: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_STEP:
    return {
      ...state,
      step: action.step
    }
    /*
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }
*/

  default:
    return state
  }
}


export const setStep = (step) => {
  /*
    if (rptStep === 1) {
      let detail = document.getElementById('detail')
      detail.innerHTML = ''
    }
    this.setState({ rptStep: rptStep })
    */
  return dispatch => {
    dispatch({
      type: SET_STEP,
      step: step
    })
  }


  }
