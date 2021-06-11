module.exports = Object.freeze({
  TOKEN: '1706872195:AAHqmVO2xvtbRDilZU5F7znyHF1GzBy4Xyo',
  ARIA_SECRET: 'myaria2',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/aria-telegram-mirror-bot/downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '12fKt8u1yYiU3aU-NZ3KG31R2-y9ZZYPc',
  OTHER_GDRIVE_DIR_IDS: ['12HJLsFqRwZiniiyLGtBWFuGQcIyYlnWH',  '1CWUWItLUFP_HhrUIQK3ZiLv6gbS406cv'], // This is needed if u want to look for files in multiple dirs on list command
  SUDO_USERS: [830785064, 872830003],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001462185974],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 4000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: true,
    EMAILS: []
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@sahiltarxxxbot"
  },
  IS_TEAM_DRIVE: true,
  USE_SERVICE_ACCOUNT: false,
  INDEX_DOMAIN: "http://mydrive.sahilnolia.workers.dev/0:/",
  TELEGRAPH_TOKEN: 'b3329598b33c145ad396aca8044a878a13d3ed111bb828f0c65440e3c3b4', // Telegraph token, if you want to show search results in telegra.ph else keep it blank,
  STOP_DUPLICATE_MIRRORS: true // To stop duplicate mirror
});
