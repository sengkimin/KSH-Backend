'use strict';

/**
 * resident-checklist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resident-checklist.resident-checklist');
