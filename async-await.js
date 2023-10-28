const paymentSucess = true;
const marks = 90;

function enroll(){
    console.log('Course enrollment is in progress.');
    const promise = new Promise(function (resolve, reject){
        setTimeout(function(){
            if(paymentSucess){
                console.log('Enrollment Done!..\n\n');
                resolve('Course Enrollment Done')
            }else{
                reject('Payment failed!');
            }
        },2000);
    });
    return promise;
}

function progess(){
    console.log('Course on progress...');
    const promise = new Promise(function (resolve, reject){
        setTimeout(function(){
            if(marks >= 80){
                resolve()
            }else{
                reject('Your could not get enough marks to get the certificate');
            }
        },2000);
    });
    return promise;
}

function getCerttificate(){
    console.log('Preparing your certificate...');
    const promise = new Promise(function (resolve){
        setTimeout(function(){
            resolve('Congrats! You got the vertificate');
        },2000);
    });
    return promise;
}

// enroll()
//     .then(progess)
//     .then(getCerttificate)
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(err){
//         console.log(err)
//     })


async function course(){
    try{
        await enroll();
        await progess();
        const message = await getCerttificate();
        console.log(message);   

    }catch(err){
        console.log(err)
    }
    
}
course();