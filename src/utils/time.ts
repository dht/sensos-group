import dayjs from 'dayjs';

export const date = () => {
  return dayjs().format('YYYY-MM-DD');
};

export const time = (amPm?: boolean) => {
  const output = { hours: '12', minutes: '40', suffix: 'AM' };

  const date = dayjs();

  output.hours = !amPm ? date.format('HH') : date.format('hh');
  output.minutes = date.format('mm');
  output.suffix = amPm ? date.format('A') : '';

  return output;
};
