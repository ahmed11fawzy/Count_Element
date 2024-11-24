const tagNameField=document.querySelector('#tagName')
const classField=document.querySelector('#className')
const idField=document.querySelector('#id')
const nameField=document.querySelector('#name')
const searchBtn=document.querySelector('#searchBtn')
const result=document.querySelector('main')


searchBtn.addEventListener('click',function(e){
    e.preventDefault()
    result.innerHTML=`
    
    <h3>Search Result</h3>
    <div class='container'>
        <p><b>Tag Name: </b>    ${tagNameField.value} /  ${searchByTagName(tagNameField)}</p>
        <p><b>Class Name:</b>  ${classField.value} / ${searchByClassName(classField)}</p>
        <p><b>ID:     </b>     ${idField.value} / ${searchById(idField)}</p>
        <p><b>Name:    </b>    ${nameField.value} / ${searchByName(nameField)}</p>
    </div>
    

    
    `
    
})


function searchByTagName(tagNameField){
    let elements=document.querySelectorAll(`${tagNameField.value}`);

    console.log(elements)
    return Array.from(elements).length>0?Array.from(elements).length:0;

}

function searchByClassName(classNameField){
    let elements=document.querySelectorAll(`.${classNameField.value}`);
    console.log(elements)
    return Array.from(elements).length>0?Array.from(elements).length:0;

}

function searchById(idField){
    let elements=document.querySelector(`#${idField.value}`);
    console.log(elements)
    return elements?1:0;

}

function searchByName(nameField){
    let elements=document.getElementsByName(`${nameField.value}`);
    console.log(elements)
    return Array.from(elements).length>0?Array.from(elements).length:0;

}

