'use strict';

/**
 * resident-medical service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resident-medical.resident-medical');
