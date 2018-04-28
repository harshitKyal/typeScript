/* =========================== */
//class definition for Facebook Class
var Facebook = /** @class */ (function () {
    function Facebook(_name, _birthday, _gender, _interestedIn, _languages, _relegiousViews, _relationship, _quote, _address, _contact, _facebookId) {
        var _this = this;
        //getter methods
        this.getFamiliy = function () {
            return _this.families;
        };
        this.getName = function () {
            return _this.name;
        };
        this.getBirthdate = function () {
            return _this.birthday;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getInterestedIn = function () {
            return _this.interestedIn;
        };
        this.getRelegiousView = function () {
            return _this.relegiousViews;
        };
        this.getQuote = function () {
            return _this.quote;
        };
        this.getLanguages = function () {
            return _this.languages;
        };
        this.getRelationShipStatus = function () {
            return _this.relationship;
        };
        this.getContact = function () {
            return _this.contact;
        };
        this.getAddress = function () {
            return _this.address;
        };
        this.getFacebookId = function () {
            return _this.facebookId;
        };
        this.getEducations = function () {
            return _this.educations;
        };
        this.getWorks = function () {
            return _this.works;
        };
        this.getMovies = function () {
            return _this.movies;
        };
        this.getPlaces = function () {
            return _this.places;
        };
        this.getFamilies = function () {
            return _this.families;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getMusic = function () {
            return _this.music;
        };
        this.getTvSeries = function () {
            return _this.tvSeries;
        };
        this.getFriends = function () {
            return _this.friends;
        };
        //setter methods
        this.setEducations = function (_educations) {
            _this.educations = _educations;
        };
        this.setWorks = function (_works) {
            _this.works = _works;
        };
        this.setFamilies = function (families) {
            _this.families = families;
        };
        //Other methods
        this.setPlaces = function (_places) {
            _this.places = _places;
        };
        //to set music
        this.setMusic = function (_music) {
            _this.music = _music;
        };
        //to set tv series
        this.setTvSeries = function (_tvSeries) {
            _this.tvSeries = _tvSeries;
        };
        //to set movies
        this.setMovies = function (_movies) {
            _this.movies = _movies;
        };
        //to set friend
        this.setFriend = function (_friends) {
            _this.friends = _friends;
        };
        //to add tc show
        this.setTvShows = function (_tvSeries) {
            _this.tvSeries = _tvSeries;
        };
        //to add new likes
        this.setLikes = function (_likes) {
            _this.likes = _likes;
        };
        //to add check in
        this.setCheckIn = function (_checkIns) {
            _this.checkIns = _checkIns;
        };
        //to calculate age
        this.getAge = function (dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        };
        this.name = _name;
        this.birthday = _birthday;
        this.gender = _gender;
        this.interestedIn = _interestedIn;
        this.relegiousViews = _relegiousViews;
        this.relationship = _relationship;
        this.quote = _quote;
        this.languages = _languages;
        //this.about = _about;
        this.address = _address;
        this.contact = _contact;
        this.facebookId = _facebookId;
    }
    return Facebook;
}()); //end of class
//obejct creation by passing arguments to constructor
var user1 = new Facebook("Harshit", "06/08/1994", "Male", "Female", ["English", "Hindi"], "Faith", "Single", "Dedication leads to success", "Surat", 1234512345, "Harshitkyal");
//Functions to display information from getter methods
console.log("Name : " + user1.getName());
console.log("Birthdate: " + user1.getBirthdate() + " ");
console.log("Gender : " + user1.getGender() + " ");
console.log("Age : " + user1.getAge("08/08/1994"));
console.log("interested In : " + user1.getInterestedIn());
console.log("Languages Knwon : " + user1.getLanguages() + " ");
console.log("Religious Views : " + user1.getRelegiousView() + " ");
console.log("Relationship Status : " + user1.getRelationShipStatus());
console.log("Quote: " + user1.getQuote() + " ");
console.log("Address : " + user1.getAddress() + " ");
console.log("Contact : " + user1.getContact());
console.log("Facebook Id : " + user1.getFacebookId());
//education object
var edu1 = {
    instituteName: "SCET",
    degree: "B.Tech",
    yearOfPassing: "2016-2013",
    place: "Surat",
    University: "GTU"
};
//education object
var edu2 = {
    instituteName: "1SCET",
    degree: "B.Tech",
    yearOfPassing: "2016-2013",
    place: "Surat",
    University: "GTU"
};
//work object
var work = {
    companyName: "GFL",
    Position: "Software Developer",
    location: "Surat",
    experience: "1 Year",
    working_hours: 8
};
//family object
var family = {
    Name: "Harsh",
    Gender: "Male",
    relation: "Brother"
};
//music object
var music = {
    Name: "Tere Sang",
    Composer: "Honey Ping"
};
//movies object
var movies = {
    Name: "Ek Tha Tiger",
    Star_cast: "Salman Khan"
};
//tvseries object
var tvSeries = {
    Name: "Friends",
    Season: 10
};
// friends array
var friends = ["Arun", "Ashish"];
//use setter methods to set details
user1.setFriend(friends);
user1.setEducations([edu2]);
user1.setWorks([work]);
user1.setFamilies([family]);
user1.setPlaces(["Books", "surat"]);
user1.setLikes(["Reading Books", "Cricket"]);
user1.setMusic([music]);
user1.setMovies([movies]);
user1.setTvSeries([tvSeries]);
//getter methods to display details on console
console.log("Friends : " + user1.getFriends());
console.log("Education Details :");
console.log(user1.getEducations());
console.log("Work Details :");
console.log(user1.getWorks());
console.log("Family Details :");
console.log(user1.getFamilies());
console.log("Check Ins :");
console.log(user1.getPlaces());
console.log("Likes :");
console.log(user1.getLikes());
console.log("Music : ");
console.log(user1.getMusic());
console.log("Movies : ");
console.log(user1.getMovies());
console.log("Tv Series :");
console.log(user1.getTvSeries());
console.log("--------------------------------");
