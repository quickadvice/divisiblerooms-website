# DivisibleRooms website — build notes

Plain HTML/CSS/JS. No framework, no build step. Deploy as-is to GitHub Pages.

## Before this goes live

1. **Web3Forms access key.** `contact.html` has a placeholder:
   `<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">`
   Replace with a real key from https://web3forms.com, tied to the
   info@divisiblerooms.com destination inbox per the Build Brief (§8).
   Jason: this is the one manual step standing between this build and a
   working form.

2. **GitHub Pages custom domain.** The `CNAME` file at the repo root is
   already set to `divisiblerooms.com`. Confirm this matches the "Custom
   domain" field in repo Settings → Pages, and don't key DNS records until
   verifying current values against GitHub's Pages docs (Build Brief §7 —
   values can change).

3. **Felix, before calling this launch-ready:**
   - Submit the contact form end to end and confirm delivery to the
     shared mailbox.
   - Run the WCAG AA pass (contrast, alt text, keyboard nav, screen reader).
   - Cross-browser / cross-device check.
   - Re-verify HTTPS is green and there's no mixed-content warning, post
     DNS cutover.

## File structure

```
index.html          Home
product.html         Product / How It Works
contact.html         Contact / Request a Demo
assets/css/style.css  Shared stylesheet (CSS custom properties for the palette)
assets/js/main.js     Mobile nav toggle (shared across pages)
assets/img/logo.png   DR logo, used as favicon + nav mark
CNAME                GitHub Pages custom domain config
```

## Copy sign-off status

Per the Decisions Log: all page copy has been through Newall (draft) and
Susan (claims defensibility) review as of this build. Two corrections were
applied prior to build:

- Home page reporting blurb: "always knows what's happening" (absolute
  claim) softened to "stays on top of every suite's activity."
- Product page Dashboard card: removed "no separate login" claim, which
  contradicted the Admin Web App's own login requirement per the Product
  Overview's onboarding flow.

Lena reviewed and approved the Product page's security/permissions
paragraph — no permission names or architecture internals are exposed
publicly; full detail is gated behind contact, consistent with existing
practice for the IT Security One-Pager.
