let userLevel = null;

function setLevel(level) {
    userLevel = level;
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('lessons-section').style.display = 'block';

    const lessonsList = document.getElementById('lessons-list');
    lessonsList.innerHTML = ''; // Clear previous lessons

    const lessons = getLessons(userLevel);
    lessons.forEach(lesson => {
        const li = document.createElement('li');
        li.textContent = lesson;
        lessonsList.appendChild(li);
    });
}

function getLessons(level) {
    const beginnerLessons = [
        "Introduction to C++",
        "Basic Syntax and Data Types",
        "Control Structures: If, For, While",
        "Functions and Arrays"
    ];

    const intermediateLessons = [
        "Object-Oriented Programming in C++",
        "Pointers and Memory Management",
        "STL (Standard Template Library)",
        "File Handling in C++"
    ];

    const advancedLessons = [
        "Advanced Algorithms Implementation",
        "Optimization Techniques",
        "Competitive Programming Problems",
        "Custom Data Structures"
    ];

    switch (level) {
        case 'beginner':
            return beginnerLessons;
        case 'intermediate':
            return intermediateLessons;
        case 'advanced':
            return advancedLessons;
        default:
            return [];
    }
}

function runCode() {
    const code = document.getElementById('code-input').value;
    try {
        const output = eval(code); // Simple evaluation for demonstration
        document.getElementById('output').textContent = output;
    } catch (error) {
        document.getElementById('output').textContent = `Error: ${error.message}`;
    }
}
