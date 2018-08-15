require('../css/app.scss');

import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCTab} from '@material/tab';
import {MDCTabBar} from '@material/tab-bar';




const ripple = new MDCRipple(document.querySelector('.foo-button'));
const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const tab = new MDCTab(document.querySelector('.mdc-tab'));



const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

import {MDCToolbar} from '@material/toolbar';

const toolbar = new MDCToolbar(document.querySelector('.mdc-toolbar'));

import {MDCPersistentDrawer} from '@material/drawer';
const drawer = new MDCPersistentDrawer(document.querySelector('.mdc-drawer--persistent'));
document.querySelector('.menu').addEventListener('click', () => drawer.open = true);

