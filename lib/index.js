//** Erases the last char of a word (Hello ==> Hell)*/
function eraseLast(word) {
  return word
    .split("")
    .filter((ch, i) => i !== word.split("").length - 1)
    .join("");
}

//** Capitalizes the first word of a sentence (hello world ==> Hello world) */
function capitalize(sentence) {
  return sentence
    .split(" ")
    .map((w, i) =>
      i === 0
        ? w
            .split("")
            .map((c, i) => (i === 0 ? c.toUpperCase() : c))
            .join("")
        : w
    )
    .join(" ");
}

//** Converts a given date into pretty string representation (Today at 07:34 PM) */
function prettyDateFormat(dateObject) {
  const weekDays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const recentDays = ["Yestarday", "Today", "Tomorrow"];
  const paramMilis = dateObject.getTime();
  const currentMilis = new Date().getTime();
  const diff = Math.floor((currentMilis - paramMilis) / 1000 / 60 / 60 / 24);
  let day = "";

  switch (diff) {
    case -1:
      day = "Tomorrow";
      break;
    case 0:
      day = "Today";
      break;
    case 1:
      day = "Yestarday";
      break;
    default:
      if (diff < 7) {
        day = weekDays[dateObject.getDay()];
      } else {
        day = dateObject.getDate().toString();
      }
      break;
  }
  let [hour, minute] = [dateObject.getHours(), dateObject.getMinutes()];
  let id = hour > 12 ? "PM" : "AM";
  hour = hour > 12 ? hour - 12 : hour;
  return recentDays.includes(day)
    ? `${day} at ${hour < 10 ? `0${hour}` : hour}:${
        minute < 10 ? `0${minute}` : minute
      } ${id}`
    : `${day} ${months[dateObject.getMonth()]} ${dateObject.getFullYear()} at ${
        hour < 10 ? `0${hour}` : hour
      }:${minute < 10 ? `0${minute}` : minute} ${id}`;
}

export { eraseLast, capitalize, prettyDateFormat };
