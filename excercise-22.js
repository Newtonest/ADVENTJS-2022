 function checkStepNumbers(systemNames,stepNumbers) {
    return systemNames.every((e,i)=>{
     let firstIndex = systemNames.indexOf(e);
     let secondIndex = systemNames.lastIndexOf(e);
     return secondIndex == firstIndex? true: stepNumbers[firstIndex] < stepNumbers[secondIndex]

    })
  }

