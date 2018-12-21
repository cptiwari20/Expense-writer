import configureReduxMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, deleteExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import db from '../../firebase/firebase';

const createMockStore = configureReduxMockStore([ thunk ])

describe('Expense ACTIONS', () => {
  it('should return an action Type "DELETE_EXPENSE" ', () => {
    const id = '123xyz'
    const action = deleteExpense(id);
    expect(action).toEqual({
      type: 'DELETE_EXPENSE',
      id
    })
  });

  it('should return an action Type "EDIT_EXPENSE"', () => {
    const expense = expenses[0]
    const id = '123abc'
    const action = editExpense(id, expense);
    expect(action.payload).toEqual({ id, updates: expense});
    expect(action.type).toBe('EDIT_EXPENSE');
  })

  describe('ADD-Expense', () => {
    it('should return an action Type "ADD_EXPENSE"', () => {
      const expense = expenses[0]
      const action = addExpense(expense);
      expect(action.payload).toEqual({ ...expense });
      expect(action.type).toBe('ADD_EXPENSE');
    });

    it('should add expenses to database and store', (done) => {
      const store = createMockStore({});

      const expenseData = {
        description: 'Laptop',
        amount: '3000000',
        createdAt: '20122018',
        note: 'this is on debt'
      };

     store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        payload: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return db.ref(`expenses/${actions[0].payload.id}`).once('value');

    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    })

    })
  })

})