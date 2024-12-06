const getAge = function(yearOfBirth, yearOfDeath){
    if(!yearOfDeath){
        yearOfDeath = new Date().getFullYear();
    }
    return yearOfDeath - yearOfBirth
};

const findTheOldest = function(people) {

    let oldestPerson = people[0]
    console.log(oldestPerson.name)
    people.forEach(person => {
        if (getAge(person.yearOfBirth, person.yearOfDeath) > getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath)){
            oldestPerson = person
        }
    });

    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
