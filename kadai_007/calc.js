let num =Math.floor(Math.random()*21) + 1;

if (num % 15 == 0) {
    console.log('3と5の倍数です');
}

else if (num % 5 == 0){
    console.log('5の倍数です');
    console.log(num);
}

else if (num % 3 == 0) {
    console.log('3の倍数です');
    console.log(num);
}

else {
    console.log(num);
}