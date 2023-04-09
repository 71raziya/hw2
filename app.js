const date = new Promise((resolve) => {
    setTimeout(() => {
        const today = {
            month: 'апрель',
            day: 10,
        };
        console.log('когда день рождение?', today);
        resolve(today);
    }, 2000);
});


date.then(() => {
    setTimeout(() => {
        const birthday = {
            month: 'апрель',
            day: 28,
        };
        console.log('через 18 дней', birthday);
        console.log('скоро наступит');
    }, 2000);
});
const jsonDate = JSON.stringify(date);
console.log(jsonDate);

const end = JSON.parse(jsonDate);
console.log(end);