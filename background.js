chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'runScript') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: runScript
            });
        });
    }
});

function runScript() {
    console.log('Toggling dark mode');
    let overlay = document.getElementById('dark-mode-overlay');
    if (overlay) {
        overlay.remove();
    } else {
        overlay = document.createElement("div");
        overlay.id = 'dark-mode-overlay';

        const css = `
            position: fixed;
            pointer-events: none;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: white;
            mix-blend-mode: difference;
            z-index: 1;
        `
        overlay.setAttribute("style", css);

        document.body.appendChild(overlay);
    }
}
