const inputField = document.querySelector('.inputfield');
const submitButton = document.querySelector('.submit_bt'); const groceryList = document.querySelector('.grocery_list')
const alertMsg = document.querySelector('.empty_text')
const addAlert = document.querySelector('.adding_text')
const removeAlert = document.querySelector('.remove_text')
const inputContainer = document.querySelector('.input_container');
const wholeBox = document.querySelector('.container')
const clearAll = document.querySelector('.clear')
const counter = document.querySelector('.count')


removeAlert.onclick = () => {
    alert('hello')
}


let counting = 0;
counter.innerHTML = counting
submitButton.addEventListener('click', function () {
        
    
        if (inputField.value) {
            //CREATE LIST ITEM & ALL COMPONENTS:
        let newItem = document.createElement('li')
        newItem.setAttribute('class', 'grocery_item')
        
        //CREATE PARAGRAPH ELEMENT:
        let Itemtext = document.createElement('p');
        Itemtext.setAttribute('class', 'actual_text')
        Itemtext.innerHTML = inputField.value;
        newItem.append(Itemtext)

        //CREATE CONTROL BOX SPPAN:
        let controlBox = document.createElement('span')
        controlBox.setAttribute('class', 'list_controls')

        //CREATE & APPEND INDIVIDUAL CONTROLS:
        let editButton = document.createElement('i')
        editButton.setAttribute('class', 'bx bxs-edit edit')
        
        let deleteButton = document.createElement('i')
        deleteButton.setAttribute('class', 'bx bxs-trash-alt delete')

        let doneButton = document.createElement('i')
        doneButton.setAttribute('class', 'bx bxs-check-square done')

        controlBox.append(editButton, deleteButton, doneButton)

        newItem.append(controlBox)
        

        groceryList.append(newItem)
        
        
            addAlert.classList.add('adding_prompt')
            setTimeout(() => {
                addAlert.classList.remove('adding_prompt')
            }, 3000)
        

            inputField.value = '';
            counting++;
            counter.innerHTML = counting;

        // return (inputField.value)
        }

        else {
            alertMsg.classList.add('animate_prompt')
            setTimeout(()=> {
                alertMsg.classList.remove('animate_prompt')
            }, 3000)
            
        }

        
        
    })
    
    

// CONTROL BUTTONS FUNCTIONALITY:
wholeBox.onclick = (e) => {
    let text = e.target.parentNode.previousElementSibling
    
    if (e.target.classList.contains('edit')) {
        inputField.value = text.innerHTML;
        
    }
    else if (e.target.classList.contains('delete')) {
        let listitem = e.target.parentNode.parentNode;
        listitem.remove();
           counting--;
        counter.innerHTML = counting;
        removeAlert.classList.add('remove_prompt')
        setTimeout(()=> {
                removeAlert.classList.remove('remove_prompt')
            }, 3000)

    }
    else if (e.target.classList.contains('done')) {
        text.classList.toggle('text_done')
    }
    // else if (e.target.classList.contains('clear')) {
    //     let allItems = e.target.previousElementSibling
    //     // allItems.remove();

    //     if (allItems.classList.contains('grocery_list')) {
    //         allItems.remove();
    //     }
    //     else {
    //         alert('nothing to clear')
    //     }
    // }
}








