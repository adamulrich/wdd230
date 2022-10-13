

const input = document.getElementById("favchap");
const button = document.getElementById("button");
const list = document.getElementById("scripture_list");

function addChapter() {


    // safeguard blank values
    if (input.value != "") {
        // create the list item

        const listItem = document.createElement('li');
        listItem.innerText = input.value;

        // create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = "<span role='img' aria-label='Red X - Delete'>❌</span>";

        // append to list item
        listItem.appendChild(deleteButton);

        // append to list
        list.appendChild(listItem);

        // add listener
        deleteButton.addEventListener('click', function() {
            list.removeChild(this.parentElement);
        })

    }
    input.value = "";
    input.focus();

}

button.addEventListener("click", addChapter);



