'use strict';

/**
 * salary-resident service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::salary-resident.salary-resident');
