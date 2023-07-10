export const transformData = (data: any) => {
    return data.weeks.reduce((result: any, week: any) => {
        week.contributionDays.forEach((contributionDay: any) => {
            const existingEntry = result.find((entry: any) => entry.date === contributionDay.date);

            if (existingEntry) {
                existingEntry.contributions += contributionDay.contributionCount;
            } else {
                result.push({
                    date: contributionDay.date,
                    contributions: contributionDay.contributionCount,
                });
            }
        });

        return result;
    }, []);

}