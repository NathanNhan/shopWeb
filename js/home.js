const Xuat_San_pham_Khuyen_mai=(ds=[],tag,nhom=1)=>{
    let html=``
    ds.slice(0,4).forEach(item=>{
        html+=`
        <div class="col mb-5">
            <div class="card h-100">
                <!-- Sale badge-->
                <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                <!-- Product image-->
                <img class="card-img-top" src="${urlImages}/${item.Ma_so}.png" alt="..." onclick="showModal(this)" />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${item.Ten}</h5>
                        <!-- Group name-->
                        ${item.Nhom.Ma_so} <br>
                        <!-- Product price-->
                        ${item.Don_gia_Ban.toLocaleString()}<sup>đ</sup> <br>
                        <input type="number" min="1" max="10" value="1" style="width:50px;text-align:right" id="sl${item.Ma_so}">
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" href="javascript:void(0)" onclick="addCart('${item.Ma_so}','${nhom}')" >Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    tag.innerHTML=html;
}