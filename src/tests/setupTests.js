import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dotenv from 'dotenv';

enzyme.configure({ adapter: new Adapter() });
Dotenv.configure({ env: '.env.test'})