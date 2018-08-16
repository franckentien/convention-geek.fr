require('../css/app.scss');
console.log('hello world 1');

import {MDCRipple} from '@material/ripple';



// import {MDCTemporaryDrawer} from '@material/drawer';
// const drawer = new MDCPersistentDrawer(document.querySelector('.mdc-drawer--persistent'));
// document.querySelector('.demo-menu').addEventListener('click', () => drawer.open = !drawer.open);

import {MDCTemporaryDrawer} from '@material/drawer';
var drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));

document.querySelector('.demo-menu').addEventListener('click', function() { drawer.open = true;});
// drawerEl.addEventListener('MDCTemporaryDrawer:open', function() {
//     console.log('Received MDCTemporaryDrawer:open');
// });
// drawerEl.addEventListener('MDCTemporaryDrawer:close', function() {
//     console.log('Received MDCTemporaryDrawer:close');
// });

console.log('hello world 2');
