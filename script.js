// Floating Stream Controls
const streamFloating = document.getElementById('stream-floating');
const minimizeBtn = document.getElementById('minimizeBtn');
const maximizeBtn = document.getElementById('maximizeBtn');
const closeBtn = document.getElementById('closeBtn');

// Track states
let isMinimized = false;
let isMaximized = false;

// Minimize toggles between minimized & normal
minimizeBtn.addEventListener('click', () => {
  if (!isMinimized) {
    streamFloating.classList.add('minimized');
    isMinimized = true;
    if (isMaximized) {
      streamFloating.classList.remove('maximized');
      isMaximized = false;
    }
  } else {
    streamFloating.classList.remove('minimized');
    isMinimized = false;
  }
});

// Maximize toggles between maximized & normal
maximizeBtn.addEventListener('click', () => {
  if (!isMaximized) {
    streamFloating.classList.remove('minimized');
    streamFloating.classList.add('maximized');
    isMaximized = true;
    isMinimized = false;
  } else {
    streamFloating.classList.remove('maximized');
    isMaximized = false;
  }
});

// Close hides the floating window entirely
closeBtn.addEventListener('click', () => {
  streamFloating.style.display = 'none';
});
