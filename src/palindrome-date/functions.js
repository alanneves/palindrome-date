export const getNextPalindromeDate = date => {
  let isPalindrome = false;

  while(!isPalindrome) {
    date = new Date(date.setDate(date.getDate() + 1));
    const formattedDate = formatter(date);
    if (formattedDate === reverse(formattedDate))
      isPalindrome = true;
  }
  return formatter(date, true);
};

export const stringToDate = date => {
  let separator;
  if (date.includes("/"))
    separator = "/";
  else if (date.includes("-"))
    separator = "-";
  else if (date.includes("."))
    separator = ".";

  const day = date.split(separator)[0];
  const month = date.split(separator)[1];
  const year = date.split(separator)[2];

  return new Date(year, month, day);
};

export const formatter = (date, output) => {
  const day = addZero(date.getDate());
  const month = addZero(date.getMonth() + 1);
  const year = date.getFullYear();

  return output ? `${day}/${month}/${year}` : `${day}${month}${year}`;
};

const reverse = date => date.split("").reverse().join("");
const addZero = date => String(date).length < 2 ? `0${date}` : date;
