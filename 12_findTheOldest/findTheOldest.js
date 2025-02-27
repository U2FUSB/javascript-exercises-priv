/**@param {Object[]} people */
const findTheOldest = function (people) {
    if (people.length === 0) return;
    people.sort((person1, person2) => {
        const person1Age =
            person1.yearOfDeath == undefined
                ? new Date().getFullYear() - person1.yearOfBirth
                : person1.yearOfDeath - person1.yearOfBirth;
        const person2Age =
            person2.yearOfDeath == undefined
                ? new Date().getFullYear() - person2.yearOfBirth
                : person2.yearOfDeath - person2.yearOfBirth;
        return person2Age - person1Age;
    });
    return people[0];
};
const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1953,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
