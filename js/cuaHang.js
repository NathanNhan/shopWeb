let cuaHang={};

const Xuat_Cua_hang=(cuahang,Tag)=>{
    let html=``;
    html+=`
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">${cuahang.Ten}</h1>
                <p class="lead fw-normal text-white-50 mb-0">
                    Địa chỉ:${cuahang.Dia_chi} <br>
                    Điện thoại:${cuahang.Dien_thoai} <br>
                    Email:${cuahang.Email}
                </p>
            </div>
    `
    Tag.innerHTML=html
}

