        // Pomodoro Timer Variables
        let timerInterval;
        let isRunning = false;
        let timeLeft = 25 * 60; // 25 minutes in seconds

        // Get DOM elements
        const minutesDisplay = document.getElementById('minutes');
        const secondsDisplay = document.getElementById('seconds');
        const startBtn = document.getElementById('start-btn');
        const stopBtn = document.getElementById('stop-btn');
        const resetBtn = document.getElementById('reset-btn');
        const statusText = document.getElementById('status-text');

        // Update display function
        function updateDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            
            minutesDisplay.textContent = minutes.toString().padStart(2, '0');
            secondsDisplay.textContent = seconds.toString().padStart(2, '0');
        }

        // Start timer function
        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                statusText.textContent = 'Focus time! Stay concentrated.';
                
                timerInterval = setInterval(() => {
                    timeLeft--;
                    updateDisplay();
                    
                    if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        isRunning = false;
                        statusText.textContent = 'Great job! Time for a break.';
                        alert('Time\'s up! Take a break.');
                    }
                }, 1000);
            }
        }

        // Stop timer function
        function stopTimer() {
            if (isRunning) {
                clearInterval(timerInterval);
                isRunning = false;
                statusText.textContent = 'Timer paused. Ready to continue?';
            }
        }

        // Reset timer function
        function resetTimer() {
            clearInterval(timerInterval);
            isRunning = false;
            timeLeft = 25 * 60;
            updateDisplay();
            statusText.textContent = 'Ready to focus';
        }

        // Event listeners
        startBtn.addEventListener('click', startTimer);
        stopBtn.addEventListener('click', stopTimer);
        resetBtn.addEventListener('click', resetTimer);

        // Initialize display
        updateDisplay();