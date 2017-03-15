var promise = new Promise((resolve, reject) => {

    setTimeout(function () {
        resolve("Oussaki"); //Yay! Everything went well!
    }, 800);

});

promise.then((value) => {
    value = "Welcome to the user panel Mr. {" + value+ "}"
    return value
})

