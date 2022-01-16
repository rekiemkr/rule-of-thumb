export function calculatePercentage(votes) {
    const total = votes.positive + votes.negative;
    const percentages = {
        positive: total && +(votes.positive / total * 100).toFixed(2),
        negative: total && +((votes.negative / total) * 100).toFixed(2),
    }
    return percentages
}