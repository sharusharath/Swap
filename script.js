function swapCharactersWithNumbers(string) {
    const stringArr = string.split('');
    let index = -1;
  
    for (let i = 0; i < stringArr.length; i++) {
      const char = stringArr[i];
      if (!isNaN(char)) {
        if (index === -1) {
          index = i;
        }
      } else if (index !== -1) {
        // Swap characters at index and i
        [stringArr[index], stringArr[i]] = [stringArr[i], stringArr[index]];
        index = -1;
      }
    }
  
    return stringArr.join('');
  }
  

    
document.querySelector('#check').addEventListener('click', function () {
   
    const randomString = document.querySelector('.string_text').value;
    const swappedString = swapCharactersWithNumbers(randomString);
    document.querySelector('#swapped_string').textContent = swappedString;
  
   
  });


