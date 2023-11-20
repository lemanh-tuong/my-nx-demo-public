# Overview
The `isClampDate` function checks if a given date lies within a specified range. It is useful for scenarios where you need to validate if a certain date is within a permissible time frame.

# API

##### Parameters
- **date**: `Dayjs`: The date you want to check.
- **minDate**: `Dayjs`: The starting date of the range.
- **maxDate**: `Dayjs`: The ending date of the range.

##### Return value
- `true`: if the given date lies within (or is the same as) the minimum and maximum dates.
- `false`: otherwise.

# Examples
1. Checking if today is within the range of the current year
```typescript
const today = dayjs();
const isDayOfCurrentYear = isClampDate({
  date: today,
  minDate: today.startOf('year'),
  maxDate: today.endOf('year')
}); // true
```
