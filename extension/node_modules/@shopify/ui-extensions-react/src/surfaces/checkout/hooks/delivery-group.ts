import {useMemo} from 'react';
import type {
  DeliveryGroup,
  DeliveryGroupDetails,
  RenderExtensionTarget,
  DeliveryOption,
  CartLine,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the full expanded details of a delivery group and automatically re-renders
 * your component when that delivery group changes.
 */
export function useDeliveryGroup<
  ID extends RenderExtensionTarget = RenderExtensionTarget,
>(deliveryGroup: DeliveryGroup | undefined): DeliveryGroupDetails | undefined {
  const {lines} = useApi<ID>();
  const cartLines = useSubscription(lines);

  return useMemo(() => {
    if (!deliveryGroup) {
      return undefined;
    }

    const deliveryGroupDetails = {
      ...deliveryGroup,
      selectedDeliveryOption: getSelectedDeliveryOption(deliveryGroup),
      targetedCartLines: getTargetedCartLines(deliveryGroup, cartLines),
    };

    return deliveryGroupDetails;
  }, [deliveryGroup, cartLines]);
}

function getSelectedDeliveryOption(
  deliveryGroup: DeliveryGroup,
): DeliveryOption | undefined {
  const {selectedDeliveryOption, deliveryOptions} = deliveryGroup;

  return deliveryOptions.find(
    (option) => option.handle === selectedDeliveryOption?.handle,
  );
}

function getTargetedCartLines(
  deliveryGroup: DeliveryGroup,
  lines: CartLine[],
): CartLine[] {
  const fullTargetedCartLines: CartLine[] = [];
  for (const targetedLine of deliveryGroup.targetedCartLines) {
    const line = lines.find((line) => line.id === targetedLine.id);
    if (line) fullTargetedCartLines.push(line);
  }

  return fullTargetedCartLines;
}
