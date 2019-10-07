const Helpers = {
  convertCmToInches(cm) {
    if (isNaN(cm)) {
      return 'unknown'
    }
    let realFeet = ((cm*0.393700) / 12);
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet) * 12);
    return feet + ' ft ' + inches + ' inches';
  },
  
  convertKgToLbs(kg) {
    if (isNaN(kg)) {
      return 'unknown'
    }
    return Math.round(kg * 2.2) + ' lbs';
  }
}

export default Helpers;