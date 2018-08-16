require('../css/app.scss');
console.log('hello world 1');

import {MDCRipple} from '@material/ripple';


import {MDCTopAppBar} from '@material/top-app-bar/index';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

import {MDCTemporaryDrawer} from '@material/drawer';
var drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));

document.querySelector('.demo-menu').addEventListener('click', function() { drawer.open = true;});



console.log('hello world 2');
