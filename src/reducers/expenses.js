export default ( state = [], action) =>{
  switch (action.type){
    case 'ADD_EXPENSE':
      return [ ...state, action.payload ];
    case 'DELETE_EXPENSE': 
      return state.filter(({id}) => id !== action.id);
    default:
      return state;
  }
};