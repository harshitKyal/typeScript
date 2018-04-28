/* =========================== */
//class definition for Facebook Class
var Facebook = /** @class */ (function () {
    function Facebook(_name, _birthday, _gender, _interestedIn, _languages, _relegiousViews, _relationship, _about, _quote, _address, _contact, _facebookId) {
        var _this = this;
        //getter methods
        this.getFamiliy = function () {
            return _this.families;
        };
        this.getEducations = function () {
            return _this.educations;
        };
        this.getWorks = function () {
            return _this.works;
        };
        this.setFamilies = function (families) {
            _this.families = families;
        };
        //setter methods
        this.setEducations = function (educations) {
            _this.educations = educations;
        };
        this.setWorks = function (works) {
            _this.works = works;
        };
        //Other methods
        this.addPlaces = function (place) {
            _this.places.push(place);
        };
        this.addFriend = function (friend) {
            _this.friends.push(friend);
        };
        this.addNewTvShows = function (tvSeries) {
            _this.tvSeries.push(tvSeries);
        };
        this.addNewMovies = function (movie) {
            _this.movies.push(movie);
        };
        this.addNewLikes = function (like) {
            _this.likes.push(like);
        };
        this.addCheckIn = function (checkIn) {
            _this.checkIns.push(checkIn);
        };
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
        this.about = _about;
        this.address = _address;
        this.contact = _contact;
        this.facebookId = _facebookId;
    }
    return Facebook;
}()); //end of class
//objects creation
//object one
var userOne = new Facebook("Shahrukh", "08/08/1994", "Male", "Female", ["Urdu", "English", "Hindi"], "Humanity", "Single", "Life is beutiful", "Great minds think alone", "Jalna-Maharashtra", 7840962887, "srk.Sayyed");
var edu1 = {
    instituteName: "SCET",
    degree: "B.Tech",
    yearOfPassing: "2016-2013",
    place: "Surat",
    University: "GTU"
};
var work = {
    companyName: "GFL",
    Position: "Software Developer",
    location: "Surat",
    experience: "1 Year",
    working_hours: 8
};
userOne.setEducations([edu1]);
userOne.setWorks([work]);
var fam = {
    Name: "Harsh",
    Gender: "Male",
    relation: "Brother"
};
userOne.setFamilies([fam]);
console.log("Data of Facebook Page Class");
console.log(userOne);
console.log("--------------------------------");
