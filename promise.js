const status1 = true;
console.log('Task 1');

const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(status1){
            resolve('Task 2');
        }else{
            reject('Failed');
        }
    },2000);
})

promise
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    })

console.log('Task 3');

