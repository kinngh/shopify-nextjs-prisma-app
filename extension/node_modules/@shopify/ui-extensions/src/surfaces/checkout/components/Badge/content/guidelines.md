## Best practices

- Aim for 1 word per badge.
- For complex states that require 2 words, use sentence case.
- For status badge labels, use an adjective (for example, “Available” or “Complete”) or a verb in the past tense (for example, “Delivered” or “Delayed”)
- Use the tone prop to indicate the level of importance. `subdued` provides the least emphasis, while `critical` indicates the highest level of urgency.
- Write a useful `accessibilityLabel` so that customers using assistive technology can access the full meaning of the badge in context. For badges with the `critical` tone, include information that conveys the urgency of the badge (for example, “Warning” or “Alert”).
- A badge should always be attributed to an object on the page.
