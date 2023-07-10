interface TransformedData {
    date: string;
    contributions: number;
}

export function mergeContributions(...dataSources: TransformedData[][]): TransformedData[] {
    const mergedData: TransformedData[] = [];
    const mergedDates: string[] = [];

    dataSources.forEach((dataSource) => {
        dataSource.forEach((entry) => {
            if (mergedDates.includes(entry.date)) {
                const existingEntry = mergedData.find((item) => item.date === entry.date);
                if (existingEntry) {
                    existingEntry.contributions += entry.contributions;
                }
            } else {
                mergedData.push({ date: entry.date, contributions: entry.contributions });
                mergedDates.push(entry.date);
            }
        });
    });

    return mergedData;
}
