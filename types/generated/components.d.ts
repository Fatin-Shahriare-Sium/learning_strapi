import type { Schema, Struct } from '@strapi/strapi';

export interface MycompoWebBigName extends Struct.ComponentSchema {
  collectionName: 'components_mycompo_web_big_names';
  info: {
    displayName: 'web big name';
    icon: 'code';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface SharedLesson extends Struct.ComponentSchema {
  collectionName: 'components_shared_lessons';
  info: {
    description: '';
    displayName: 'lesson';
  };
  attributes: {
    lesson_assets: Schema.Attribute.Component<'shared.video-src', true>;
    lesson_details: Schema.Attribute.RichText;
    lesson_name: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedVideoSrc extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_srcs';
  info: {
    description: '';
    displayName: 'content';
  };
  attributes: {
    content_free: Schema.Attribute.Boolean;
    content_title: Schema.Attribute.String;
    src: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['video', 'audio', 'pdf', 'image']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'mycompo.web-big-name': MycompoWebBigName;
      'shared.lesson': SharedLesson;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video-src': SharedVideoSrc;
    }
  }
}
