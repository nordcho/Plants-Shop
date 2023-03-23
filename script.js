function elementBlur(classOfElement) {
    let variants = ['garden', 'lawn', 'planting']
    for (element of variants) {
        let element_concat = element + '_' + 'button'
        let elementDOM = document.getElementById(element_concat)
        if(elementDOM.classList.contains(classOfElement) && !(elementDOM.classList.contains('project__button--active'))) {
            elementDOM.classList.add("project__button--active")
        } else {
            elementDOM.classList.remove("project__button--active")
        }
    }

    for (element of variants) {
        elementsDOM = document.getElementsByClassName(element)
        for (elem of elementsDOM) {
            if(elem.classList.contains(classOfElement) && elem.tagName === 'DIV') {
                elem.classList.remove("blur")
            } else if (elem.tagName === 'DIV') {
                elem.classList.add("blur")
            }
        }
    }

    let buttonCounter = 0
    for (element of variants) {
        let element_concat = element + '_' + 'button'
        let elementDOM = document.getElementById(element_concat)
        if(!(elementDOM.classList.contains('project__button--active'))) {
            buttonCounter += 1
        }
    }

    if(buttonCounter === 3) {
        for (element of variants) {
            elementsDOM = document.getElementsByClassName(element)
            for (elem of elementsDOM) {
                elem.classList.remove("blur")
            }
        }
    }
}