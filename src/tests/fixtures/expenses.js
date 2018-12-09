import moment from 'moment';

export default [ {
  id: '1',
  description: 'Mobile',
  note: '',
  createdAt: moment().add(1, 'year'),
  amount: 1000
},
{
  id: '2',
  description: 'Pen',
  note: '',
  createdAt: 0,
  amount: 500
},{
  id: '3',
  description: 'Headphone',
  note: '',
  createdAt: moment().subtract(1, 'month'),
  amount: 2000
}]