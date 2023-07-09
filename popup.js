document.getElementById('toggle-dark-mode').addEventListener('change', (event) => {
    chrome.runtime.sendMessage({ action: 'runScript' });
    if (event.target.checked) {
        document.body.style.backgroundColor = '#333';
        document.querySelector('.switch-container img:nth-child(1)').src = 'https://img.icons8.com/ios/50/ffffff/sun--v1.png';
        document.querySelector('.switch-container img:nth-child(3)').src = 'https://img.icons8.com/ios-glyphs/30/ffffff/bright-moon.png';
    } else {
        document.body.style.backgroundColor = 'white';
        document.querySelector('.switch-container img:nth-child(1)').src = 'https://img.icons8.com/ios/50/000000/sun--v1.png';
        document.querySelector('.switch-container img:nth-child(3)').src = 'https://img.icons8.com/ios-glyphs/30/000000/bright-moon.png';
    }
});
