// defining a class
var YouTubeVideo = /** @class */ (function () {
    //constructor for initializing properties
    function YouTubeVideo(_title, _url, _postedBy, _postedOn, _category, _license, _videoLength, _description) {
        var _this = this;
        // methods as i have set private so to access them these are methods with 'return' data type as well
        this.getTitle = function () {
            return _this.title;
        };
        this.getNumberOfLikes = function () {
            return _this.numberOfLikes;
        };
        this.getNumberOfDislikes = function () {
            return _this.numberOfDislikes;
        };
        this.getNumberOfComments = function () {
            return _this.numberOfComments;
        };
        this.getVideoCategory = function () {
            return _this.category;
        };
        this.getVideoLicense = function () {
            return _this.license;
        };
        this.getVideoLength = function () {
            return _this.videoLength;
        };
        this.getNumberOfSubscriber = function () {
            return _this.numberOfSubscriber;
        };
        this.getNumberOfViews = function () {
            return _this.numberOfViews;
        };
        this.getVideoUrl = function () {
            return _this.url;
        };
        this.getPublishedBy = function () {
            return _this.publishedBy;
        };
        this.getPostedOn = function () {
            return _this.postedOn;
        };
        this.getDescription = function () {
            if (_this.description != undefined) {
                return _this.description;
            }
            else {
                return "No description";
            }
        };
        //end get methods
        //setter and other methods  
        //setter methods
        this.setTitle = function (_title) {
            _this.title = _title;
        };
        this.setDescription = function (_description) {
            _this.description = _description;
        };
        this.setPostedOn = function (_posted_On) {
            _this.postedOn = _posted_On;
        };
        this.setPublishedBy = function (_publishedBy) {
            _this.publishedBy = _publishedBy;
        };
        this.setVideoCategory = function (_category) {
            _this.category = _category;
        };
        this.setVideoLicense = function (_license) {
            _this.license = _license;
        };
        this.setUrl = function (_url) {
            _this.url = _url;
        };
        this.setVideoLength = function (_length) {
            _this.videoLength = _length;
        };
        //method to add comment
        // increment number of comment on adding comment
        this.addComment = function (_comment) {
            _this.comments = _comment;
            _this.numberOfComments++;
        };
        // if user likes the video 
        this.IncrementLikes = function () {
            _this.numberOfLikes++;
        };
        //if dislike by user
        this.incrementDislikes = function () {
            _this.numberOfDislikes++;
        };
        // on viewing the video
        this.incrementView = function () {
            _this.numberOfViews++;
        };
        this.incrementSubscriber = function () {
            _this.numberOfSubscriber++;
        };
        //getting all comments,related videos and recomended videos
        this.getAllComments = function () {
            return _this.comments;
        };
        this.title = _title;
        this.url = _url;
        // at the time of posting a video all these info would be zero
        this.numberOfComments = 0;
        this.numberOfDislikes = 0;
        this.numberOfLikes = 0;
        this.numberOfSubscriber = 0;
        this.numberOfViews = 0;
        this.publishedBy = _postedBy;
        this.postedOn = _postedOn;
        this.category = _category;
        this.license = _license;
        this.videoLength = _videoLength;
        this.description = _description;
    } // end constructor
    return YouTubeVideo;
}()); // end class     
var youTubeVideo = new YouTubeVideo("Learn TypeScript for beginners", "https://www.youtube.com/watch?v=xqYD8QXJX9U", "NET Interview Preparation videos", "20th Sept,2016", "Education", "Standard YouTube License", "28:20", "Enjoy"); //object creation(instantiation) and use of template literal
console.log("\nVideo information");
console.log("Video Title: " + youTubeVideo.getTitle());
console.log("Video Url : " + youTubeVideo.getVideoUrl());
console.log("Published By: " + youTubeVideo.getPublishedBy());
console.log("Video Length : " + youTubeVideo.getVideoLength() + " minutes");
console.log("Posted on: " + youTubeVideo.getPostedOn());
console.log("Video Description: " + youTubeVideo.getDescription());
console.log("Video Category : " + youTubeVideo.getVideoCategory());
console.log("Video License : " + youTubeVideo.getVideoLicense());
//comment object
var comment = {
    name: "Arun",
    comment: "Superb Video"
};
//on viewing video
youTubeVideo.incrementView();
//on clicking on subscribe button
youTubeVideo.incrementSubscriber();
//on clicking like button
youTubeVideo.IncrementLikes();
//on clicking on dislike button
youTubeVideo.incrementDislikes();
console.log("Number Of views: " + youTubeVideo.getNumberOfViews());
console.log("Number of likes: " + youTubeVideo.getNumberOfLikes());
console.log("Number of Dislikes: " + youTubeVideo.getNumberOfDislikes());
console.log("Number of Subscriber: " + youTubeVideo.getNumberOfSubscriber());
//other details
//adding comment
// this will also increment the numberOfComments value by 1
youTubeVideo.addComment([comment]);
console.log("Number Of Comments : " + youTubeVideo.getNumberOfComments());
console.log("All comments List:");
console.log(youTubeVideo.getAllComments());
//console.log(`All related Videos: ${youTubeVideo.getRelatedVideos()}`);
//console.log(`All recommended Videos: ${youTubeVideo.getRecommendedVideos()}`);
