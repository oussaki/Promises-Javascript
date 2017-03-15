var promise = new Promise((resolve, reject) => {

    setTimeout(function () {
        resolve("Oussaki"); //Yay! Everything went well!
    }, 450);

});

promise.then((value) => {
    value = "Hello " + value
    return value
})

