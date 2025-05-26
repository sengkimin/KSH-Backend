'use strict';

/**
 * medical-comment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::medical-comment.medical-comment');
