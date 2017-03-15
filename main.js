var promise = new Promise((resolve, reject) => {

    setTimeout(function () {
        resolve("Oussaki"); //Yay! Everything went well!
    }, 800);

});

promise.then((value) => {
    value = "Hello {" + value+ "}"
    return value
})

