import moment from 'moment';

export default [ {
  id: '1',
  description: 'Mobile',
  note: '',
  createdAt: moment(0).add(4, 'days').valueOf(),
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
  createdAt: moment(0).subtract(5, 'days').valueOf(),
  amount: 2000
}]