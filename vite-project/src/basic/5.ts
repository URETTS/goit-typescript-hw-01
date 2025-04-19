enum DayOfWeek {
 Monday,
 Tuesday,
 Wednesday,
 Thursday,
 Friday,
 Saturday,
 Sunday
}

const isWeekend = (day: DayOfWeek): void => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    console.log('day: off');
  } else {
    console.log('day: on');
  }
};