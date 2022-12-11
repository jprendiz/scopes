function sumWithClosure(firstNum) {
    return (secondNum) => {
      if (secondNum) return firstNum + secondNum
       else return firstNum
    }
  }
  
  console.log(sumWithClosure(2)(3)); 
  console.log(sumWithClosure(90)());
  