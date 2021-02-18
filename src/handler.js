const palindrome = require("./palindrome-date/functions");

export const getDate = async event => {
  let startDate = "";
  let isValidDate = true;

  if (event.queryStringParameters && event.queryStringParameters.startDate) {
    startDate = event.queryStringParameters.startDate;
    const dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/gm;

    if(!dateRegex.test(startDate))
      isValidDate = false;
  } else
    startDate = new Date(Date.now());

  let status;
  let returnMessage;

  if (isValidDate) {
    if (new Date(startDate) == "Invalid Date")
      startDate = palindrome.stringToDate(startDate);
    const date = palindrome.getNextPalindromeDate(startDate);

    returnMessage = date;
    status = 200;
  } else {
    returnMessage = "Invalid start date";
    status = 400;
  }
  return {
    statusCode: status,
    body: JSON.stringify(
      {
        date: returnMessage
      },
      null,
      2
    ),
  };
};