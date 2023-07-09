document.getElementById('run-script').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'runScript' });
});
