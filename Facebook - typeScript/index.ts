

//class definition for Facebook Class

class Facebook{
    
    //method to suggest friends which takes facebook Id as input and suggest friends accordingly
    friendSuggestion : (facebookId:string) => object;
    //methods to display adds
    displayAdds : (facebookId:string) => object;

    private educations!: object[];
    private works!: object[];
        
    //Basic Info
    private name : string
    private birthday : string
    private gender : string
    private interestedIn : string
    private languages!: string[];
    private relegiousViews :string
    private relationship :string
    private quote : string
    private address : string
    private contact : number
    private facebookId : string
    private families!: object[];

    private places!: string[];
    private friends!: string[];
    private checkIns!: object[];
    private music!: object[];
    private movies!: object[];
    private tvSeries!: object[];
    private books!: object[];
    private likes!: string[];


    constructor(_name : string,_birthday : string,_gender : string,_interestedIn : string,_languages : string [],
        _relegiousViews :string,_relationship :string,
        _quote : string,_address : string,_contact : number,_facebookId : string)
    {
        this.name = _name;
        this.birthday = _birthday;
        this.gender = _gender;
        this.interestedIn = _interestedIn;
        this.relegiousViews = _relegiousViews;
        this.relationship = _relationship;
        this.quote = _quote;
        this.languages = _languages
        //this.about = _about;
        this.address = _address
        this.contact = _contact
        this.facebookId = _facebookId
    }

    //getter methods
    getFamiliy = ():object[] =>{
        return this.families;
    }
    getName = ():string =>{
        return this.name;
    }
    getBirthdate = ():string => {
        return this.birthday;
    }
    getGender = ():string =>{
        return this.gender;
    }
    getInterestedIn = ():string =>{
        return this.interestedIn;
    }
    getRelegiousView = ():string =>{
        return this.relegiousViews;
    }
    getQuote = ():string => {
        return this.quote;
    }
    getLanguages = ():string[] =>{
        return this.languages;
    }
    getRelationShipStatus = ():string =>{
        return this.relationship;
    }
    getContact = ():number => {
        return this.contact;
    }
    getAddress = ():string => {
        return this.address;
    }
    getFacebookId = ():string => {
        return this.facebookId;
    }
    getEducations = ():object[] =>{
        return this.educations
    }
    getWorks = ():object[] =>{
        return this.works
    }
    getMovies = ():object[] => {
        return this.movies;
    }
    getPlaces = ():string[] => {
        return this.places;
    }
    getFamilies = ():object[] =>{
        return this.families;
    }
    getLikes =():string[] =>{
        return this.likes;
    }
    getMusic = ():object[] => {
        return this.music;
    }
    getTvSeries = ():object[] => {
        return this.tvSeries;
    }
    getFriends = ():string[] => {
        return this.friends;
    }
    
    //setter methods
    setEducations = (_educations : object[]) =>{
        this.educations = _educations;
    }
    setWorks = (_works : object []) =>{
        this.works = _works;
    }
    setFamilies = (families : object []) =>{
        this.families = families
    }
    //Other methods
    setPlaces = (_places : string[]) =>{
        this.places = _places
    }
    //to set music
    setMusic = (_music : object[] ) => {
        this.music = _music;
    }
    //to set tv series
    setTvSeries = (_tvSeries : object[]) => {
        this.tvSeries = _tvSeries;
    }
    //to set movies
    setMovies = (_movies : object[]) => {
        this.movies = _movies;
    }
    //to set friend
    setFriend =(_friends : string[]) => {
        this.friends = _friends;
    }
    //to add tc show
    setTvShows= (_tvSeries:object[]) => {
        this.tvSeries = _tvSeries
    }
    //to add new likes
    setLikes = (_likes:string[]) => {
        this.likes = _likes
    }
    //to add check in
    setCheckIn = (_checkIns:object[]) => {
        this.checkIns = _checkIns
    }
    //to calculate age
    getAge = (dateString:string):number => {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age
    }

      
}//end of class

//obejct creation by passing arguments to constructor
let user1 = new Facebook("Harshit","06/08/1994","Male","Female",["English","Hindi"],"Faith",
"Single","Dedication leads to success","Surat",1234512345,"Harshitkyal");

//Functions to display information from getter methods
console.log(`Name : ${user1.getName()}`)
console.log(`Birthdate: ${user1.getBirthdate()} `)
console.log(`Gender : ${user1.getGender()} `)
console.log(`Age : ${user1.getAge("08/08/1994")}`)
console.log(`interested In : ${user1.getInterestedIn()}`)
console.log(`Languages Knwon : ${user1.getLanguages()} `)
console.log(`Religious Views : ${user1.getRelegiousView()} `)
console.log(`Relationship Status : ${user1.getRelationShipStatus()}`)
console.log(`Quote: ${user1.getQuote()} `)
console.log(`Address : ${user1.getAddress()} `)
console.log(`Contact : ${user1.getContact()}`)
console.log(`Facebook Id : ${user1.getFacebookId()}`)

//education object
let edu1 = {
    instituteName : "SCET",
    degree : "B.Tech",
    yearOfPassing:"2017",
    place:"Surat",
    University:"GTU"
}

//education object
let edu2 = {
    instituteName : "1SCET",
    degree : "B.Tech",
    yearOfPassing:"2017",
    place:"Surat",
    University:"GTU"
}
//work object
let work = {
    companyName :"GFL",
    Position: "Software Developer",
    location : "Surat",
    experience :"1 Year",
    working_hours:8,
}

//family object
let family = {
    Name : "Harsh",
    Gender:"Male",
    relation : "Brother"    
}

//music object
let music = {
    Name : "Tere Sang",
    Composer : "Honey Ping"
}

//movies object
let movies = {
    Name :"Ek Tha Tiger",
    Star_cast : "Salman Khan"
}
//tvseries object
let tvSeries ={
    Name : "Friends",
    Season : 10
}
// friends array
let friends = ["Arun" , "Ashish"];

//use setter methods to set details
user1.setFriend(friends);
user1.setEducations([edu2])
user1.setWorks([work])
user1.setFamilies([family])
user1.setPlaces(["Books","surat"])
user1.setLikes(["Reading Books","Cricket"])
user1.setMusic([music])
user1.setMovies([movies])
user1.setTvSeries([tvSeries])

//getter methods to display details on console
console.log(`Friends : ${user1.getFriends()}`)
console.log(`Education Details :`)
console.log(user1.getEducations())
console.log(`Work Details :`)
console.log(user1.getWorks())
console.log(`Family Details :`)
console.log(user1.getFamilies())
console.log(`Check Ins :`)
console.log(user1.getPlaces())
console.log(`Likes :`)
console.log(user1.getLikes())
console.log(`Music : `)
console.log(user1.getMusic())
console.log(`Movies : `)
console.log(user1.getMovies())
console.log(`Tv Series :`)
console.log(user1.getTvSeries())
    
console.log("--------------------------------")