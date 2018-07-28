//interface for facebook about section 
interface about {
	name: string,
	mobileNumber: string,
	work: string,
	skills: string[],
	university: string[],
	school: string[],
	placesLived: string[],
	dateOfBirth: string,
	gender: string,
	inRelationship: boolean,
}

//Only name and mobileNumber are private rest are public (because facebook :P) for easy manipulation.
class Facebook {
	private name: string;
	private mobileNumber: string;
	public work: string;
	public skills: string[];
	public university: string[];
	public school: string[];
	public placesLived: string[];
	public dateOfBirth: string;
	public gender: string;
	public inRelationship: boolean;

	constructor(name: string, mobileNumber: string, work: string, skills: string[],
		university: string[], school: string[], placesLived: string[], dateOfBirth: string,
		gender: string, inRelationship: boolean
		) 
	{
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
	public getAbout(): about{
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
			inRelationship: this.inRelationship,
		}

	}

	//function allows user to change mobile number
	public changeMobileNumber(newNumber: string): void {
		this.mobileNumber = newNumber;
	}

	//function allows user to change his name
	public changeName(newName: string): void {
		this.name = newName;
	}
}

console.log("::::::::::Facebook::::::::::\n\n")

//create new object
let user = new Facebook("Suhas","123", "AIT", ["HTML", "CSS", "JS"], ["AIT"], ["KV", "APL"], ["Blore"], "23 apr 1997", "male", false);
let about = user.getAbout();
console.log(about);