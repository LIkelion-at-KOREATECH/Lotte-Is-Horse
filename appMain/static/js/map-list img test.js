var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.497909, 127.027454),//33.450701, 126.570667), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨 
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

let nowMarker = new kakao.maps.Marker({ map: map });
let nowInfoWindow = new kakao.maps.InfoWindow({
    content: '<div style="width:150px;text-align:center;padding:6px 0;">주변 롭스를 확인해보세요!</div>'
});
let lohbsMarkers = []

// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {

    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function (position) {

        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도

        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

        // 마커와 인포윈도우를 표시합니다
        nowMarker = displayMarker(locPosition, message);

    });

} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

    var locPosition = new kakao.maps.LatLng(37.497909, 127.027454), // 강남역 주소
        message = '현재 위치찾기 기능이 불안정합니다.'

    nowMarker = displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition
    });

    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable
    });

    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);

    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);

    return marker;
}

// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [{
        title: '경기 롭스 NC고잔점',
        latlng: new kakao.maps.LatLng(37.314204, 126.831064)
    },
    {
        title: '서울 롭스 가로수길점',
        latlng: new kakao.maps.LatLng(37.518537, 127.023150)
    },
    {
        title: '서울 롭스 강남엔터점',
        latlng: new kakao.maps.LatLng(37.504978, 127.004918)
    },
    {
        title: '서울 롭스 강남점',
        latlng: new kakao.maps.LatLng(37.502742, 127.026476)
    },
    {
        title: '서울 롭스 건대로데오점',
        latlng: new kakao.maps.LatLng(37.539751, 127.069159)
    },
    {
        title: '서울 롭스 건대점',
        latlng: new kakao.maps.LatLng(37.541231, 127.067963)
    },
    {
        title: '부산 롭스 경성대부경대역점',
        latlng: new kakao.maps.LatLng(35.136960, 129.099769)
    },
    {
        title: '부산 롭스 경성대점',
        latlng: new kakao.maps.LatLng(35.137725, 129.100395)
    },
    {
        title: '경북 롭스 경주로데오점',
        latlng: new kakao.maps.LatLng(35.844088, 129.213211)
    },
    {
        title: '경기 롭스 광명아울렛점',
        latlng: new kakao.maps.LatLng(37.424688, 126.884115)
    },
    {
        title: '부산 롭스 광복동점',
        latlng: new kakao.maps.LatLng(35.099334, 129.028816)
    },
    {
        title: '광주 롭스 광주상무점',
        latlng: new kakao.maps.LatLng(35.147502, 126.848003)
    },
    {
        title: '광주 롭스 광주수완아울렛점',
        latlng: new kakao.maps.LatLng(35.190417, 126.820989)
    },
    {
        title: '광주 롭스 광주수완점',
        latlng: new kakao.maps.LatLng(35.191215, 126.824435)
    },
    {
        title: '서울 롭스 구로디지털단지점',
        latlng: new kakao.maps.LatLng(37.483669, 126.899640)
    },
    {
        title: '서울 롭스 구로점',
        latlng: new kakao.maps.LatLng(37.484179, 126.903000)
    },
    {
        title: '경기 롭스 구리점',
        latlng: new kakao.maps.LatLng(37.602218, 127.142685)
    },
    {
        title: '경북 롭스 구미점',
        latlng: new kakao.maps.LatLng(36.129217, 128.333402)
    },
    {
        title: '전북 롭스 군산수송점',
        latlng: new kakao.maps.LatLng(35.966871, 126.716178)
    },
    {
        title: '전북 롭스 군산아울렛점',
        latlng: new kakao.maps.LatLng(35.976049, 126.739353)
    },
    {
        title: '경기 롭스 기흥아울렛점',
        latlng: new kakao.maps.LatLng(37.225157, 127.119562)
    },
    {
        title: '경남 롭스 김해아울렛점',
        latlng: new kakao.maps.LatLng(35.185313, 128.829601)
    },
    {
        title: '전남 롭스 남악아울렛점',
        latlng: new kakao.maps.LatLng(34.803630, 126.465411)
    },
    {
        title: '서울 롭스 노원시네마점',
        latlng: new kakao.maps.LatLng(37.655253, 127.061306)
    },
    {
        title: '부산 롭스 뉴코아아울렛괴정점',
        latlng: new kakao.maps.LatLng(35.099112, 128.994130)
    },
    {
        title: '서울 롭스 당산점',
        latlng: new kakao.maps.LatLng(37.534526, 126.901407)
    },
    {
        title: '충남 롭스 당진점',
        latlng: new kakao.maps.LatLng(36.894944, 126.631444)
    },
    {
        title: '대구 롭스 대구동성로점',
        latlng: new kakao.maps.LatLng(35.868502, 128.596541)
    },
    {
        title: '대구 롭스 대구상인역사점',
        latlng: new kakao.maps.LatLng(35.819119, 128.537957)
    },
    {
        title: '대구 롭스 대구상인점',
        latlng: new kakao.maps.LatLng(35.818352, 128.538175)
    },
    {
        title: '대전 롭스 대전세이탄방점',
        latlng: new kakao.maps.LatLng(36.347461, 127.388818)
    },
    {
        title: '대전 롭스 대전역사점',
        latlng: new kakao.maps.LatLng(36.332525, 127.434200)
    },
    {
        title: '대전 롭스 대전은행동점',
        latlng: new kakao.maps.LatLng(36.328533, 127.428086)
    },
    {
        title: '대구 롭스 동대구역사점',
        latlng: new kakao.maps.LatLng(35.877053, 128.627081)
    },
    {
        title: '경기 롭스 동두천점',
        latlng: new kakao.maps.LatLng(37.892217, 127.053055)
    },
    {
        title: '부산 롭스 롯데동부산아울렛점',
        latlng: new kakao.maps.LatLng(35.192864, 129.212603)
    },
    {
        title: '경기 롭스 롯데마트경기양평점',
        latlng: new kakao.maps.LatLng(37.489631, 127.502618)
    },
    {
        title: '부산 롭스 롯데마트광복점',
        latlng: new kakao.maps.LatLng(35.097540, 129.036426)
    },
    {
        title: '경북 롭스 롯데마트구미점',
        latlng: new kakao.maps.LatLng(36.113924, 128.365323)
    },
    {
        title: '서울 롭스 롯데마트서울역점',
        latlng: new kakao.maps.LatLng(37.556004, 126.970448)
    },
    {
        title: '서울 롭스 롯데마트잠실점',
        latlng: new kakao.maps.LatLng(37.511688, 127.096355)
    },
    {
        title: '대구 롭스 롯데마트칠성점',
        latlng: new kakao.maps.LatLng(35.884016, 128.591030)
    },
    {
        title: '경기 롭스 롯데몰수지점',
        latlng: new kakao.maps.LatLng(37.312845, 127.081213)
    },
    {
        title: '서울 롭스 롯데몰은평점',
        latlng: new kakao.maps.LatLng(37.637667, 126.917769)
    },
    {
        title: '인천 롭스 롯데백화점 인천터미널점',
        latlng: new kakao.maps.LatLng(37.442512, 126.701321)
    },
    {
        title: '경기 롭스 롯데슈퍼시흥은행점',
        latlng: new kakao.maps.LatLng(37.432143, 126.793739)
    },
    {
        title: '강원 롭스 롯데슈퍼원주점',
        latlng: new kakao.maps.LatLng(37.341522, 127.954791)
    },
    {
        title: '전남 롭스 목포상동점',
        latlng: new kakao.maps.LatLng(34.801953, 126.424855)
    },
    {
        title: '서울 롭스 미아점',
        latlng: new kakao.maps.LatLng(37.613119, 127.029592)
    },
    {
        title: '대구 롭스 반월당점',
        latlng: new kakao.maps.LatLng(35.864700, 128.593323)
    },
    {
        title: '경기 롭스 범계점',
        latlng: new kakao.maps.LatLng(37.390983, 126.953077)
    },
    {
        title: '대구 롭스 범어역사점',
        latlng: new kakao.maps.LatLng(35.859149, 128.624549)
    },
    {
        title: '부산 롭스 부산대2호점',
        latlng: new kakao.maps.LatLng(35.231229, 129.085668)
    },
    {
        title: '부산 롭스 부산대점',
        latlng: new kakao.maps.LatLng(35.231009, 129.088150)
    },
    {
        title: '충남 롭스 부여아울렛점',
        latlng: new kakao.maps.LatLng(36.307245, 126.902080)
    },
    {
        title: '인천 롭스 부평점',
        latlng: new kakao.maps.LatLng(37.492630, 126.725209)
    },
    {
        title: '부산 롭스 서면부전2호점',
        latlng: new kakao.maps.LatLng(35.153141, 129.059722)
    },
    {
        title: '부산 롭스 서면부전점',
        latlng: new kakao.maps.LatLng(35.155260, 129.061872)
    },
    {
        title: '부산 롭스 서면역사점',
        latlng: new kakao.maps.LatLng(35.157849, 129.060036)
    },
    {
        title: '부산 롭스 서면역점',
        latlng: new kakao.maps.LatLng(35.157035, 129.058212)
    },
    {
        title: '서울 롭스 선릉점',
        latlng: new kakao.maps.LatLng(37.504618, 127.050373)
    },
    {
        title: '부산 롭스 센텀시티점',
        latlng: new kakao.maps.LatLng(35.170398, 129.132390)
    },
    {
        title: '경기 롭스 수내점',
        latlng: new kakao.maps.LatLng(37.377776, 127.113800)
    },
    {
        title: '경기 롭스 수원몰점',
        latlng: new kakao.maps.LatLng(37.264235, 126.996808)
    },
    {
        title: '경기 롭스 수원역사점',
        latlng: new kakao.maps.LatLng(37.265739, 127.000310)
    },
    {
        title: '서울 롭스 수유점',
        latlng: new kakao.maps.LatLng(37.638072, 127.026140)
    },
    {
        title: '서울 롭스 신논현점',
        latlng: new kakao.maps.LatLng(37.507101, 127.023656)
    },
    {
        title: '서울 롭스 신천점',
        latlng: new kakao.maps.LatLng(37.511398, 127.083154)
    },
    {
        title: '경기 롭스 안산중앙점',
        latlng: new kakao.maps.LatLng(37.318431, 126.837562)
    },
    {
        title: '서울 롭스 안암점',
        latlng: new kakao.maps.LatLng(37.585943, 127.029199)
    },
    {
        title: '경기 롭스 안양엔터점',
        latlng: new kakao.maps.LatLng(37.401677, 126.922907)
    },
    {
        title: '경남 롭스 양산점',
        latlng: new kakao.maps.LatLng(35.336174, 129.027592)
    },
    {
        title: '서울 롭스 염창점',
        latlng: new kakao.maps.LatLng(37.546631, 126.874825)
    },
    {
        title: '서울 롭스 영등포역사',
        latlng: new kakao.maps.LatLng(37.515461, 126.907527)
    },
    {
        title: '서울 롭스 영플라자명동점',
        latlng: new kakao.maps.LatLng(37.563518, 126.981583)
    },
    {
        title: '경기 롭스 오산점',
        latlng: new kakao.maps.LatLng(37.145570, 127.069442)
    },
    {
        title: '서울 롭스 왕십리역사점',
        latlng: new kakao.maps.LatLng(37.561395, 127.038535)
    },
    {
        title: '서울 롭스 용산역점',
        latlng: new kakao.maps.LatLng(37.529770, 126.964664)
    },
    {
        title: '경기 롭스 용인역북점',
        latlng: new kakao.maps.LatLng(37.236128, 127.188715)
    },
    {
        title: '울산 롭스 울산삼산점',
        latlng: new kakao.maps.LatLng(35.540177, 129.337441)
    },
    {
        title: '울산 롭스 울산성남점',
        latlng: new kakao.maps.LatLng(35.553632, 129.319602)
    },
    {
        title: '울산 롭스 울산업스퀘어점',
        latlng: new kakao.maps.LatLng(35.541530, 129.338868)
    },
    {
        title: '서울 롭스 월드몰1호점',
        latlng: new kakao.maps.LatLng(37.513814, 127.105029)
    },
    {
        title: '서울 롭스 월드몰2호점',
        latlng: new kakao.maps.LatLng(37.513561, 127.105048)
    },
    {
        title: '경기 롭스 웨스턴돔점',
        latlng: new kakao.maps.LatLng(37.655331, 126.772298)
    },
    {
        title: '서울 롭스 을지로입구역사점',
        latlng: new kakao.maps.LatLng(37.566076, 126.982024)
    },
    {
        title: '경기 롭스 의정부점',
        latlng: new kakao.maps.LatLng(37.740303, 127.049174)
    },
    {
        title: '서울 롭스 이대점',
        latlng: new kakao.maps.LatLng(37.558956, 126.945145)
    },
    {
        title: '서울 롭스 이수점',
        latlng: new kakao.maps.LatLng(37.487209, 126.981920)
    },
    {
        title: '대구 롭스 이시아폴리스 아울렛점',
        latlng: new kakao.maps.LatLng(35.921652, 128.637383)
    },
    {
        title: '경기 롭스 이천아울렛2호점',
        latlng: new kakao.maps.LatLng(37.232588, 127.398694)
    },
    {
        title: '경기 롭스 이천점',
        latlng: new kakao.maps.LatLng(37.280451, 127.444318)
    },
    {
        title: '서울 롭스 이태원점',
        latlng: new kakao.maps.LatLng(37.534845, 126.993987)
    },
    {
        title: '전북 롭스 익산영등점',
        latlng: new kakao.maps.LatLng(35.958258, 126.973420)
    },
    {
        title: '경기 롭스 인계점',
        latlng: new kakao.maps.LatLng(37.263068, 127.032069)
    },
    {
        title: '서울 롭스 잠실점',
        latlng: new kakao.maps.LatLng(37.512192, 127.099435)
    },
    {
        title: '서울 롭스 잠실캐슬점',
        latlng: new kakao.maps.LatLng(37.514295, 127.100476)
    },
    {
        title: '광주 롭스 전남대점',
        latlng: new kakao.maps.LatLng(35.175601, 126.913051)
    },
    {
        title: '전북 롭스 전주객사점',
        latlng: new kakao.maps.LatLng(35.819466, 127.146194)
    },
    {
        title: '경기 롭스 정자역점',
        latlng: new kakao.maps.LatLng(37.365424, 127.106827)
    },
    {
        title: '경남 롭스 진주몰점',
        latlng: new kakao.maps.LatLng(35.180338, 128.139812)
    },
    {
        title: '경남 롭스 진주점',
        latlng: new kakao.maps.LatLng(35.194651, 128.083223)
    },
    {
        title: '경남 롭스 창원상남점',
        latlng: new kakao.maps.LatLng(35.223147, 128.685027)
    },
    {
        title: '충남 롭스 천안터미널점',
        latlng: new kakao.maps.LatLng(36.820507, 127.156388)
    },
    {
        title: '충북 롭스 청주성안길점',
        latlng: new kakao.maps.LatLng(36.635848, 127.488433)
    },
    {
        title: '서울 롭스 코엑스몰점',
        latlng: new kakao.maps.LatLng(37.512446, 127.058876)
    },
    {
        title: '경북 롭스 포항점',
        latlng: new kakao.maps.LatLng(36.038012, 129.364650)
    },
    {
        title: '서울 롭스 한티역점',
        latlng: new kakao.maps.LatLng(37.498210, 127.053823)
    },
    {
        title: '서울 롭스 홍대역점',
        latlng: new kakao.maps.LatLng(37.556101, 126.923481)
    },
    {
        title: '서울 롭스 홍대점',
        latlng: new kakao.maps.LatLng(37.556988, 126.924519)
    },
    {
        title: '서울 롭스 화곡점',
        latlng: new kakao.maps.LatLng(37.541794, 126.839153)
    },
    {
        title: '경기 롭스 화정점',
        latlng: new kakao.maps.LatLng(37.633019, 126.832630)
    }


];

