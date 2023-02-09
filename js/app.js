console.log('ciao');

let btnPlayElement = document.getElementById('btn-play');
console.log(btnPlayElement)
let latoGriglia = 10;
let superficieGriglia = latoGriglia * latoGriglia;
let LatoSecondaGriglia = 8;
let superficieSecondaGriglia = LatoSecondaGriglia * LatoSecondaGriglia;
console.log(latoGriglia, superficieGriglia);

btnPlayElement.addEventListener('click', function () {

    // clickCounter++
    for (let i = 0; i < superficieGriglia; i++) {
        let num = i + 1
        console.log(num)

        // let grigliaDaStampare = createElement('div').style("width: calc(100% / &{latoGriglia}")
        let grigliaDaStampare = `<div class="cella" style="width: calc(100% / ${latoGriglia});" >${num}</div>`
        grigliaElement.innerHTML += grigliaDaStampare
    }


    if (clickCounter == 2) {
        for (let i = 0; i < superficieSecondaGriglia; i++) {
            let num = i + 1
            console.log(num)

            // let grigliaDaStampare = createElement('div').style("width: calc(100% / &{latoGriglia}")
            let grigliaDaStampare = `<div class="cella" style="width: calc(100% / ${latoGriglia});" >${num}</div>`
            grigliaElement.innerHTML += grigliaDaStampare
        }

    }
})



const grigliaElement = document.querySelector('.griglia');
console.log(grigliaElement);



