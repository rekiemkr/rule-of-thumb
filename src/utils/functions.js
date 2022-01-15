export function calculatePercentage(votes) {
    const total = votes.positive + votes.negative;
    const percentages = {
        positive: +(votes.positive / total * 100).toFixed(2),
        negative: +((votes.negative / total) * 100).toFixed(2),
    }
    console.log(percentages);
    return percentages
}