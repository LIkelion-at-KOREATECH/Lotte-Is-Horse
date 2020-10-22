let selectStoreName = '롭스 건대점'

fetch('http://127.0.0.1:8000/api/store?name=' + selectStoreName)
    .then(res => res.json())
    .then(res => {
        // data를 응답 받은 후의 로직
        let selectStoreID = res[0]['id'];
        
        fetch('http://127.0.0.1:8000/api/sell?store=' + selectStoreID)
            .then(res => res.json())
            .then(res => {
                let sellProductID = res[0]['id'];
                
                
                $("#product-list").append(`
                <div class="col-sm-6 item">
                    <div class="row">
                        <div class="col-md-12 col-lg-5">
                                <img class="img-fluid" src="` + noImage + `">
                        </div>
                        <div class="col">
                            <p class="description" style="font-size: 16px;"><strong style="margin-right: 5px;">{{ p.brand }}</strong>{{ p.name }}</p>\
                            <span style="font-size: 20px;"><strong>스트롱</strong></span><span>원</span>\
                        </div>
                        <form action="/detail" method="get">
                            <input class="d-none" type="number" name="productID" value={{ p.id }} />
                            <input class="d-none" type="number" name="storeID" value=1 />
                            <button class="stretched-link" type="submit" style="opacity: 0;">
                        </form>
                    </div>
                </div>
                `).trigger("create");
        });
    });