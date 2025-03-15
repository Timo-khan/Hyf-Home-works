function getEventWeekday(daysFromToday) {
    const today = new Date();
    const todayWeekday = today.getDay();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const eventDay = (todayWeekday + daysFromToday) % 7;
    return weekdays[eventDay];
  }
  
  console.log(getEventWeekday(9));
  console.log(getEventWeekday(2));