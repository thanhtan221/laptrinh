
class Product {
    constructor(ten, id, dichvu, soluong, gia, tong) {
        this.ten = ten,
            this.id = id,
            this.dichvu = dichvu,
            this.soluong = soluong,
            this.gia = gia,
            this.tong = tong
    }
}
function init() {
    if (getLocalStorage("duan-quanly") == null) {
        arr = [
            new Product(

                ten = "Nguyễn Văn A",
                id = 10002001811,
                dichvu = "Follow",
                soluong = 3000,
                gia = 30,
                tong = soluong * gia
            ),
            new Product(

                ten = "Nguyễn Văn B",
                id = 100150118125,
                dichvu = "Like",
                soluong = 3000,
                gia = 20,
                tong = soluong * gia
            ),
            new Product(

                ten = "Nguyễn Văn C",
                id = 100150118125,
                dichvu = "Like",
                soluong = 3000,
                gia = 20,
                tong = soluong * gia
            )
        ];
        saveLocalStorage("duan-quanly", arr);
    }
    else {
        arr = getLocalStorage("duan-quanly");
    }
}

function getLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(key));
}

function saveLocalStorage(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}
let array=[];
let arr = [];
init();
showManage();

function xacnhan() {
    let ten = document.getElementById("name").value;
    let id = Number(document.getElementById("id_").value);
    let dichvu = document.getElementById("service").value;
    let soluong = Number(document.getElementById("quantity").value);
    let gia = Number(document.getElementById("Price").value);
    let total = soluong * gia;
    arr.push(new Product(ten, id, dichvu, soluong, gia, total));
    saveLocalStorage("duan-quanly", arr);
    showManage();
}

function deleteProduct(index) {
    arr.splice(index, 1);
    saveLocalStorage("duan-quanly", arr);
    showManage();
    editProduct();
    comments();
}
function showManage() {
    document.getElementById("result").innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        document.getElementById("result").innerHTML += ` <tr id = "edit_${i}">
        <td>   ${i + 1}</td>
        <th>  ${arr[i].ten}  </th> 
        <th>  ${arr[i].id}  </th> 
        <th>  ${arr[i].dichvu}  </th> 
        <th>  ${arr[i].soluong}  </th> 
        <th>  ${arr[i].gia}  </th>
        <th>  ${arr[i].tong}</th>
        <td><buttonclass="warning" onclick="deleteProduct(${i})">Delete</button></td>
                </tr>
             `
    }
    reset();
}
function reset() {
    document.getElementById("name").value = "";
    document.getElementById("id_").value = "";
    document.getElementById("service").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("Price").value = "";

}