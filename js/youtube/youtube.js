//Video details
var Video = /** @class */ (function () {
    function Video(videoID, uploader, title, uploadDate, ageRestricted, description, categorey) {
        this.videoID = videoID;
        this.uploader = uploader;
        this.title = title;
        this.uploadDate = uploadDate;
        this.ageRestricted = ageRestricted;
        this.description = description;
        this.categorey = categorey;
        this.likes = 0;
        this.dislikes = 0;
        this.views = 0;
    }
    //modify video properties
    Video.prototype.incrementViews = function () {
        this.views += 1;
    };
    Video.prototype.incrementLikes = function () {
        this.likes += 1;
    };
    Video.prototype.incrementDislikes = function () {
        this.dislikes += 1;
    };
    Video.prototype.decrementViews = function () {
        this.views -= 1;
    };
    Video.prototype.decrementLikes = function () {
        this.likes -= 1;
    };
    Video.prototype.decrementDislikes = function () {
        this.dislikes -= 1;
    };
    //get the title, likes, dislikes, views count, uploader info etc...
    Video.prototype.getVideoInfo = function () {
        return {
            "title": this.title,
            "uploadDate": this.uploadDate,
            "views": this.views,
            "ageRestricted": this.ageRestricted,
            "description": this.description,
            "categorey": this.categorey,
            "likes": this.likes,
            "dislikes": this.dislikes,
            "uploader": this.uploader.getUploaderInfo()
        };
    };
    //get related videos 
    Video.prototype.relatedVideos = function () {
        //Related video Logic goes here
        return [];
    };
    return Video;
}());
//Uploader details
var Uploader = /** @class */ (function () {
    function Uploader(uploaderID, uploaderName, thumbnailURL, subscriberCount) {
        this.uploaderID = uploaderID;
        this.uploaderName = uploaderName;
        this.thumbnailURL = thumbnailURL;
        this.subscriberCount = subscriberCount;
        this.videos = []; //new uploader has zero videos
    }
    //upload new video 
    Uploader.prototype.newVideo = function (video) {
        this.videos.push(video);
    };
    //list out videos by a uploader
    Uploader.prototype.getAllVideos = function () {
        return this.videos;
    };
    //get uploader details
    Uploader.prototype.getUploaderInfo = function () {
        return {
            "uploaderName": this.uploaderName,
            "thumbnailURL": this.thumbnailURL,
            "subscriberCount": this.subscriberCount
        };
    };
    //increment subscriber count by one
    Uploader.prototype.incrementSubscriberCount = function () {
        this.subscriberCount += 1;
    };
    //decrement subscriber count by one
    Uploader.prototype.decrementSubscriberCount = function () {
        this.subscriberCount -= 1;
    };
    return Uploader;
}());
console.log("::::::::::YOUTUBE::::::::::\n");
//create new uploader
var uploader = new Uploader("123", "outstar", "/thumbnails/123", 50);
//create new video for that uploader
var video = new Video("aa1", uploader, "Cyberpunk 2077", "23 mar 2007", true, "follow me on twitter", "Entertainment");
uploader.newVideo(video);
var videoInfo = video.getVideoInfo();
console.log(videoInfo);
