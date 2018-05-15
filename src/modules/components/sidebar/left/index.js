export const SET_VISIBLE = 'sidebar/SET_VISIBLE'
export const SET_ACTIVE_ITEM = 'sidebar/SET_ACTIVE_ITEM'

const initialState = {
  visible: false,
  activeItem:''

}

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_VISIBLE:
    return {
      ...state,
      visible: action.visible
    }
  case SET_ACTIVE_ITEM:
    return {
      ...state,
      activeItem: action.activeItem
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


export const setVisible = (visible) => {
  return dispatch => {
    dispatch({
      type: SET_VISIBLE,
      visible: visible
    })
  }
}

export const setActiveItem = (activeItem) => {
  return dispatch => {
    dispatch({
      type: SET_ACTIVE_ITEM,
      activeItem: activeItem
    })
  }
}
