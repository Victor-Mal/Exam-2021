const _ = require('lodash');
const bd = require('../models');
const CONSTANTS = require('../constants');

module.exports.createWhereForAllContests = (
  typeIndex,
  contestId,
  industry,
  awardSort
) => {
  const object = {
    where: {},
    order: [],
  };
  if (typeIndex) {
    Object.assign(object.where, { contestType: getPredicateTypes(typeIndex) });
  }
  if (contestId) {
    Object.assign(object.where, { id: contestId });
  }
  if (industry) {
    Object.assign(object.where, { industry });
  }
  if (awardSort) {
    object.order.push(['prize', awardSort]);
  }
  Object.assign(object.where, {
    status: {
      [bd.Sequelize.Op.or]: [
        CONSTANTS.CONTEST_STATUSES.FINISHED,
        CONSTANTS.CONTEST_STATUSES.ACTIVE,
      ],
    },
  });
  object.order.push(['id', 'desc']);
  return object;
};

function getPredicateTypes(index) {
  return { [bd.Sequelize.Op.or]: [types[index].split(',')] };
}

const types = [
  '',
  'name,tagline,logo',
  'name',
  'tagline',
  'logo',
  'name,tagline',
  'logo,tagline',
  'name,logo',
];

module.exports.prepareUser = (data) => _.omit(data, ['password']);
