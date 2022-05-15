/* JS View code for the COMP2110 Bob's Jobs Board */
/* Author: Jerick Eli Dadios 46591680 */

const infoTemplate = Handlebars.compile(`
<div class = info>
    <p> {{'message'}}</p>
    </div>`)

export const infoView = (targetid, info) => {
    const list = infoTemplate(info);
    const target = document.getElementById(targetid);
    target.innerHTML = list;
}    

//view for the homepage
export const defaultView = (targetid, jobs) => {
    const target = document.getElementById(targetid);
    //creates handlebar for sampledata to be shown on page
const jobTemplate = Handlebars.compile(`
<div class="jobListings">
{{#each array}}
<div class="job">
<div class = "jobTitle"><a class="jobsLink" href="/#!/jobs/{{id}}">{{attributes.title}}</a></div>
<div class = "companyName">{{attributes.company.data.attributes.name}}</div>
<div class = "jobType">{{attributes.type}}</div>
<div class = "jobLocation">{{attributes.location}}</div>
</div>
{{/each}}
</div>
`)
    target.innerHTML = jobTemplate({array: jobs})
}

//view for error page cannot be found page
export const errorView = (targetid) => {
    const target = document.getElementById('main');
    target.innerHTML = "<p> page not found </p>"
}
