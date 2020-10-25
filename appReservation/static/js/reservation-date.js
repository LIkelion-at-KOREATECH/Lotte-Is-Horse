

let today = new Date();   

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월 (실제 월 값보다 1이 작기 때문에 1을 더해야 한다)
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일 (0부터 일요일)
let week = ['일', '월', '화', '수', '목', '금', '토'];
let dayString = week[day];


// document.write(year + '년 ' + month + '월 ' + date + '일 ' + dayString + '요일')

let sevenDaysAgo = new Date(year, month, date);
sevenDaysAgo.setDate(sevenDaysAgo.getDate() + 7);

$('#reservation-date').text(year + '년 ' + month + '월 ' + date + '일 ' + dayString + '요일 ~ ' + sevenDaysAgo.getFullYear() + '년 ' + sevenDaysAgo.getMonth() + '월 ' + sevenDaysAgo.getDate() + '일 ' + dayString + '요일');