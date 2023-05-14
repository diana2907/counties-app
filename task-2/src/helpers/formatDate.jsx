const addLeadingZero = (value) => {
  const formatDate = value.toString().padStart(2, "0");
  return formatDate;
};

export const formatTime = () => {
  const currentTime = new Date();
  const day = addLeadingZero(currentTime.getDate());
  const month = addLeadingZero(currentTime.getMonth() + 1);
  const year = currentTime.getFullYear();
  const hours = addLeadingZero(currentTime.getHours());
  const minutes = addLeadingZero(currentTime.getMinutes());

  return day + "." + month + "." + year + " " + hours + ":" + minutes;
};
