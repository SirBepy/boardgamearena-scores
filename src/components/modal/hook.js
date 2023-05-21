import React from 'react'

const ModalContext = React.createContext()

const ACTION_TYPES = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
}

const modalReducer = (state, action) => {
  switch (action.type) {
  case ACTION_TYPES.OPEN_MODAL: {
    return {
      ...state,
      isOpen: true,
      type: action.payload.type,
      title: action.payload.title,
      data: action.payload.data,
    }
  }
  case ACTION_TYPES.CLOSE_MODAL: {
    return {
      ...state,
      isOpen: initialState.status,
      type: initialState.type,
      title: initialState.title,
      data: initialState.data,
    }
  }

  default:
    throw new Error(`Action is not supported: ${action.type}`)
  }
}

const initialState = {
  isOpen: false,
  title: '',
  type: null,
  data: null,
}

export const ModalProvider = (props) => {
  const [state, dispatch] = React.useReducer(modalReducer, initialState)

  const value = React.useMemo(() => ({ state, dispatch }), [state])

  return <ModalContext.Provider value={value} {...props} />
}

export const useModalContext = () => {
  const context = React.useContext(ModalContext)

  if (!context) {
    throw new Error('useModalContext must be used inside a ModalProvider')
  }

  const { state, dispatch } = context
  const { isOpen, type, data, title } = state

  const open = (data) => {
    dispatch({ type: ACTION_TYPES.OPEN_MODAL, payload: data })
  }

  const close = () => {
    dispatch({ type: ACTION_TYPES.CLOSE_MODAL })
  }

  return { open, close, isOpen, type, data, title }
}
