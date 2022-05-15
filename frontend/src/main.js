/* JS Main code for the COMP2110 Bob's Jobs Board */
/* Author: Jerick Eli Dadios 46591680 */

import { Model } from './model.js'
import {Router} from './router.js'
import {defaultView, errorView, infoView} from '/views.js'

/* instantiates the messages that are displayed on the about and help pages */
const message = {
    'about': {"message": "Bob's Jobs is a revolution in career planning brought to you by Bob Bobalooba himself!"},
    'help': {"message": "Be sure to he honest in your application!!"}
} 

const router = new Router(errorView)

router.get('/', () =>{
    defaultView('main', Model.DATA.jobList);
})

router.get('/about', () =>{
    infoView('main', message.about);
})

router.get('/help', () =>{
    infoView('main', message.help);
})

const redraw = () => {
    router.route();
}

window.addEventListener('updateModel', redraw);

window.onload = Model.loadData