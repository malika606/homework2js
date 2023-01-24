var str = +prompt('Введите свой возраст')

if ( str <= 18 && str > 0 ) {
    alert('Вы еще молоды. Вам нужно учиться');
} else if ( str <= 50 && str > 18 ) {
    alert('Вам нужно работать');
} else if ( str > 50 && str <=59 ) {
    alert('Вам скоро на пенсию');
} else if ( str > 59 && str <= 100 ){
    alert('Вы пенсионер');
} else {
    alert('Что-то пошло не так');
}
