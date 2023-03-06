const getData = new Promise((resolve, reject) => {
    // resolve(56454);
    reject('No data available')
})

// getData.then(data => console.log(data + 22));
getData
    .then(data => console.log(data + 22))
    .catch(err => console.log('ERR: ', err))