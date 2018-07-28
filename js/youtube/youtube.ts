//interface used by Uploader class by a method returning meta-info about uploader
interface upladerDetails{
	uploaderName: string,
	thumbnailURL: string,
	subscriberCount: number
}

//interface used by video class by a method returning video details
interface videoDetails {
	title: string,
	uploadDate: string,
	views: number,
	ageRestricted: boolean,
	description: string,
	categorey: string,
	likes: number,
	dislikes: number,
	uploader: upladerDetails 	//video deteails also has property for uploader
}

//Video details
class Video {
	private videoID: string;
	private uploader: Uploader;		//For uploader details
	private title: string;
	private uploadDate: string;
	private views: number;
	private ageRestricted: boolean;
	private description: string;
	private categorey: string;
	private likes: number;
	private dislikes: number;

	constructor(videoID: string, uploader: Uploader, title: string, uploadDate: string, 
		ageRestricted: boolean, description: string, categorey: string) {

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
	public incrementViews(): void {
		this.views += 1;
	}

	public incrementLikes(): void {
		this.likes += 1;
	}

	public incrementDislikes(): void {
		this.dislikes += 1;
	}

	public decrementViews(): void {
		this.views -= 1;
	}

	public decrementLikes(): void {
		this.likes -= 1;
	}

	public decrementDislikes(): void {
		this.dislikes -= 1;
	}

	//get the title, likes, dislikes, views count, uploader info etc...
	public getVideoInfo(): videoDetails {
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
		}
	}

	//get related videos 
	public relatedVideos(): Video[] {
		//Related video Logic goes here
		return [];
	}

}

//Uploader details
class Uploader {
	private uploaderID: string;
	private uploaderName: string;
	private thumbnailURL: string;
	private subscriberCount: number;
	protected videos: Video[];			//list videos of type Video

	constructor(uploaderID: string, uploaderName: string, thumbnailURL: string, subscriberCount: number) {
		this.uploaderID = uploaderID;
		this.uploaderName = uploaderName;
		this.thumbnailURL = thumbnailURL;
		this.subscriberCount = subscriberCount;
		this.videos = [];		//new uploader has zero videos
	}
	//upload new video 
	public newVideo (video: Video): void {
		this.videos.push(video);
	}

	//list out videos by a uploader
	public getAllVideos(): Video[] {
		return this.videos;
	}

	//get uploader details
	public getUploaderInfo() : upladerDetails {
		return {
			"uploaderName":this.uploaderName,
			"thumbnailURL": this.thumbnailURL,
			"subscriberCount": this.subscriberCount
		};
	}
	//increment subscriber count by one
	public incrementSubscriberCount(): void {
		this.subscriberCount += 1;
	}

	//decrement subscriber count by one
	public decrementSubscriberCount(): void {
		this.subscriberCount -= 1;
	}

}

console.log("::::::::::YOUTUBE::::::::::\n");

//create new uploader
let uploader = new Uploader("123", "outstar", "/thumbnails/123", 50);
//create new video for that uploader
let video = new Video("aa1", uploader, "Cyberpunk 2077", "23 mar 2007", true, "follow me on twitter", "Entertainment");
uploader.newVideo(video);

let videoInfo = video.getVideoInfo();

console.log(videoInfo);

