const today = new Date();

const japaneseDate = today.toLocaleDateString('ja-JP',{
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

console.log(japaneseDate);