//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const meetup = (year, month, week, day) => {
  let exactDate = 0;
  const dayIndex1 = DAYS.indexOf(day);
  const lastDay = new Date(year,month,exactDate);
  
  switch(week){
    case 'first':
      exactDate = 1;
      break;
    case 'second':
      exactDate = 8;
      break;
    case 'third':
      exactDate = 15;
      break;
    case 'fourth':
      exactDate = 22;
      break;
    case 'last':
      exactDate = lastDay.getDate() - 6;
      break;
    case 'teenth':
      exactDate = 13;
      break;
  }
  
  let sampleDate = new Date(`${year}-${month}-${exactDate}`);
  let dayIndex2 = sampleDate.getDay(); 

  while(dayIndex1 !== dayIndex2){
      dayIndex2 = (dayIndex2+1)%7;
      exactDate++;
  }
  return new Date(`${year}-${month}-${exactDate}`);
};
