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


//Test JS
console.log('hello world 2');
