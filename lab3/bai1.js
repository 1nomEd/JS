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
checkDogs([9,16,17,18,2,5,6], [7,3,12,4,9,17,18]);