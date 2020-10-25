let selectStoreName = "서울 롭스 강남점";

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

}).fail((xhr, data) => {     // HTTP 요청 실패 시, 오류와 상태에 관한 정보가 fail() 메소드로 전달
    alert('실패!')
}).always((xhr, data) => {   // HTTP 요청의 성공여부와는 상관없이 언제나 always()메소드 실행
    //alert('항상!')
})