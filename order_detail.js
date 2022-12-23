//Best Seller
function loadOrderDetail(){
    fetch("./order_history.json")
    .then(function(res){
        if(!res.ok){
            throw Error("Http Error:", res.status);
        }
        return res.json();
    })
    .then(function(data)
    {
        var table = "<tr class = 'product_p1'><th>Tên sản phẩm</th><th>Mã Khuyến Mãi</th><th>Thành Tiền</th></tr>";
        for(let p of data){
        table +=  "<tr><td>" +
                "<div class = 'product'>" +  "<p class = 'name_pro'>" +  "<image class='img_pro' src='./hinh/" + p.products[0].img1_url + "' />" + p.products[0].name_product + "</p>" +
                "<p class = 'name_pro'>" + 'x'+ p.products[0].quantity + "</p>" +
                "</div>" +

                "</td><td>"+
                "<p class = 'name_pro'>" + p.voucher + "</p>" +
                "</div>" +
                "</td><td>"+
                "<p class = 'name_pro'>" +  p.products[0].price + "</p>" +
                "</td></tr>"
    }
    document.getElementById("table").innerHTML=table;
    }) 
    .catch(function(err){
        alert(err.message);
    })
}