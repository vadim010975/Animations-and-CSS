import Collapse from "./Collapse";
import CallbackChat from "./CallbackChat";
import Liker from "./Liker";

const collapseContainer = document.querySelector(".collapse-container");
const callbackChatContainer = document.querySelector(".callback-container");
const likerContainer = document.querySelector(".liker-container");

new Collapse(collapseContainer);
new CallbackChat(callbackChatContainer);
new Liker(likerContainer);
