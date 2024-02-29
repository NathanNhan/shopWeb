const urlService=`http://localhost:8080`;
const urlImages=`http://localhost:8080`;

const apiCuahang=()=>{
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq[0])
        }
        let apiName = "Cuahang"
        Xu_ly_HTTP.open("GET", `${urlService}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}

const apiTivi=()=> {
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName = "dsTivi"
        Xu_ly_HTTP.open("GET", `${urlService}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}

const apiMathang=()=>{
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName = "dsMathang"
        Xu_ly_HTTP.open("GET", `${urlService}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}
const apiDienthoai=()=>{
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName = "dsDienthoai"
        Xu_ly_HTTP.open("GET", `${urlService}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}


const apiDathang = (dsDonDH) => {
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName = "Dathang"
        Xu_ly_HTTP.open("POST", `${urlService}/${apiName}`)
        Xu_ly_HTTP.send(JSON.stringify(dsDonDH))
    })
}


const apiLienhe = (thongTin) => {
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName = "Lienhe"
        Xu_ly_HTTP.open("POST", `${urlService}/${apiName}`)
        Xu_ly_HTTP.send(JSON.stringify(thongTin))
    })
}