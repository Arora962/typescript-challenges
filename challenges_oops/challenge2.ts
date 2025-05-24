class FeedbackBox<T> {
    private items: T[] = [];

    public add(item: T): void {
        this.items.push(item);
    }

    public getAll(): T[] {
        return this.items;
    }
}
function getFirstItem<T>(array: T[]): T | undefined {
    return array[0];
}

// === Testing ===

const numericFeedback = new FeedbackBox<number>();
numericFeedback.add(10);
numericFeedback.add(9);
console.log("Numeric Feedback:", numericFeedback.getAll()); // [10, 9]

const scores = [99, 85, 100];
const firstScore = getFirstItem(scores);
console.log("First score:", firstScore);