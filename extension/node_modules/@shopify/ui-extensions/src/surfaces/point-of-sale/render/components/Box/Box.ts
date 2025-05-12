import {createRemoteComponent} from '@remote-ui/core';
import {PaddingProps, SizingProps} from '../shared/box';

export interface BoxProps extends PaddingProps, SizingProps {}

export const Box = createRemoteComponent<'Box', BoxProps>('Box');
