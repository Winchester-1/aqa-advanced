function numCounter(num) {
  console.log(num);
  
  if (num > 1) {
    numCounter(num - 1);
  }
}

numCounter(5);