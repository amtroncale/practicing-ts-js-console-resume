const displayPosition = (company: string, title: string, description: string) =>
    console.log('* ' + company + ' | ' + title + ' | ' + description );

const displaySkill = (skill: string, isCool = false) =>
    console.log ((isCool ? 'BAM: ' : '') + skill);

console.log(`
Name: ${'adam m. troncale'.toUpperCase()}
Career: Full Stack Developer
Description: All-Around Good Guy

My Interests:
* Sports
* Cooking
* Reading
* Painting

My Previous Experience:
`);

displayPosition('Interstar Transportation', 'National Account Manager', 'Sales');
displayPosition('Greenway Health', 'Customer Support Manager', 'Support/Management');
displayPosition('Smith & Ely, LLC', 'Investigator/Paralegal', 'Insurance Defense');

console.log('\r\nSkills:');

displaySkill('Painting', true);
displaySkill('Denture fitting');
displaySkill('Sales', true);
displaySkill('Writing', true);
displaySkill('Garbage Collection');