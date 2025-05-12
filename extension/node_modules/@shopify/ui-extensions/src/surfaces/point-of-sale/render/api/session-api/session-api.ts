import type {Session} from '../../../types/session';

export interface SessionApiContent {
  /**
   * Access information on the current POS session.
   */
  currentSession: Session;
  /**
   * Get a fresh session token for communication with your app's backend service.
   * Calls to Shopify APIs must be made by your app’s backend service.
   */
  getSessionToken: () => Promise<string | undefined>;
}

/**
 * Access information on the current Session, including data on the current shop, user, staff and location.
 */
export interface SessionApi {
  session: SessionApiContent;
}
