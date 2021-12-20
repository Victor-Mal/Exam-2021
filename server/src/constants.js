const path = require('path');
const {
  env: {
    JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET,
    ACCESS_TOKEN_TIME,
    REFRESH_TOKEN_TIME,
    SQUADHELP_BANK_NUMBER,
    SQUADHELP_BANK_NAME,
    SQUADHELP_BANK_CVC,
    SQUADHELP_BANK_EXPIRY,
  },
} = process;

module.exports = {
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  ACCESS_TOKEN_TIME,
  REFRESH_TOKEN_TIME,

  SQUADHELP_BANK_NUMBER,
  SQUADHELP_BANK_NAME,
  SQUADHELP_BANK_CVC,
  SQUADHELP_BANK_EXPIRY,

  MAX_DEVICE_AMOUNT: 3,
  SALT_ROUNDS: 5,

  ROLES: {
    CUSTOMER: 'customer',
    CREATOR: 'creator',
  },

  CREATOR_ENTRIES: 'creator_entries',

  CONTEST_STATUSES: {
    ACTIVE: 'active',
    FINISHED: 'finished',
    PENDING: 'pending',
  },

  CONTEST_TYPES: {
    NAME: 'name',
    LOGO: 'logo',
    TAGLINE: 'tagline',
  },

  OFFER_STATUSES: {
    PENDING: 'pending',
    REJECTED: 'rejected',
    WON: 'won',
  },

  CONTESTS_DEFAULT_DIR: 'public/contestFiles/',
  FILES_PATH: path.resolve(__dirname, '..', 'public/'),

  SOCKET_CONNECTION: 'connection',
  SOCKET_SUBSCRIBE: 'subscribe',
  SOCKET_UNSUBSCRIBE: 'unsubscribe',

  NOTIFICATION_ENTRY_CREATED: 'onEntryCreated',
  NOTIFICATION_CHANGE_MARK: 'changeMark',
  NOTIFICATION_CHANGE_OFFER_STATUS: 'changeOfferStatus',

  NEW_MESSAGE: 'newMessage',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
};
