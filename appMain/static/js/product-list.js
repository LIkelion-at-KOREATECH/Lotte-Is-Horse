let selectStoreName = '롭스 건대점'

fetch('http://127.0.0.1:8000/api/store?name=' + selectStoreName)
    .then(res => res.json())
    .then(res => {
        // data를 응답 받은 후의 로직
        const selectStoreID = res[0]['id'];
        
        fetch('http://127.0.0.1:8000/api/sell?store=' + selectStoreID)
            .then(res => res.json())
            .then(res => {
                const sellProductID = res[0]['id'];
                
                
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
                        <a class="stretched-link" href="{% url 'detail' %}?productID={{p.id}}&storeID=1"></a>
                    </div>
                </div>
                `).trigger("create");
        });
    });