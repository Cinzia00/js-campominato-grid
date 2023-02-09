console.log('ciao');

let btnPlayElement = document.getElementById('btn-play');
console.log(btnPlayElement);
let latoGriglia = 10;
let superficieGriglia = latoGriglia * latoGriglia;
console.log(latoGriglia, superficieGriglia);
let grigliaAttiva = 0;

btnPlayElement.addEventListener('click', function () {
    if (grigliaElement.firstChild) {
        grigliaElement.innerHTML = ''
    } else {
        for (let i = 0; i < superficieGriglia; i++) {
            let num = i + 1
            // console.log(num)

            let grigliaDaStampare = document.createElement('div')
            grigliaDaStampare.style.width = `calc(100% / ${latoGriglia})`
            grigliaDaStampare.classList.add("cella")
            // let grigliaDaStampare = `<div class="cella active" style="width: calc(100% / ${latoGriglia});" >${num}</div>`
            // grigliaElement.innerHTML += grigliaDaStampare
            grigliaDaStampare.innerHTML += num
            grigliaElement.append(grigliaDaStampare)
        }
    }
})


const grigliaElement = document.querySelector('.griglia');

console.log(grigliaElement);

let singolaCellaElement = document.querySelectorAll('.cella')



grigliaElement.addEventListener('click', function (event){

    console.log(event.target.innerHTML)

})