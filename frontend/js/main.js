import initApi from "./api/initAPI.js";
import "./Service/CreateDataGame.js";
import "./Service/EventDeleteItem.js";
import "./Service/EventLogout.js";
import "./Service/EventEditItem.js";
import "./Service/SaveEdit.js";
import "./Service/EventLogin.js";

window.addEventListener("DOMContentLoaded", () => {
  initApi();
});
