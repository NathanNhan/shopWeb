let dsTivi=[];
let dsNhom=[];
let dsLoc=[];

const showMore =(num)=>{
    if(num=="ALL"){
        dsLoc=dsTivi.slice(0);
    }else{
        dsLoc=dsTivi.slice(0,Number(num));
    }
    
    Xuat_San_pham_Tivi(dsLoc,Th_San_pham_Tivi,1)
}
const Xuat_San_pham_Tivi=(ds=[],tag,nhom=1)=>{
    let html=``
    ds.forEach(item=>{
        html+=`
        <div class="col mb-5">
            <div class="card h-100">
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

const taoNhom=()=>{
    dsNhom = Array.from(new Set(dsTivi.map(x => x.Nhom.Ma_so))).map(Ma_so => {
        nhom = {
            Ma_so: Ma_so,
            Ten: dsTivi.find(x => x.Nhom.Ma_so == Ma_so).Nhom.Ten
        }
        return nhom
    })
}

const Xuat_Nhom=(ds=[],tag)=>{
    let html=`<button class="btn btn-sm btn-outline-dark" id="ALL" type="button" onclick="Xuat_Tivi_theo_Nhom('ALL')" >ALL</button>`
    ds.forEach(item=>{
        html+=`
        <button class="btn btn-sm btn-outline-dark" id="${item.Ma_so}" type="button" onclick="Xuat_Tivi_theo_Nhom('${item.Ma_so}')">${item.Ten}</button>
        `
    })
    tag.innerHTML=html;
}

const Xuat_Tivi_theo_Nhom= (maNhom)=>{
    dsLoc=dsTivi;
    if(maNhom!="ALL"){
        dsLoc=dsTivi.filter(x=>x.Nhom.Ma_so==maNhom);
        
    }
    Xuat_San_pham_Tivi(dsLoc,Th_San_pham_Tivi);
}

const Sap_xep=(tag)=>{
    let key=tag.getAttribute("key")
    let sort=tag.getAttribute("sort")
    let text= tag.innerText;
    //console.log(`${key} - ${sort} - ${text}`)

    if(key=="Ten"){
        if(sort=="1"){
            tag.innerHTML=`Tên &blacktriangledown;`
            tag.setAttribute("sort","0");
            dsLoc.sort((a,b)=>{
                console.log(a.Ten)
                return a.Ten.localeCompare(b.Ten)
            })
        }else{
            tag.innerHTML=`Tên &blacktriangle;`
            tag.setAttribute("sort","1");
            dsLoc.sort((a,b)=>{
                return b.Ten.localeCompare(a.Ten)
            })
        }
    }else{
        if(sort=="1"){
            tag.innerHTML=`Giá &blacktriangledown;`
            tag.setAttribute("sort","0");
            dsLoc.sort((a,b)=>{
                return a.Don_gia_Ban - b.Don_gia_Ban
            })
        }else{
            tag.innerHTML=`Giá &blacktriangle;`
            tag.setAttribute("sort","1");
            dsLoc.sort((a,b)=>{
                return b.Don_gia_Ban - a.Don_gia_Ban
            })
        }
        
    }
    Xuat_San_pham_Tivi(dsLoc,Th_San_pham_Tivi)
}

const Loc_Gia=(gia)=>{
    let ds=dsLoc.filter(x=>Number(x.Don_gia_Ban) <= Number(gia))
    lblGia.innerHTML=`Giá: ${Number(gia).toLocaleString()}<sup>đ</sup> (${ds.length})`;
    Xuat_San_pham_Tivi(ds,Th_San_pham_Tivi)
}

