import {createRemoteComponent} from '@remote-ui/core';
import type {BaseTypographyProps, GlobalProps} from '../shared';

export interface ParagraphProps extends BaseTypographyProps, GlobalProps {
  children?: any;
}

export const Paragraph = createRemoteComponent<'Paragraph', ParagraphProps>(
  'Paragraph',
);
