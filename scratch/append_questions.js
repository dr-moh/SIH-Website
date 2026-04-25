const fs = require('fs');

const transformedQuestions = JSON.parse(fs.readFileSync('transformed_questions.json', 'utf8'));
let questionsJsContent = fs.readFileSync('js/questions.js', 'utf8');

// Find the last index of '];' and insert the new questions before it
const lastBracketIndex = questionsJsContent.lastIndexOf('];');
if (lastBracketIndex !== -1) {
    const newContent = transformedQuestions.map(q => JSON.stringify(q, null, 2)).join(',\n');
    const updatedContent = questionsJsContent.slice(0, lastBracketIndex) + ',\n' + newContent + '\n];';
    fs.writeFileSync('js/questions.js', updatedContent);
    console.log('Successfully appended ' + transformedQuestions.length + ' questions to js/questions.js');
} else {
    console.error('Could not find the end of the QUESTIONS array in js/questions.js');
}
