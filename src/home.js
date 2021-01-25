import {Button} from './components/button/button'
import Header from './components/header/header';

import _ from 'lodash';

const button = new Button();
const header =  new Header();

header.render(_.upperFirst('home page'))
button.render();

export const hellowrld = ()=>console.log("hello world");

