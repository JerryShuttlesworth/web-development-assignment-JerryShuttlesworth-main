const infoTemplate = Handlebars.compile(`
<div class = info>
    <p> {{'message'}}</p>
    </div>`)

export const infoView = (targetid, info) => {
    const list = infoTemplate(info);
    const target = document.getElementById(targetid);
    target.innerHTML = list;
}    

export const defaultView = (targetid) => {
    const target = document.getElementById(targetid);
    target.innerHTML = "<p> Hoyoverse has given me Ayaya Drip </p>"
}

export const errorView = (targetid) => {
    const target = document.getElementById('main');
    target.innerHTML = "<p> page not found </p>"
}
