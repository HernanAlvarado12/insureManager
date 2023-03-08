
const menu = document.querySelector('nav > menu')

document.addEventListener('click', event => {
    /**
     * @type {Element}
     */
    const target = event.target
    if(target.matches('#iconMenu')) {
        target.classList.toggle('active')
        menu.classList.toggle('hidden')
    }else if(target.matches('#iconMenu > span')) {
        target.parentElement.classList.toggle('active')
        menu.classList.toggle('hidden')
    }
})


fetch('./data.json')
    .then(response => response.json())
    .then(json => {
        const documentFragment = document.createDocumentFragment()
        const template = document.getElementById('planTemplate').content
        const parentInsert = document.getElementById('planInsertSection')
        json.commentaries.forEach(element => {
            const { imagePath, title, content } = element
            const cloneNode = document.importNode(template, true)
            cloneNode.querySelector('img').setAttribute('src', imagePath)
            cloneNode.querySelector('h3').textContent = title
            cloneNode.querySelector('p.text-sm').textContent = content
            documentFragment.append(cloneNode)
        })
        parentInsert.append(documentFragment)
    })