let eventId = 0;
let eventСontent = [];
let keyList = [];
let keyIdList = [];

module.exports.newEventId = () => {
  this.localStorageHandler();
  eventId = Math.max.apply(null, keyIdList) + 1;
  if (eventId < 0) {
    eventId = 1;
  }
  return eventId;
};
module.exports.localStorageHandler = () => {
  eventСontent.length = 0;
  keyList.length = 0;
  keyIdList.length = 0;
  let obj = localStorage;
  let re = /eventId\s\d+/;
  for (let prop in obj) {
    if (re.test(prop)) {
      let idKey = parseInt(prop.match(/\d+/));
      eventСontent.push(obj[prop]);
      keyList.push(prop);
      keyIdList.push(idKey);
    }
  }
  return {eventСontent:eventСontent, keyList:keyList, keyIdList:keyIdList};
};
