<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Character Limit Example</title>
  </head>
  <body>
    <label for="input-field">Enter text (max 2000 characters):</label>
    <input type="text" id="input-field" name="input-field" maxlength="2000">
    <div id="char-counter"></div>
    
    <script>
      const inputField = document.getElementById('input-field');
      const charCounter = document.getElementById('char-counter');
      const maxLength = 2000;
      
      inputField.addEventListener('input', function() {
        const inputLength = inputField.value.length;
        const remainingChars = maxLength - inputLength;
        
        charCounter.textContent = remainingChars + ' characters remaining';
      });
    </script>
  </body>
</html>
