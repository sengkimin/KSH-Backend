import type { Schema, Attribute } from '@strapi/strapi';

export interface ActivityActivity extends Schema.Component {
  collectionName: 'components_activity_activities';
  info: {
    displayName: 'activity';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    activity_time: Attribute.Time;
    program_activity: Attribute.Relation<
      'activity.activity',
      'oneToOne',
      'api::program-activity.program-activity'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'activity.activity': ActivityActivity;
    }
  }
}
