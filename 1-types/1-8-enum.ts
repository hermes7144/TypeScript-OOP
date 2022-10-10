{
  // Enum

  // TypeScript

  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);
  let day: Days = Days.Saturday;
  day = 1;
  console.log(day);

  // enum은 string literal & union로 교체 가능?
  type DaysOfWeek = 'Monday' | 'TuesDay' | 'Wednesday';

  let dayOfWeek: DaysOfWeek = 'TuesDay';
  dayOfWeek = 'ellie';
}
