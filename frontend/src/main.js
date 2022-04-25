import {Router} from './router.js'
import {defaultView, errorView, infoView} from '/views.js'

const message = {
    'about': {"message": "Bob's Jobs is a revolution in career planning brought to you by Bob Bobalooba himself!"},
    'help': {"message": "Be sure to he honest in your application!!"}
} 

const router = new Router(errorView)

router.get('/', () =>{
    defaultView('main');
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

window.onload = redraw;

window.onload = () => {
    document.getElementById('main').innerHTML = "<p>Bob will have some jobs here</p>"
}