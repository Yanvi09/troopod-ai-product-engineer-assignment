# Purelane — Shopify Theme Build

A Shopify theme implementation for Purelane, a plant-based homecare brand.

The goal was to turn the provided homepage design into reusable, merchant-editable Shopify sections using Liquid and Shopify's native theme architecture.

## What I Built

Implemented five custom homepage sections:

- **Purelane Hero**
  - Brand messaging
  - Primary and secondary CTAs
  - Product highlights

- **Purelane Reviews**
  - Reusable review blocks
  - Star ratings
  - Customer and product information
  - Horizontal review rail

- **Purelane Shop**
  - Products loaded from a Shopify collection
  - Configurable product count
  - Product image, title and price
  - Compare-at pricing
  - Availability / sold-out state
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

## Shopify Implementation

The homepage is built using Shopify's native section architecture and JSON templates.

The shop section uses real Shopify collection and product data rather than hardcoded product cards:

- `section.settings.collection`
- `collection.products`
- `product.featured_image`
- `product.title`
- `product.price`
- `product.compare_at_price`
- `product.available`
- `product.url`

This keeps product information managed by Shopify and allows merchants to control the collection and product count through the Theme Editor.

## What I Flagged in the Original Build

The main issue I identified was that the product section was not reliably rendering the expected products on the homepage.

I traced the issue to the way the section handled the selected collection and simplified the rendering path so the section directly works with the collection selected in the Theme Editor.

I also kept the implementation intentionally straightforward rather than introducing unnecessary abstractions or complexity.

## What I Changed

### Product Grid

The product grid now:

- Uses real Shopify product data
- Uses a merchant-selected collection
- Supports configurable product count
- Handles unavailable products
- Handles missing product images
- Links directly to Shopify product pages
- Uses a responsive grid layout

### Homepage Architecture

The homepage functionality is split into separate Liquid sections instead of one large template.

This makes each section easier to:

- Configure
- Maintain
- Reuse
- Edit through the Shopify Theme Editor

### Responsive UI

Added responsive layouts and styling for desktop and smaller screen sizes.

## What I Would Improve With More Time

1. Connect combo and bundle CTAs to a more complete Shopify cart / bundle flow.
2. Add a more complete bundle picker where customers can select products before checkout.
3. Improve accessibility and interaction states across the sections.
4. Test additional Shopify storefront and screen-size states.
5. Move more shared styling into reusable theme assets where appropriate.
6. Add automated checks for important Liquid rendering paths.

I intentionally avoided adding unnecessary complexity beyond the requirements of the assignment.

## AI Workflow

AI was used as a development assistant for:

- Exploring Shopify Liquid approaches
- Debugging rendering issues
- Reviewing implementation options
- Iterating on CSS and section structure
- Troubleshooting Shopify theme behavior

I reviewed the generated code and verified the resulting behavior in the Shopify Theme Editor rather than relying on AI output alone.

### Where AI Failed

The product rendering issue required several iterations before reaching the working implementation.

Some suggested fixes did not resolve the issue in the actual Shopify environment. I therefore went back to the Liquid section, inspected how the selected collection was being handled, and tested the rendering behavior directly.

This reinforced the importance of validating AI-generated changes against the actual Shopify runtime.

### What I Would Systematize

For repeated Shopify builds, I would use the following workflow:

1. Inspect the existing theme structure.
2. Identify the data source for each section.
3. Implement the smallest working Liquid version.
4. Verify it in Shopify Theme Editor.
5. Test empty, missing-image and sold-out states.
6. Add styling and interactions after the data flow works.
7. Review and simplify AI-generated code before committing.

## Metafields / Metaobjects

No custom Shopify metafields or metaobjects were created.

The implementation uses Shopify's existing product and collection objects together with section schema settings.

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
