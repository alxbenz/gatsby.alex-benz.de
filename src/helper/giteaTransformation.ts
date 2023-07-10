export const transformData = (data: any) => {
    return data.reduce(
        (result: any, entry: any) => {
            const date = new Date(entry.timestamp * 1000)
                .toISOString()
                .split("T")[0];
            const existingEntry = result.find(
                (item: any) => item.date === date
            );

            if (existingEntry) {
                existingEntry.contributions += entry.contributions;
            } else {
                result.push({ date, contributions: entry.contributions });
            }

            return result;
        },
        []
    );
}