var imageSrc ='static/img/gps.jpg', // 마커이미지의 주소입니다    // https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png 
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {
        offset: new kakao.maps.Point(27, 69)
    }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

for (var i = 0; i < positions.length; i++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        image: markerImage,
        position: positions[i].latlng, // 마커의 위치
        title: positions[i].title
    });

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: "<div>" + positions[i].title + "</div>" // 인포윈도우에 표시할 내용
    });

    lohbsMarkers.push(marker);

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow)); // -> 마우스 올렸을 때
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow)); // -> 마우스 밖에 있을 때
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function () {
        infowindow.open(map, marker);
    };
}

//  클릭을 하게 하고, 지점 위치 연동
function makeClickListener(map, marker, infowindow, data) {
    return function () {
        let selectStoreName = data;

        $("#delay-sign").removeClass("d-none");
        $.ajax({
            //url: home,
            method: "POST",          // HTTP 요청 방식(GET, POST)
            dataType: "json",           // 서버에서 보내줄 데이터의 타입(default값으로 json으로 되어있다.)
            data: {'storeName':selectStoreName, 'csrfmiddlewaretoken': csrf_token}   // HTTP 요청과 함께 서버로 보낼 데이터
        }).done(data => {    // HTTP 요청 성공 시, 요청한 데이터가 done() 메소드로 전달
            //alert('성공!')
            //console.log(data.products)
            $("#product-list").empty();
            data.products.forEach((product, idx) => {
                //console.log(product)
                let mainImage;
                if (!product.mainImage) mainImage = noImage;
                else mainImage = product.mainImage;

                let html = `
                <div class="col-sm-6 item">
                    <div class="row">
                        <div class="col-md-12 col-lg-5">
                            <img class="img-fluid" src="`+mainImage+`">
                        </div>
                    <div class="col">
                        <p class="description" style="font-size: 16px;"><strong style="margin-right: 5px;">`+product.brand+`</strong>`+product.name+`</p>
                        <span style="font-size: 20px;"><strong>`+product.price+`</strong></span><span>원</span>
                    </div>
                    <form action="`+detail+`" method="get">
                    `
                // <a class="stretched-link" href="`+detail+`?product=`+product.id+`&store=`+product.store+`"></a>
                for (const key in product) {
                    html += `<div class="d-none"><label>`+key+`</label><input name="`+key+`" value="`+product[key]+`" /></div>`;
                }

                html += `<button class="stretched-link" type="submit" style="opacity: 0;"></form>`

                $("#product-list").append(html);
            });

            $("#delay-sign").addClass("d-none");
        }).fail((xhr, data) => {     // HTTP 요청 실패 시, 오류와 상태에 관한 정보가 fail() 메소드로 전달
            alert('주문한 가능한 상품이 없습니다!')
        }).always((xhr, data) => {   // HTTP 요청의 성공여부와는 상관없이 언제나 always()메소드 실행
            //alert('항상!')
        })


    };
}


// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function () {
        infowindow.close();
    };
}

// for (let item of positions) {
//     console.log(item.title, item.latlng.getLat(), item.latlng.getLng());
// }

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();


// function mapSearchFunction() {
//     var x = document.getElementById("myInput").value;
//     document.getElementById("out").innerHTML = "You wrote: " + x;
// }


// 주소로 좌표를 검색합니다
document.querySelector('#go-button').addEventListener('click', () => {
    geocoder.addressSearch(document.getElementById('myInput').value, function(result, status) {
        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {
            let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            
            nowMarker.setPosition(coords);
            nowInfoWindow.open(map, nowMarker);
            
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
            
            for (let item of lohbsMarkers) {     
                Latdis = (item.getPosition().getLat() - coords.getLat()) * 92 ;
                Lngdis = (item.getPosition().getLng() - coords.getLng()) * 114 ;
                
                cal = Math.sqrt(Latdis * Latdis + Lngdis * Lngdis) ;

                imageSrc = 'static/img/gps.jpg',   
                imageSize = new kakao.maps.Size(64, 69), 
                imageOption = {
                    offset: new kakao.maps.Point(27, 69)
                };
                var aliveMarkerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

                dieImageSrc = 'static/img/gpsDie.png',   
                dieImageSize = new kakao.maps.Size(64, 69), 
                dieImageOption = {
                    offset: new kakao.maps.Point(27, 69)
                };
                var dieMarkerImage = new kakao.maps.MarkerImage(dieImageSrc, dieImageSize, dieImageOption);

                if (cal < 3 ) {
                    item.setImage(aliveMarkerImage);
                    kakao.maps.event.removeListener(item, 'click', alertFunction());
                    kakao.maps.event.addListener(item, 'click', makeClickListener(map, marker, infowindow, item.getTitle()));
                } else {
                    item.setImage(dieMarkerImage);
                    kakao.maps.event.removeListener(item, 'click', makeClickListener(map, marker, infowindow, item.getTitle()));
                    kakao.maps.event.addListener(item, 'click', alertFunction());
                }
            }
        }
    });
});

function alertFunction() {
    return function () {
        alert('주문할 수 없는 거리의 매장입니다! 다른 매장을 선택해주세요!');
    };
}

// document.getElementById(myInput).value