// Date ***************
export function formatDate(data) {
  let joinedDate = new Date(data.created_at);

  let day = joinedDate.getDate();
  let month = joinedDate.getMonth();
  let year = joinedDate.getFullYear();
  let monthNames = [
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
  let monthName = monthNames[month];
  return day + " " + monthName + " " + year;
}
