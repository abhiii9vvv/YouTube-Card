const video={
    title:"InternSathi - Way to success",
    channel:"Abhinav Tiwary",
    views:"456k views",
    time:"3 days ago",
    duration:"31:20",
    thumbnail:"internsetu.png"  // Remove the leading slash
};


//card container []
const card= document.createElement("div");
card.style.width="360px";
card.style.backgroundColor="#fff";
card.style.borderRadius="12px";
card.style.overflow="hidden";
card.style.boxShadow= "0 2px 8px rgba(0,0,0,0.1)";
card.style.fontFamily="Arial, sans-serif";
card.style.margin="20px auto";

//thumbnail container
const thumbnailContainer = document.createElement("div");
thumbnailContainer.style.position="relative";
thumbnailContainer.style.width="100%";
thumbnailContainer.style.height="200px";
thumbnailContainer.style.backgroundColor="#000";


//thumbnail image
const thumbnail= document.createElement("img");
thumbnail.src= video.thumbnail;
thumbnail.alt=video.title;
thumbnail.style.width="100%";
thumbnail.style.height="100%";
thumbnail.style.objectFit="cover";
thumbnail.style.display="block";


//create duration badge
const duration=document.createElement("span");
duration.textContent=video.duration;
duration.style.position="absolute"
duration.style.bottom="8px";
duration.style.right="8px";
duration.style.backgroundColor="rgba(0,0,0,0.8)";
duration.style.color="#fff";
duration.style.padding="4px 6px";
duration.style.borderRadius="4px";
duration.style.fontSize="12px";
duration.style.fontWeight="bold";

thumbnailContainer.appendChild(thumbnail)
thumbnailContainer.appendChild(duration)


//content container
const content = document.createElement("div");
content.style.padding = "12px";

//title
const title = document.createElement("h3");
title.textContent = video.title;
title.style.margin = "0 0 8px 0";
title.style.fontSize = "14px";
title.style.fontWeight = "600";
title.style.color = "#030303";
title.style.lineHeight = "1.4";

//create channel name
const channel = document.createElement("p");
channel.textContent = video.channel;
channel.style.margin = "0 0 4px 0";
channel.style.fontSize = "12px";
channel.style.color = "#606060";

//create views and time info
const metadata = document.createElement("p");
metadata.textContent = `${video.views} • ${video.time}`;
metadata.style.margin = "0";
metadata.style.fontSize = "12px";
metadata.style.color = "#606060";

//append all content elements
content.appendChild(title);
content.appendChild(channel);
content.appendChild(metadata);

//append thumbnail and content to card
card.appendChild(thumbnailContainer);
card.appendChild(content);

//append card to container
const container = document.getElementById("video-container");
if (container) {
    container.appendChild(card);
} else {
    console.warn('Element with id "video-container" not found.');
}
