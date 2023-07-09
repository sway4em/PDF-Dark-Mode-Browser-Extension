document.getElementById('toggle-dark-mode').addEventListener('change', () => {
    chrome.runtime.sendMessage({ action: 'runScript' });
    if (event.target.checked) {
        document.body.style.backgroundColor = '#333';
    } else {
        document.body.style.backgroundColor = 'white';
    }
});


