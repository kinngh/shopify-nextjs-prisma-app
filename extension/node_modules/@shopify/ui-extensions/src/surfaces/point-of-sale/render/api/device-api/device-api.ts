export interface DeviceApiContent {
  /**
   * The name of the device
   */
  name: string;
  /**
   * The string ID of the device
   */
  getDeviceId(): Promise<string>;
  /**
   * Whether the device is a tablet
   */
  isTablet(): Promise<boolean>;
}

/**
 * Access information about the device, like name and ID
 */
export interface DeviceApi {
  device: DeviceApiContent;
}
