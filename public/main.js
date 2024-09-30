const postSection = document.querySelector('#posts');
const title = document.querySelector('.title');
const content = document.querySelector('#content');
const submitBtn = document.querySelector('.submit');

function showNotes() {
  postSection.innerHTML = localStorage.getItem("notes") || '';
  attachDeleteEventListeners();
}

showNotes();

function updateStorage() {
  localStorage.setItem("notes", postSection.innerHTML);
}

function attachDeleteEventListeners() {

  const deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach(button => {
    button.onclick = function() {
      button.parentElement.remove();
      updateStorage();
    };
  });
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const titleText = title.value
  const text = content.value


  const newTitle = document.createElement('h2');
  const newElement = document.createElement('div');
  const newDiv = document.createElement('div');

  newDiv.className = "new-div";

  newElement.textContent = text;
  newTitle.textContent = titleText;

  newDiv.appendChild(newTitle);
  newDiv.appendChild(newElement);


  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.style.cursor = 'pointer';

  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'fa-solid fa-trash';

  deleteButton.appendChild(deleteIcon);
  deleteButton.onclick = function() {
    newDiv.remove();
    updateStorage();
  };
  newDiv.appendChild(deleteButton);

  postSection.appendChild(newDiv);

  title.value = '';
  content.value = '';

  updateStorage();
  attachDeleteEventListeners();
})



