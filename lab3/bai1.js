function checkDogs(dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.slice(0,1);
    dogsJuliaCorrected.slice(-2);
    

    const dogs = dogsJuliaCorrect.concat(dogsKate);
    console.log(dogs);

    dogs.forEach(function (dog,i) {
        if (dog>=3){
            console.log('Dog number ${i+1} is an adult, and is ${dogs} years old');
        } else {
            console.log('Dog number ${i+1} is still a puppy ');
        }
    });
};
  