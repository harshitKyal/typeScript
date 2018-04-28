// defining a class
class YouTubeVideo {

   //properties
   private title:string;
   private numberOfViews: number;
   private numberOfLikes :number;
   private numberOfDislikes : number;
   private numberOfSubscriber :number;
   private numberOfComments : number;
   private url:string;
   private publishedBy: string;
   private postedOn: string;
   private description:string;
   private category:string;
   private license : string;
   private videoLength : string;
   private comments!: object[];
    //constructor for initializing properties
   constructor (_title:string,_url:string,_postedBy:string,_postedOn:string,_category:string,_license:string,_videoLength:string,_description?:any){
       this.title= _title;
       this.url= _url;
       // at the time of posting a video all these info would be zero
       this.numberOfComments = 0;
       this.numberOfDislikes = 0;
       this.numberOfLikes = 0;
       this.numberOfSubscriber = 0 ;
       this.numberOfViews = 0;
       this.publishedBy=  _postedBy;
       this.postedOn= _postedOn;
       this.category = _category;
       this.license = _license;
       this.videoLength = _videoLength;
       this.description= _description;
    }// end constructor
    
    // methods as i have set private so to access them these are methods with 'return' data type as well
    getTitle= ():string=>{
        return this.title;
    }
    getNumberOfLikes= ():number=>{
        return this.numberOfLikes;
    }
    getNumberOfDislikes= ():number=>{
        return this.numberOfDislikes;
    }
    getNumberOfComments = () : number=>{
        return this.numberOfComments;
    }
    getVideoCategory =():string=>{
        return this.category;
    }
    getVideoLicense =() : string => {
        return this.license;
    }
    getVideoLength = () : string =>{
        return this.videoLength;
    }
    getNumberOfSubscriber= ():number=>{
        return this.numberOfSubscriber;
    }
    getNumberOfViews= ():number=>{
        return this.numberOfViews;
    }
    getVideoUrl= ():string=>{
        return this.url;
    }
    getPublishedBy= ():string=>{
        return this.publishedBy;
    }
    getPostedOn= ():string=>{
        return this.postedOn;
    }
    getDescription= ():string=>{
        if(this.description!=undefined){
           return this.description;          
        }
        else{
            return `No description`;
        }
    }
    //end get methods

    //setter and other methods  
    //setter methods
    setTitle=(_title:string) =>{
         this.title=_title;
    }
    setDescription=(_description:string) =>{
        this.description=_description;
    }
    setPostedOn=(_posted_On:string) =>{
         this.postedOn=_posted_On;
    }
    setPublishedBy=(_publishedBy:string) =>{
         this.publishedBy=_publishedBy;
    }
    setVideoCategory = (_category:string) => {
        this.category = _category;
    }
    setVideoLicense = (_license:string) =>{
        this.license = _license;
    }
    setUrl=(_url:string)=>{
         this.url = _url;
    }
    setVideoLength= (_length:string)=>{
        this.videoLength = _length;
    }
    //method to add comment
    // increment number of comment on adding comment
    addComment=(_comment:object[])=>{
        this.comments = _comment;
        this.numberOfComments++;
        
    }
    // if user likes the video 
    IncrementLikes=()=> {                                                                            
        this.numberOfLikes++;
    }
    //if dislike by user
    incrementDislikes=()=> {
        this.numberOfDislikes++;
    }
    // on viewing the video
    incrementView = () =>{
        this.numberOfViews++;
    }
    incrementSubscriber = () => {
        this.numberOfSubscriber++;
    }
    //getting all comments,related videos and recomended videos
    getAllComments = (): object[] =>{
        return this.comments;
    };
    getRelatedVideos!: () => object[];
    getRecommendedVideos!: () => object[];    
    
 }// end class     
    
    let youTubeVideo=new YouTubeVideo(`Learn TypeScript for beginners`,`https://www.youtube.com/watch?v=xqYD8QXJX9U`,
                               `NET Interview Preparation videos`,`20th Sept,2016`,`Education`,`Standard YouTube License`,`28:20`,`Enjoy`); //object creation(instantiation) and use of template literal
    console.log (`\nVideo information`);
    console.log(`Video Title: ${youTubeVideo.getTitle()}`);
    console.log(`Video Url : ${youTubeVideo.getVideoUrl()}`)
    console.log(`Published By: ${youTubeVideo.getPublishedBy()}`);
    console.log(`Video Length : ${youTubeVideo.getVideoLength()} minutes`)
    console.log(`Posted on: ${youTubeVideo.getPostedOn()}`);
    console.log(`Video Description: ${youTubeVideo.getDescription()}`);
    console.log(`Video Category : ${youTubeVideo.getVideoCategory()}`)
    console.log(`Video License : ${youTubeVideo.getVideoLicense()}`)

    //comment object
    let comment = {
        name:"Arun",
        comment:"Superb Video"
    }
    
    //on viewing video
    youTubeVideo.incrementView();
    //on clicking on subscribe button
    youTubeVideo.incrementSubscriber();
    //on clicking like button
    youTubeVideo.IncrementLikes();
    //on clicking on dislike button
    youTubeVideo.incrementDislikes();
    
    console.log(`Number Of views: ${youTubeVideo.getNumberOfViews()}`);
    console.log(`Number of likes: ${youTubeVideo.getNumberOfLikes()}`);
    console.log(`Number of Dislikes: ${youTubeVideo.getNumberOfDislikes()}`);
    console.log(`Number of Subscriber: ${youTubeVideo.getNumberOfSubscriber()}`);
    
    //other details
    //adding comment
    // this will also increment the numberOfComments value by 1
    youTubeVideo.addComment([comment]);
    console.log(`Number Of Comments : ${youTubeVideo.getNumberOfComments()}`)

    console.log(`All comments List:`);
    console.log(youTubeVideo.getAllComments());
    //console.log(`All related Videos: ${youTubeVideo.getRelatedVideos()}`);
    //console.log(`All recommended Videos: ${youTubeVideo.getRecommendedVideos()}`);
 