const productos = document.getElementById("productos");

var prod = {
    desc: 'red',
    desctext: '15% descuento',
    img: "https://media.musiciansfriend.com/is/image/MMGS7/SO-SGO-09E-BK-000-Acoustic-Electric-Guitar-Black/J56471000001000-00-400x400.jpg",
    name: 'Savannah SO-SGO-09E-BK 000 Acoustic-Electric Guitar',
    price: 'MXN 2,142.09',
    priceoff: 'MXN 3,855.93'
};

var prod2 = {
    desc: 'red',
    desctext: '15% descuento',
    img: "https://media.musiciansfriend.com/is/image/MMGS7/SGD-10-Dreadnought-Acoustic-Guitar-Black/J13212000001000-00-400x400.jpg",
    name: 'Savannah SGD-10 Dreadnought Acoustic Guitar Black',
    price: 'MXN 1,713.63',
    priceoff: 'MXN 2,999.01'
};

var prod3 = {
    desc: '',
    desctext: '',
    img: "https://media.musiciansfriend.com/is/image/MMGS7/Rocketeer-Electric-Guitar-Pack-Red-Burst/430930000003000-00-400x400.jpg",
    name: 'Rogue Rocketeer Electric Guitar Pack Black',
    price: 'MXN 4,284.39',
    priceoff: ''
};

var prod4 = {
    desc: 'black',
    desctext: 'Envio gratis',
    img: "https://media.musiciansfriend.com/is/image/MMGS7/O120CESB-Auditorium-Acoustic-Electric-Guitar-3-Color-Sunburst/J51473000001000-00-400x400.jpg",
    name: 'SMitchell O120CESB Auditorium Acoustic-Electric Guitar',
    price: 'MXN 4,070.16',
    priceoff: ''
};
var prod5 = {
    desc: 'black',
    desctext: 'Envio gratis',
    img: "https://media.musiciansfriend.com/is/image/MMGS7/O120CESB-Auditorium-Acoustic-Electric-Guitar-3-Color-Sunburst/J51473000001000-00-400x400.jpg",
    name: 'SMitchell O120CESB Auditorium Acoustic-Electric Guitar',
    price: 'MXN 4,070.16',
    priceoff: ''
};
var prod6 = {
    desc: 'black',
    desctext: 'Envio gratis',
    img: "https://media.musiciansfriend.com/is/image/MMGS7/O120CESB-Auditorium-Acoustic-Electric-Guitar-3-Color-Sunburst/J51473000001000-00-400x400.jpg",
    name: 'SMitchell O120CESB Auditorium Acoustic-Electric Guitar',
    price: 'MXN 4,070.16',
    priceoff: ''
};

var objectProductos = [
    prod,
    prod2,
    prod3,
    prod4,
    prod5,
    prod6
]


var productosHtml = ``;

objectProductos.forEach(prod =>{

    tempHtml = `<div class="producto">
    <div class="mensaje ${prod.desc} center-bold">
        ${prod.desctext}
    </div>
    <div class="foto center-bold">
        <img src="${prod.img}" alt="">                    
    </div>
    <div class="desc center-bold">
        <div class="prod-nombre">
            ${prod.name}
        </div>
        <div class="precio">
            ${prod.price} <span>${prod.priceoff}</span>
        </div>
        <div class="pagar">
            <div class="btn btn-gold">
                Agregar <i class="fas fa-shopping-cart"></i>
            </div>
            <input class="input-short" type="number" name="" id="">

        </div>
    </div>
</div>`

productosHtml += tempHtml;


});

productos.innerHTML = productosHtml;