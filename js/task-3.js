
  const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  nameInput.addEventListener('input', function() {
    const trimmedValue = nameInput.value.trim(); // Очищаємо значення від пробілів по краях

    if (trimmedValue === '') {
      nameOutput.textContent = 'Anonymous'; // Якщо значення порожнє, встановлюємо "Anonymous"
    } else {
      nameOutput.textContent = trimmedValue; // Інакше встановлюємо введене ім'я
    }
  });

