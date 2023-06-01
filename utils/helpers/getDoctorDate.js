export function getDoctorDate(date) {
  const today = new Date();
  const monthToday = today.getMonth() + 1;
  const dayToday = today.getDate();
  const yearToday = today.getFullYear();
  const [month, day, year] = date.split('/');

  if ((dayToday > day && monthToday >= month && yearToday >= year) || (dayToday <= day && monthToday > month && yearToday >= year)) {
    return -1;
  }

  const date1 = new Date(`${yearToday}-${monthToday}-${dayToday}`);
  const date2 = new Date(`${year}-${month}-${day}`);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'Today';
  }

  if(diffDays === 1) {
    return 'Tomorrow';
  }

  if (diffDays > 31) {
    const diffMonths = Math.floor(diffDays / 31);

    return `In ${diffMonths} ${diffMonths > 1 ? 'months' : 'month'}`
  }

  return `In ${diffDays} days`;
}