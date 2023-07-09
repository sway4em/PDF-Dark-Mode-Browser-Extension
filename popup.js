document.getElementById('toggle-dark-mode').addEventListener('change', () => {
    chrome.runtime.sendMessage({ action: 'runScript' });
});
