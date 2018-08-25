require('../css/app.scss');
console.log('hello world 1');


//MDCTemporaryDrawer
import {MDCTemporaryDrawer} from '@material/drawer';
var drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.demo-menu').addEventListener('click', function() { drawer.open = true;});

//MDCTabBar
import {MDCTabBar} from '@material/tab-bar';
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

//In each Page
//tabBar.activateTab(2);

import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = checkbox;

import autoInit from '@material/auto-init';
import {MDCTextField} from '@material/textfield';
autoInit.register('MDCTextField', MDCTextField);
autoInit();

//Test JS
console.log('hello world 2');

