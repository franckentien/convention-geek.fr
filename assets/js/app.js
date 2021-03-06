require('../css/app.scss');

import {MDCTemporaryDrawer} from '@material/drawer';
import {MDCDialog} from '@material/dialog';
import {MDCTabBar} from '@material/tab-bar';
import {MDCSnackbar} from '@material/snackbar';

//MDCTemporaryDrawer

var drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.demo-menu').addEventListener('click', function() { drawer.open = true;});

//MDCTabBar
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

//In each Page
//tabBar.activateTab(2);

var dialogDom = document.querySelector('#remove-account-dialog');

if(dialogDom !== null){
    var dialog = new MDCDialog(dialogDom);

    dialog.listen('MDCDialog:accept', function() {

        window.location.href = document.querySelector('#remove-account-dialog-accept').value;
    });

    document.querySelector('#remove-account-dialog-button').addEventListener('click', function (evt) {
        dialog.lastFocusedTarget = evt.target;
        dialog.show();
    });
}

var snackbarDom = document.querySelector('.mdc-snackbar');

if(snackbarDom !== null){

    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));

    const dataObj = {
        message: document.querySelector('.mdc-snackbar__message').innerHTML,
    };

    snackbar.show(dataObj);

}


import autoInit from '@material/auto-init';
import {MDCTextField} from '@material/textfield';
import {MDCSelect} from '@material/select'
autoInit.register('MDCTextField', MDCTextField);
autoInit.register('MDCSelect', MDCSelect);
autoInit();

var cssRuleName =
    "color: #780a0a;" +
    "font-size: 60px;" +
    "font-weight: bold;" +
    "text-shadow: 1px 1px 5px black;";
console.log("%cConvention Geek", cssRuleName);
