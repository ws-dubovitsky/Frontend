
// setup file
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

global.shallow = Enzyme.shallow;
global.render = Enzyme.render;
global.mount = Enzyme.mount;
global.toJson = toJson;

Enzyme.configure({ adapter: new Adapter() });