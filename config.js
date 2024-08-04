//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "2348051737249";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNYdWNhRmFRZGpTNUkyVWlWcEVQenJ1dWczbm9vb3VTYnYvQnc3K0pYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXZlS1piZHhEN3B1K2xjTkNrTkxaRHc3WEFud0RpNzF2WjQvOGdyaUR3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQlVVbGFYRFZ5cUxtRVFGV3ZSa3h4dzVybjhiZFpqNEJlV0xSZnBlNVU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4endSUTR1dHgvbC9JTjZWV0hiMm1rM1d5b1dsSHd5MzloaDRTNkdESUNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdObHN5ekhsR0lIV1RlWU1wUXpqQ3A5bTNZbkFJSXVZOS94NHBYMmY5SDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild1cGZPTFE1cHh3b1lKbjZyTlA4Y1BxYWMvS2JKU2xpMGUzZjZ1TFBOWGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUQrR01BMmtadHNtZHpqWnFGQVpNYXhhZFZMZXJqeWtaWXUzVkF5ckhWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazFwRVBDeUdSbSt5bVRVLy91MUp5TkdoLzZySmRxYVRMZnJyakw4MzBDRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtQOXBJRHZYdXJpUnd0ZlZZRFJZdWlEcU5hd3FrdS96ZDA4RmlDb3c3b0V1SU16QUZoa3lLOWpUcXpqS0Y2Ky9UekdYT3Z6ekpib01WSUlMWXMrVUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiJubDlKZWtwdFE5dWZIUUh0ZFREVDQyN0djZitzdlJMWUNqQkdLaEd5MkI4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzUsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozNSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyRGYxQ2hXeFJxdWZlMHFZUmxFNFBBIiwicGhvbmVJZCI6IjhlMDk2NWVlLTViODQtNGY1NS04YjFmLTliYzc1ZThlZTMwNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHeTAzWjVyakFVTjNIek83VG02RE5EcTQzN289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnFNcEdBMWxZeXhSQm51RzdNNTh6VFY1OGRnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdLNkZYNlpUIiwibWUiOnsiaWQiOiIyMzQ4MDUxNzM3MjQ5OjIyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRIRSBKT0tFUidTIFRWIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQN0wzKzRDRUlINXM3VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2TmNtUk5PS0YzSGxmRnBUYld4UlVDclNpOFgzY2JTdlN3bU43NkZPS1ZBPSIsImFjY291bnRTaWduYXR1cmUiOiJReCtCcWVOcnNXQzNyUWt2cXNCcCtMSjRYUVFvRllQVG56M0pjZFFvZUJrT2NmeWJLd1JjUyt0N0d1cUgxb3gxNWVEazhmTUxBSk9ydlVrQlZkeStCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR2xLNnFJVW9sSDNveERtbERJWWtIRVY2TVFZZFlDa0grUk9FaHdiZGJQeWpuc2s3VEw1NVRTZTJ2SGxwMU5qbVp2VXlESVVaRHg0SzZ2VjllT3BPQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDUxNzM3MjQ5OjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVqWEprVFRpaGR4NVh4YVUyMXNVVkFxMG92RjkzRzByMHNKamUraFRpbFEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2MTI4Nzh9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released Deployed by JUSTIC™ | enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "THE JOKERS-TV",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
