const userName = localStorage.getItem("recycleContactName");

if (userName) {
    document.querySelector("#personalized-greeting").textContent = `Thank you, ${userName}!`;
}

let messagesSent = window.localStorage.getItem("contactMessagesCount");

if (messagesSent === null) {
    messagesSent = 0;
}

messagesSent = Number(messagesSent) + 1;

localStorage.setItem("contactMessagesCount", messagesSent);

document.querySelector("#contactCount").textContent = messagesSent;

document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;