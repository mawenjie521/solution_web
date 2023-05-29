export const transformTime = (date) => {
  const d = new Date(date);
  let y = d.getFullYear();
  let m = d.getMonth() + 1;
  let s = d.getDate();
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  const datetime = y + m + s;
  return datetime;
};
export const transformTimes = (date) => {
  const d = new Date(date);
  let y = d.getFullYear();
  let m = d.getMonth() + 1;
  let s = d.getDate();
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  const datetimes = y + '/' + m + '/' + s;
  return datetimes;
};
export const transformTimess = (date) => {
  const d = new Date(date);
  let y = d.getFullYear();
  let m = d.getMonth() + 1;
  let s = d.getDate();
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  const datetimess = y + '.' + m + '.' + s;
  return datetimess;
};