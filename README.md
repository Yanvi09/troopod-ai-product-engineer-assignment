# Purelane — Shopify Theme Build

A Shopify theme implementation for Purelane, a plant-based homecare brand. The build focuses on turning the provided homepage design into reusable, merchant-editable Shopify sections using Liquid and Shopify's native theme architecture.

## What I Built

Implemented the Purelane homepage with five custom sections:

- **Purelane Hero**
  - Main brand message
  - Primary and secondary CTAs
  - Product highlights

- **Purelane Reviews**
  - Reusable review blocks
  - Star ratings
  - Customer name and product reference
  - Horizontal review rail

- **Purelane Shop**
  - Real Shopify products from a selected collection
  - Configurable number of products
  - Product image, title and price
  - Compare-at pricing
  - Product availability / sold-out state
  - Responsive product grid

- **Best-Selling Combos**
  - Reusable combo blocks
  - Product descriptions
  - Savings and comparison pricing
  - CTA buttons

- **Bundles**
  - Configurable bundle tiers
  - Product count
  - Pricing and comparison pricing
  - Bundle benefits
  - Featured / most-popular tier

## Key Shopify Implementation

The sections use Shopify's native theme architecture and are configurable through the Shopify Theme Editor.

The product section uses Shopify collection data rather than hardcoded product cards:

- `section.settings.collection`
- `collection.products`
- `product.featured_image`
- `product.title`
- `product.price`
- `product.compare_at_price`
- `product.available`
- `product.url`

This keeps product information managed by Shopify rather than duplicated inside the theme code.

## What I Flagged in the Original Build

The main issue I identified during implementation was that the product section was not reliably rendering the expected products on the homepage.

I traced this to the section rendering / collection handling rather than changing the Shopify catalog itself.

I simplified the rendering path so the section directly uses the collection selected in the section settings and renders the products from that collection.

I also removed unnecessary rendering dependencies that could prevent the product cards from appearing.

The final implementation keeps the product rendering logic straightforward and Shopify-native.

## What I Changed and Why

### Product Grid

Changed the product grid to render directly from the selected Shopify collection.

This provides:

- Real Shopify product data
- Merchant-controlled collection selection
- Configurable product count
- Product availability handling
- Responsive layout
- Image fallback when a product has no featured image

### Homepage Sections

Built the Purelane sections as separate Liquid files rather than putting the complete homepage into one large template.

This makes the sections easier to:

- Edit
- Reuse
- Configure through the Shopify Theme Editor
- Maintain independently

### Responsive UI

Added responsive layouts for the main product and content sections so the homepage works across desktop and smaller screens.

## What I Would Improve With More Time

If I had more time, I would focus on:

1. Connecting combo and bundle CTAs to a more complete Shopify cart / bundle flow.
2. Improving the bundle picker interaction so selected products can be changed before checkout.
3. Adding stronger product-level accessibility and interaction states.
4. Testing the theme across additional screen sizes and Shopify storefront states.
5. Further separating shared styles into reusable theme assets where appropriate.
6. Adding automated checks for the main Liquid rendering paths.

The current implementation intentionally avoids adding unnecessary complexity where the assignment does not require it.

## AI Workflow

AI was used as a development assistant during the implementation, primarily for:

- Exploring Shopify Liquid approaches
- Debugging rendering issues
- Reviewing implementation options
- Iterating on CSS and section structure
- Troubleshooting Shopify theme behavior

I delegated implementation/debugging tasks to AI, but reviewed the resulting code and verified the behavior in the Shopify theme editor.

### Where AI Failed

The product grid issue was a good example of where AI assistance was not sufficient on its own.

Several attempted fixes did not resolve the rendering problem. The issue required going back to the actual Liquid section and checking how the selected collection and product loop were being rendered.

This reinforced that AI-generated fixes need to be tested against the actual Shopify runtime rather than accepted based only on the code looking correct.

### What I Would Systematize

For repeated Shopify builds, I would create a more systematic workflow:

1. Inspect the existing theme structure first.
2. Identify the exact data source for each section.
3. Implement the smallest working Liquid version.
4. Verify the section in Shopify Theme Editor.
5. Test empty, missing-image and sold-out states.
6. Only then add styling or interactions.
7. Keep debugging changes separate from the final implementation.

This reduces unnecessary iterations and makes AI-assisted development easier to review.

## Metafields / Metaobjects

No custom Shopify metafield or metaobject definitions were created for this implementation.

The build uses Shopify's existing product and collection objects and section schema settings.

## Tech Stack

- Shopify
- Liquid
- Shopify Theme Schema
- HTML
- CSS
- JavaScript
- Dawn theme

## Project Structure

```text
sections/
├── purelane-hero.liquid
├── purelane-reviews.liquid
├── purelane-shop.liquid
├── purelane-combos.liquid
└── purelane-bundles.liquid

templates/
└── index.json

assets/
└── Theme styles and JavaScript

snippets/
└── Theme reusable components
