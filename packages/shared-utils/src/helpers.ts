/**
 * Converts the given string to sentence-case which is
 * uppercase first letter, lowercase everything after.
 * @param str the string to convert
 * @returns the converted string
 */
export function toSentenceCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Formats a date string to hungarian.
 * @param str ISO date or date-time string
 * @returns the formatted date string
 */
export function toDateHU(str: string) {
  return new Date(str).toLocaleDateString("hu", { dateStyle: "long" });
}

/**
 * Formats a date-time string to hungarian.
 * @param str ISO date-time string
 * @returns the formatted date string
 */
export function toDateTimeHU(str: string) {
  return new Date(str).toLocaleString("hu", { dateStyle: "short", timeStyle: "short" });
}

/**
 * Takes an object and returns a copy of it in with any keys that holds
 * an empty value (false, null, undefined, "", NaN) removed.
 * @param obj the object to strip
 * @returns The object without empty fields
 */
export function removeEmpty<T extends { [k: string]: unknown }>(obj: T) {
  const temp = { ...obj };
  Object.entries(temp).forEach(([key, value]) => {
    if (!value && value !== 0) delete temp[key];
  });
  return temp;
}

/**
 * Formats the date as a relative date compared to another.
 * @param d1 a date object
 * @param d2 optional date to compare to (defaults to the current date)
 * @returns a formatted relative distance between the dates in hungarian
 */
export function getRelativeTime(d1: Date, d2 = new Date()) {
  // in miliseconds
  const units = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: (24 * 60 * 60 * 1000 * 365) / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000,
  };

  const rtf = new Intl.RelativeTimeFormat("hu", { numeric: "auto" });
  const elapsed = d1.getTime() - d2.getTime();

  // "Math.abs" accounts for both "past" & "future" scenarios
  for (let u in units)
    if (Math.abs(elapsed) > units[u as keyof typeof units] || u == "second")
      return rtf.format(
        Math.round(elapsed / units[u as keyof typeof units]),
        u as Intl.RelativeTimeFormatUnit,
      );
}
