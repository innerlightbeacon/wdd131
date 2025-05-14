// Get references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Load saved chapters from localStorage
window.addEventListener('load', () => {
  const savedChapters = JSON.parse(localStorage.getItem('chapters')) || [];
  savedChapters.forEach(chapter => {
    addChapterToList(chapter);
  });
});

// Event listener for Enter key in input
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    button.click();
  }
});

// Click event for Add Chapter button
button.addEventListener('click', () => {
  const chapter = input.value.trim();

  // If input is blank, show a message and refocus
  if (chapter === '') {
    alert('Please enter a book and chapter.');
    input.focus();
    return;
  }

  // Check for duplicate entries
  const existingChapters = Array.from(document.querySelectorAll('#list li')).map(li => li.firstChild.textContent.toLowerCase());
  if (existingChapters.includes(chapter.toLowerCase())) {
    alert('This chapter is already in the list.');
    input.value = '';
    input.focus();
    return;
  }

  // Enforce a maximum of 10 items
  if (list.children.length >= 10) {
    alert('You can only add up to 10 chapters.');
    input.value = '';
    input.focus();
    return;
  }

  // Add chapter to list
  addChapterToList(chapter);
  saveChapters();

  // Clear input and refocus
  input.value = '';
  input.focus();
});

// Function to add a chapter to the list
function addChapterToList(chapter) {
  const li = document.createElement('li');
  li.textContent = chapter;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.addEventListener('click', () => {
    if (confirm(`Remove "${chapter}" from the list?`)) {
      list.removeChild(li);
      saveChapters();
    }
  });

  li.appendChild(deleteButton);
  list.appendChild(li);
}

// Function to save chapters to localStorage
function saveChapters() {
  const chapters = Array.from(document.querySelectorAll('#list li')).map(li => li.firstChild.textContent);
  localStorage.setItem('chapters', JSON.stringify(chapters));
}
