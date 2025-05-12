import {createRemoteComponent} from '@remote-ui/core';

export interface Segment {
  /**
   * The id of the segment.
   */
  id: string;
  /**
   * The label of the segment.
   */
  label: string;
  /**
   * Whether the segment is disabled.
   */
  disabled: boolean;
}

export interface SegmentedControlProps {
  /**
   * The segments to display.
   */
  segments: Segment[];
  /**
   * The id of the selected segment.
   */
  selected: string;
  /**
   * A callback when a segment is selected.
   */
  onSelect: (id: string) => void;
}

export const SegmentedControl = createRemoteComponent<
  'SegmentedControl',
  SegmentedControlProps
>('SegmentedControl');
