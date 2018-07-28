//Only name and mobileNumber are private rest are public (because facebook :P) for easy manipulation.
var Facebook = /** @class */ (function () {
    function Facebook(name, mobileNumber, work, skills, university, school, placesLived, dateOfBirth, gender, inRelationship) {
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.work = work;
        this.skills = skills;
        this.university = university;
        this.school = school;
        this.placesLived = placesLived;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.inRelationship = inRelationship;
    }
    //function that returns about section of a user
    Facebook.prototype.getAbout = function () {
        return {
            name: this.name,
            mobileNumber: this.mobileNumber,
            work: this.work,
            skills: this.skills,
            university: this.university,
            school: this.school,
            placesLived: this.placesLived,
            dateOfBirth: this.dateOfBirth,
            gender: this.gender,
            inRelationship: this.inRelationship
        };
    };
    //function allows user to change mobile number
    Facebook.prototype.changeMobileNumber = function (newNumber) {
        this.mobileNumber = newNumber;
    };
    //function allows user to change his name
    Facebook.prototype.changeName = function (newName) {
        this.name = newName;
    };
    return Facebook;
}());
console.log("::::::::::Facebook::::::::::\n\n");
//create new object
var user = new Facebook("Suhas", "123", "AIT", ["HTML", "CSS", "JS"], ["AIT"], ["KV", "APL"], ["Blore"], "23 apr 1997", "male", false);
var about = user.getAbout();
console.log(about);
