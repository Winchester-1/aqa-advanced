function showTextAfterDelay (text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}

showTextAfterDelay('Hello! Sorry for delay.', 5000);