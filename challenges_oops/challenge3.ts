// --- 1. InstructorOrAdmin union type ---
type Instructor = {
    name: string;
    role: "instructor";
    courses: string[];
};

type Admin = {
    name: string;
    role: "admin";
    permissions: string[];
};

type InstructorOrAdmin = Instructor | Admin;

function printUserInfo(user: InstructorOrAdmin): void {
    console.log(`Name: ${user.name}`);
    if (user.role === "instructor") {
        console.log(`Teaches: ${user.courses.join(", ")}`);
    } else if (user.role === "admin") {
        console.log(`Permissions: ${user.permissions.join(", ")}`);
    }
}
const instructor: Instructor = { name: "Kriti", role: "instructor", courses: ["Math", "Physics"] };
const admin: Admin = { name: "Sai", role: "admin", permissions: ["manage-users", "edit-settings"] };
printUserInfo(instructor);
printUserInfo(admin);

// --- 2. ReadonlyAssignment ---
type Assignment = {
    title: string;
    dueDate: Date;
    points: number;
};

type ReadonlyAssignment = Readonly<Assignment>;

const hw: ReadonlyAssignment = {
    title: "Science Project",
    dueDate: new Date("2025-06-01"),
    points: 100
};

console.log(`Assignment: ${hw.title}, Due: ${hw.dueDate.toDateString()}, Points: ${hw.points}`);

// --- 3. StatsAsStrings ---

type LearnerStats = {
    quizzes: number;
    videos: number;
    assignments: number;
};

type StatsAsStrings = {
    [K in keyof LearnerStats]: string;
};

const stringStats: StatsAsStrings = {
    quizzes: "10",
    videos: "5",
    assignments: "3"
};

console.log("Learner Stats as Strings:");
for (const key in stringStats) {
    console.log(`- ${key}: ${stringStats[key as keyof StatsAsStrings]}`);
}
