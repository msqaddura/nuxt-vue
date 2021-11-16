const _MS_PER_DAY = 1000 * 60 * 60 * 24
export class DateUtils {
  static twoDigits(md: number) {
    return `${md}`.length === 1 ? `0${md}` : md
  }

  static dateDiffInDays(date: Date) {
    const today = new Date()
    const utcToday = Date.UTC(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    )
    const utcDate = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    )

    return Math.floor((utcToday - utcDate) / _MS_PER_DAY)
  }

  static subtractDaysFromToday(days: number) {
    const today = new Date()
    return new Date().setTime(today.getTime() - days * _MS_PER_DAY)
  }
}
