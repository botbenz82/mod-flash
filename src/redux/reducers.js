const initialState = {
    elements: []
  };
  
  function editorReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_ELEMENT':
        return {
          ...state,
          elements: [...state.elements, action.payload]
        };
      default:
        return state;
    }
  }
  
  export default editorReducer;
  