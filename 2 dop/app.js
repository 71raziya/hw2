const users = new Promise((resolve,reject) => {
    setTimeout(() => {
        const mistake = true
        if(mistake){
            const userZero = {
                name: 'Zuura',
                surname: 'Joldoshbaeva',
                age: 23,
            };
            console.log(userZero);
            resolve(userZero);

            
            const userFirst = {
                name: 'Kanat',
                surname: 'Tashtemirov',
                age: 18,
            };
            console.log(userFirst);
            resolve(userFirst);


            const userSecond = {
                name: 'Alina',
                surname: 'Kushtarbekova',
                age: 7,
            };
            console.log(userSecond);
            resolve(userSecond);
        }else{
            reject('ERROR');
        }
    }, 3000);
}).then(() => {
    const general = {
        guantity: 3,
        girls: 2,
        boys: 1,
    };
     console.log('что да как',general);
    // console.log('конец')
}).catch((error) => {
    setTimeout(() => {
        console.log('try again',error)
    },3000);
}).finally(() => {
    console.log('end');
});



