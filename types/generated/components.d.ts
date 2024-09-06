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

export interface DocumentDocument extends Schema.Component {
  collectionName: 'components_document_documents';
  info: {
    displayName: 'document';
  };
  attributes: {
    document_type: Attribute.Enumeration<
      ['Identity Card', 'Family Book', 'Birth Certificate', 'Poor ID Card']
    >;
    description: Attribute.Text;
    file_media: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'activity.activity': ActivityActivity;
      'document.document': DocumentDocument;
    }
  }
}
