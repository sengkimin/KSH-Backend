'use strict';

/**
 * resident-document service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resident-document.resident-document');
