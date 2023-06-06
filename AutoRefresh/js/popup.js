let intervalId = null;

function startRefresh() {
  const seconds = parseInt(document.getElementById('secInput').value) || 0;
  const minutes = parseInt(document.getElementById('minInput').value) || 0;
  const interval = (seconds + (minutes * 60)) * 1000;

  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.reload(tabs[0].id);
    });
  }, interval);
}

function stopRefresh() {
  clearInterval(intervalId);
  intervalId = null;
}

document.getElementById('Start').addEventListener('click', startRefresh);
document.getElementById('Stop').addEventListener('click', stopRefresh);