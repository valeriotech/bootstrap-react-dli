export default function HowManyWeeks(date) {

    function getWeeksDiff(startDate, endDate) {
        const msInWeek = 1000 * 60 * 60 * 24 * 7;
        return (Math.abs(endDate - startDate) / msInWeek);
    }

    return getWeeksDiff(date, new Date())
}