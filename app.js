let select = document.querySelector('select')
let articles = document.querySelector('article')
let conteiner = document.querySelector('.conteiner')

select.addEventListener('change', () => {
    for (const article) {
        if(select.value == article.type || select.value == 'All'){
            article.style.display = 'grid'
        }else{
            article.style.display = 'none'
        }
    }
})

let prise = false

function sortPrise(event){
    event.preventDefault();
    conteiner.innerHTML = ''

    let selected = [...article].sort((a,d) => {
        return b.dataset.prise - a.dataset.prise
    }
)
}

let country = false

function sortCountry(event){
    country = !country
    event.preventDefault();
    conteiner.innerHTML = ''
}

let selected = [...articles].sort((a,b) => {
    return country ? a.dataset.country.localeCompare()
    : b.dataset.country - a.dataset.country
})

for (const article of selected) {
    conteiner.appendChild(article)
}