// Use the "beforeRender" or "afterRender" hook
// to manipulate and control the report generation
const axios = require('axios');
const nodemailer = require('nodemailer')
var id = 54;
const https = require('https');



async function beforeRender(req, res) {

    const agent = new https.Agent({
        rejectUnauthorized: false
    });


    const sos = await axios.get(`https://localhost:3000/chart`, {
        httpsAgent: agent
    })
    console.log(sos)
    req.data.chart = {
        ...sos.data
    }

    req.data.rep = req.data.chart.repetition;
    req.data.xd = req.data.chart.locationName;
    console.log("Sin cuidado: " + req.data.rep);
    console.log("Sin cuidado: " + req.data.xd);


    const s = await axios.get(`https://localhost:3000/events`, {
        httpsAgent: agent
    })
    req.data.events = { ...req.data,
        ...s.data
    }

    const response = await axios.get('https://localhost:3000/locations', {
        httpsAgent: agent
    })
    req.data.locations = { ...req.data,
        ...response.data
    }

    const responseEventType = await axios.get('https://localhost:3000/event_types', {
        httpsAgent: agent
    })
    req.data.eventType = { ...req.data,
        ...responseEventType.data
    }

    // const responseUser = await axios.get('http://localhost:3000/users')    
    // req.data.user = { ...req.data, ...responseUser.data}
    // console.log(req.data.user)




}
let chartData;

// async function afterRender(req, res) {

//     const transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         auth: {
//             user: 'isom26@ethereal.email',
//             pass: 'sQEWpaYJug5tattpkZ'
//         }
//     });




//     await transporter.sendMail({
//         from: 'jdejohan@gmail.com',
//         to: "isom26@ethereal.email",
//         subject: 'CRUD report',
//         text: '...',
//         attachments: [{
//             filename: 'Data.pdf',
//             content: Buffer.from(res.content)
//         }],
//     })

// }