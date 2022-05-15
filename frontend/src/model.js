/* JS Model code for the COMP2110 Bob's Jobs Board */
/* Author: Jerick Eli Dadios 46591680 */

export {Model}

//creates array which contains all the info of the job listings
const Model = {
DATA: {
    jobList: [],
},
//url contains 10 job listings in descending order
    jobsUrl: 'http://localhost:1337/api/jobs?sort[0]=publishedAt%3Adesc&pagination[pageSize]=10',

    loadData: () => {
        fetch(Model.jobsUrl)
        .then((response) => {
            return response.json()
        })
        .then((data) =>{
            Model.DATA.jobList = data.data
            const event = new CustomEvent("updateModel")
            window.dispatchEvent(event)
        })
    },


}