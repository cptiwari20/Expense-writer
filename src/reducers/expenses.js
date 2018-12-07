export default ( state = [], action) =>{
  switch (action.type){
    case 'ADD_EXPENSE':
      return [ ...state, action.payload ];
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if(expense.id === action.payload.id){
          return {
            ...expense,
            ...action.payload.updates
          };
        }else{
          return expense;
        }
      })
    case 'DELETE_EXPENSE': 
      return state.filter(({id}) => id !== action.id);
    default:
      return state;
  }
};