let dsmatHang = [];
let dsNhom = [];
let dsLoc = [];
let dsTim = [];
//khai báo biến phân trang
let itemPerPage = 8;
let currentPage = 1;
let lastItems = currentPage * itemPerPage;
let startItems = lastItems - itemPerPage;

const Xuat_San_pham_Mathang = (ds = [], tag, nhom) => {
    let html = ``
    ds.forEach(item => {
        html += `
        <div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="${urlImages}/${item.Ma_so}.png" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${item.Ten}</h5>
                        <!-- Group name-->
                        ${item.Nhom.Ma_so} <br>
                        <!-- Product price-->
                        ${item.Don_gia_Ban.toLocaleString()}<sup>đ</sup>
                         <input type="number" min="1" max="10" value="1" style="width:50px;text-align:right" id="sl${item.Ma_so}">
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" href="javascript:void(0)" onclick="addCart('${item.Ma_so}', '${nhom}')" >Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    tag.innerHTML = html;
}

const taoNhom = () => {
    dsNhom = Array.from(new Set(dsmatHang.map(x => x.Nhom.Ma_so))).map(Ma_so => {
        nhom = {
            Ma_so: Ma_so,
            Ten: dsmatHang.find(x => x.Nhom.Ma_so == Ma_so).Nhom.Ten
        }
        return nhom
    })
}

const Xuat_Nhom = (ds = [], tag) => {
    let html = `<button class="btn btn-sm btn-outline-dark" id="ALL" type="button" onclick="Xuat_Mathang_theo_Nhom('ALL')" >ALL</button>`
    ds.forEach(item => {
        html += `
        <button class="btn btn-sm btn-outline-dark" id="${item.Ma_so}" type="button" onclick="Xuat_Mathang_theo_Nhom('${item.Ma_so}')">${item.Ten}</button>
        `
    })
    tag.innerHTML = html;
}

const Xuat_Mathang_theo_Nhom = (maNhom) => {
    // dsLoc=dsmatHang;
    if (maNhom != "ALL") {
        // show_paginate.style.display = "flex";
        dsLoc = dsmatHang.filter(x => x.Nhom.Ma_so == maNhom);
        xuat_nut_phan_trang(dsLoc, show_paginate);
        document.getElementById("1").click();
        
    }
    if (maNhom == "ALL") {
        // show_paginate.style.display = "flex";
        dsLoc = dsmatHang;
        xuat_nut_phan_trang(dsLoc, show_paginate);
        document.getElementById("1").click();
    }

}

const Sap_xep = (tag) => {
    let key = tag.getAttribute("key")
    let sort = tag.getAttribute("sort")
    // let text = tag.innerText;
    //console.log(`${key} - ${sort} - ${text}`)

    if (key == "Ten") {
        let danhsach = [];
        if (sort == "1") {
            tag.innerHTML = `Tên &blacktriangledown;`
            tag.setAttribute("sort", "0");
            danhsach = dsmatHang.sort((a, b) => {
                console.log(a.Ten)
                return a.Ten.localeCompare(b.Ten)
            })
            if (danhsach.length > 8) {
                dsLoc = danhsach;
                xuat_nut_phan_trang(dsLoc, show_paginate);
                document.getElementById("1").click();
            } else {
                Xuat_San_pham_Mathang(dsLoc, Th_San_pham_Mathang)
            }
        } else {
            tag.innerHTML = `Tên &blacktriangle;`
            tag.setAttribute("sort", "1");
            danhsach = dsmatHang.sort((a, b) => {
                return b.Ten.localeCompare(a.Ten)
            })
            if (danhsach.length > 8) {
                dsLoc = danhsach;
                xuat_nut_phan_trang(dsLoc, show_paginate);
                document.getElementById("1").click();
            } else {
                Xuat_San_pham_Mathang(dsLoc, Th_San_pham_Mathang)
            }
        }
    } else {
        
        if (sort == "1") {
            tag.innerHTML = `Giá &blacktriangledown;`
            tag.setAttribute("sort", "0");
            danhsach = dsmatHang.sort((a, b) => {
                return a.Don_gia_Ban - b.Don_gia_Ban
            })
            if (danhsach.length > 8) {
                dsLoc = danhsach
                xuat_nut_phan_trang(dsLoc, show_paginate);
                document.getElementById("1").click();
            } else {
                Xuat_San_pham_Mathang(dsLoc, Th_San_pham_Mathang)
            }
        } else {
            tag.innerHTML = `Giá &blacktriangle;`
            tag.setAttribute("sort", "1");
            danhsach = dsmatHang.sort((a, b) => {
                return b.Don_gia_Ban - a.Don_gia_Ban
            })
            if (danhsach.length > 8) {
                dsLoc = danhsach;
                xuat_nut_phan_trang(dsLoc, show_paginate);
                document.getElementById("1").click();
            } else {
                Xuat_San_pham_Mathang(dsLoc, Th_San_pham_Mathang)
            }
        }

    }
    // Xuat_San_pham_Mathang(dsLoc, Th_San_pham_Mathang)
}

const Loc_Gia = () => {
    // if(gia != ""){
    //     show_paginate.style.display = "none"
    //     let ds=dsLoc.filter(x=>Number(x.Don_gia_Ban) <= Number(gia))
    //     lblGia.innerHTML=`Giá: ${Number(gia).toLocaleString()}<sup>đ</sup> (${ds.length})`;
    //     Xuat_San_pham_Mathang(ds,Th_San_pham_Mathang)
    // }
   
    let dsGia = dsLoc.map(x => x.Don_gia_Ban);
    let minPrice = Math.min(...dsGia);
    let maxPrice = Math.max(...dsGia);
    locGia.min = minPrice;
    locGia.max = maxPrice;
    locGia.value = minPrice;
    lblGia.innerHTML = `Giá: ${Number(minPrice).toLocaleString()}<sup>đ</sup>`;
    locGia.addEventListener("input", (e) => {
        let ds = dsmatHang.filter(x => Number(x.Don_gia_Ban) <= Number(e.target.value))
        lblGia.innerHTML = `Giá: ${Number(e.target.value).toLocaleString()}<sup>đ</sup> (${ds.length})`;
        if(ds.length > 8) {
            dsLoc = ds;
            xuat_nut_phan_trang(dsLoc, show_paginate);
            document.getElementById("1").click();
        } else {
            Xuat_San_pham_Mathang(ds, Th_San_pham_Mathang);
        }
        
    })
}



//Tìm kiếm bằng nút button
tim.onclick = () => {
    if (timKiem.value != "") {
        dsTim = dsmatHang.filter(x => x.Ten.toLowerCase().includes(timKiem.value.toLowerCase()));
        if(dsTim.length > 8) {
            dsLoc = dsTim;
            xuat_nut_phan_trang(dsLoc, show_paginate);
            document.getElementById("1").click();
        } else {
            Xuat_San_pham_Mathang(dsTim, Th_San_pham_Mathang);
        }
    } else {
        dsLoc = dsmatHang;
        xuat_nut_phan_trang(dsLoc, show_paginate);
        document.getElementById("1").click();
    }
}





//Tìm kiếm bằng sự kiện enter
timKiem.onkeyup = (e) => {
    if (e.keyCode == 13 && e.target.value != "") {
        dsTim = dsmatHang.filter(x => x.Ten.toLowerCase().includes(e.target.value.toLowerCase()));
        if (dsTim.length > 8) {
            dsLoc = dsTim;
            xuat_nut_phan_trang(dsLoc, show_paginate);
            document.getElementById("1").click();
        } else {
            Xuat_San_pham_Mathang(dsTim, Th_San_pham_Mathang);
        }
    } else {
        dsLoc = dsmatHang;
        xuat_nut_phan_trang(dsLoc, show_paginate);
        document.getElementById("1").click();
    }
}

//Xuất pagination button
const xuat_nut_phan_trang = (ds = [], tags, nhom) => {
    let paginate = Math.ceil(ds.length / itemPerPage);
    console.log(paginate);
    let html = ``;
    for (let i = 1; i <= paginate; i++) {
        html += `          
            <li class="page-item"><a class="page-link" id=${i} onclick="pagination('${i}', '${nhom}')">${i}</a></li>      
        `
    }
    tags.innerHTML = html;
    document.getElementById("1").click();
    document.getElementById("1").parentElement.classList.add("active");

}

//pagination
const pagination = (number, nhom) => {
    currentPage = number;
    document.querySelectorAll(".active")[0].classList.remove("active");
    document.getElementById(number).parentElement.classList.add("active");
    lastItems = currentPage * itemPerPage;
    startItems = lastItems - itemPerPage;
    let currentPosts = dsLoc.slice(startItems, lastItems);
    Xuat_San_pham_Mathang(currentPosts, Th_San_pham_Mathang, nhom);
}












