# Kedrix PFE — Landing Reset Base

Clean repo starter for the landing reset.

## Structure

- `index.html` → landing entry point
- `styles/main.css` → design system + layout + components
- `scripts/main.js` → beta form logic + GAS integration
- `assets/images/favicon.svg` → favicon
- `assets/onboarding/step1.svg` → `step5.svg` → local onboarding visuals

## What is already solved

- premium fintech visual direction
- zero broken onboarding asset paths
- accessible form and focus states
- success state with tester ID / expiry / open beta CTA
- copy button logic
- backend endpoint already integrated

## Notes

- `betaFallbackUrl` is currently `/app/` and is only used if backend response does not include an app URL.
- visuals are shipped locally as SVG assets to remove 404 risk and external dependencies.
