import configureReduxMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
  addExpense,
  editExpense,
  startEditExpense,
  deleteExpense, 
  startDeleteExpense,
  startAddExpense, 
  setExpenses, 
  startSetExpense
 } from '../../actions/expenses';


import expenses from '../fixtures/expenses';
import db from '../../firebase/firebase';

const uid = 'xyzUser123';
const createMockStore = configureReduxMockStore([ thunk ]);

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({ id, description, createdAt, note, amount }) => {
    expenseData[id] = { description, createdAt, note, amount  }
  });
  db.ref(`users/${uid}/expenses`).set(expenseData).then(() => done())
})

describe('Expense ACTIONS', () => {
  
  describe('EDIT- Expense', ()=> {
    it('should return an action Type "EDIT_EXPENSE"', () => {
      const expense = expenses[0]
      const id = '123abc'
      const action = editExpense(id, expense);
      expect(action.payload).toEqual({ id, updates: expense});
      expect(action.type).toBe('EDIT_EXPENSE');
    });

    it('should update the data in firebase', (done) => {
      const store = createMockStore({ auth: {uid} });

      const id = expenses[1].id;
      const updateExpense = { description: 'Pencil', amount: 2520 };
      store.dispatch(startEditExpense(id, updateExpense)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'EDIT_EXPENSE',
          payload: { id, updates: updateExpense }
        })
        return db.ref(`users/${uid}/expenses/${id}`).once('value');
      }).then(snapshot => {
        expect(snapshot.val().description).toBe(updateExpense.description);
        expect(snapshot.val().amount).toBe(updateExpense.amount);
        done();
      });
    })

  })

  describe('ADD-Expense', () => {

    it('should return an action Type "ADD_EXPENSE"', () => {
      const expense = expenses[0]
      const action = addExpense(expense);
      expect(action.payload).toEqual({ ...expense });
      expect(action.type).toBe('ADD_EXPENSE');
    });

    it('should add expenses to database and store', (done) => {
      const store = createMockStore({ auth: {uid} });

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
      return db.ref(`users/${uid}/expenses/${actions[0].payload.id}`).once('value');

    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    })

    });

    it('should add expenses to database and store with default value', (done) => {
      const store = createMockStore({ auth: {uid} });

      const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
      };

     store.dispatch(startAddExpense()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        payload: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return db.ref(`users/${uid}/expenses/${actions[0].payload.id}`).once('value');

    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    })

    });

  });

  describe('SET EXPENSES', () => {
    it('should set Expense action object with data', () => {
      const action = setExpenses(expenses);
      expect(action.payload).toEqual(expenses);
      expect(action.type).toBe('SET_EXPENSES')
    });

    it('should fetch the data from db and send to the Set expense action creator', (done) => {
        const store = createMockStore({ auth: {uid} });

        store.dispatch(startSetExpense()).then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            payload: expenses
          });
          done();
        })
    })
  });

  describe('DELETE Expense', () => {
    it('should return an action Type "DELETE_EXPENSE" ', () => {
      const id = '123xyz'

      const action = deleteExpense({id});

      expect(action).toEqual({
        type: 'DELETE_EXPENSE',
        id
      })
    });

    it('should delete the expense from the firebase', (done) => {
      const store = createMockStore({ auth: {uid} });

      const id = expenses[2].id;

      store.dispatch(startDeleteExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'DELETE_EXPENSE',
          id
        });
        return db.ref(`users/${uid}/expenses/${id}`).once('value');
      }).then(snapshot => {
        expect(snapshot.val()).toBeFalsy();
        done();
      });
    })

  })
})