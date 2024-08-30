'use strict';

/**
 * score-point service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::score-point.score-point');
