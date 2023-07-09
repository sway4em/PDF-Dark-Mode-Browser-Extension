document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'runScript' });
});
