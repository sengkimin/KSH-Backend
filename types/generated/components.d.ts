import type { Schema, Attribute } from '@strapi/strapi';

export interface SalarySalaryDate extends Schema.Component {
  collectionName: 'components_salary_salary_dates';
  info: {
    displayName: 'salary';
    description: '';
  };
  attributes: {
    date: Attribute.Date;
    salary: Attribute.Integer;
    Balance: Attribute.Integer;
    comment: Attribute.Text;
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
      'salary.salary-date': SalarySalaryDate;
      'document.document': DocumentDocument;
      'activity.activity': ActivityActivity;
    }
  }
}
