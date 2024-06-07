const fs = require('fs');

const data = require('./data.js');

const addDataToServer = () => {
    data.forEach((elem) => {
        fetch('http://localhost:1400/api/products', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(elem)
        })
            .then((res) => console.log("Success"))
            .catch((err) => console.log(err))
    })
}

module.exports = addDataToServer;