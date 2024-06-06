function updateContent(page) {
    const inputId = page + 'Content';
    const inputElement = document.getElementById(inputId);
    const newContent = inputElement.value;

    // Retrieve existing content from localStorage
    const existingContent = localStorage.getItem(page + 'Content') || '';

    // Append new content to existing content
    const updatedContent = existingContent + ' ' + newContent;

    // Store the updated content in localStorage
    localStorage.setItem(page + 'Content', updatedContent);

    // Clear the input field
    inputElement.value = '';

    // Notify the user
    alert('Content for ' + page + ' page has been updated.');
}

function changeCredentials() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername && newPassword) {
        // Retrieve stored credentials from localStorage
        const storedCredentials = JSON.parse(localStorage.getItem('credentials')) || [];

        // Add the new credentials to the stored credentials
        storedCredentials.push({ username: newUsername, password: newPassword });

        // Store the updated credentials back in localStorage
        localStorage.setItem('credentials', JSON.stringify(storedCredentials));

        // Clear the input fields
        document.getElementById('newUsername').value = '';
        document.getElementById('newPassword').value = '';

        // Notify the user
        alert('New credentials have been added.');
    } else {
        alert('Please enter both username and password.');
    }
}
