# Website Site Architecture: Digital Neighbour

*Last updated: June 2026*

This document defines the information architecture, URL hierarchy, navigation structure, and internal linking plan for the Digital Neighbour website. The architecture is engineered to establish topical authority, optimise for crawl speed (essential for AI search engines like ChatGPT and Gemini), and guide local NZ business owners from education to our primary hook: the free **AI Search Readiness Audit**.

---

## 1. Page Hierarchy

We maintain a flat structure to keep page retrieval fast and simple, with Search Engine Optimisation acting as our core marketing hub.

*   Homepage (/)
    *   Search Engine Optimisation Hub (/search-engine-optimisation)
        *   Local SEO (/local-seo)
        *   AI SEO (GEO and AEO) (/ai-seo)
        *   E-commerce SEO (/ecommerce-seo)
        *   Conversion Rate Optimisation (/cro)
    *   Website Development Hub (/website-development)
        *   E-commerce Website Development (/ecommerce-development)
        *   WordPress Website Development (/wordpress-development)
        *   Landing Page Development (/landing-page-development)
        *   Website Optimisation and Speed (/website-optimisation)
    *   Google Ads Hub (/google-ads)
        *   Google Search Ads (/google-search-ads)
        *   Google Shopping Ads (/google-shopping-ads)
        *   Google Remarketing (/google-remarketing)
        *   Performance Max Campaigns (/performance-max)
        *   Landing Page Optimisation (/landing-page-optimisation)
    *   Other Services Hub (/other-services)
        *   Call Tracking (/call-tracking)
        *   Web Hosting (/web-hosting)
        *   WordPress Hosting (/wordpress-hosting)
        *   Reseller Hosting (/reseller-hosting)
        *   Email Hosting (/email-hosting)
    *   Industries (/industries)
        *   Small Business Marketing (/industries/small-business-marketing)
        *   Local Business Marketing (/industries/local-business-marketing)
        *   Automotive Marketing (/industries/automotive-marketing)
        *   Window Tinting Marketing (/industries/window-tinting-marketing)
        *   Childcare Marketing (/industries/childcare-marketing)
        *   Dental Marketing (/industries/dental-marketing)
    *   Locations (/locations)
        *   Christchurch (/location/christchurch)
        *   Auckland (/location/auckland)
    *   AI Search Audit Landing (/ai-readiness-audit)
    *   About Us (/about)
    *   Blog (/blog)
        *   Category: SEO (/blog/category/seo)
        *   Category: Google Ads (/blog/category/google-ads)
        *   Category: AI Search (/blog/category/ai-search)
        *   Category: Web Dev (/blog/category/web-development)
    *   Contact Us (/contact)

---

## 2. Visual Sitemap Hierarchy Flow

Our website architecture is organised into distinct service categories, industries, and locations:

1.  **Homepage** links directly to:
    *   Search Engine Optimisation Hub
    *   Web Development Hub
    *   Google Ads Hub
    *   Other Services Hub
    *   About Us
    *   Blog
    *   Contact Us
    *   All Industry Vertical landing pages
    *   All City Location landing pages
2.  **Service Hubs** link to their specific spoke services:
    *   **SEO Hub** links to Local SEO, AI SEO, E-commerce SEO, and Conversion Optimisation.
    *   **Web Development Hub** links to E-commerce Dev, WordPress Dev, Landing Page Dev, and Website Optimisation.
    *   **Google Ads Hub** links to Search Ads, Shopping Ads, Remarketing, Performance Max, and Landing Page Optimisation.
    *   **Other Services Hub** links to Call Tracking, Web Hosting, WordPress Hosting, Reseller Hosting, and Email Hosting.
3.  **Primary Calls to Action** link directly to the **AI Search Audit Landing Page** from the following pages:
    *   Search Engine Optimisation Hub
    *   AI SEO (AEO and GEO)
    *   Conversion Optimisation
    *   WordPress Development
    *   Google Search Ads
    *   Contact Us

---

## 3. URL Map Table

| Page / Service | URL Path | Parent Page | Nav Location | Priority |
|:-|:-|:-|:-|:-|
| **Homepage** | `/` | None | Header (Logo) | High |
| **AI Search Audit** | `/ai-readiness-audit` | Homepage | Header Button / CTA | High |
| **About Us** | `/about` | Homepage | Header / Footer | Medium |
| **Blog** | `/blog` | Homepage | Header / Footer | Medium |
| **Contact Us** | `/contact` | Homepage | Header / Footer | High |
| **Search Engine Optimisation Hub** | `/search-engine-optimisation` | Homepage | Header (Dropdown) | High |
| Local SEO | `/local-seo` | Search Engine Optimisation Hub | Dropdown / Footer | High |
| AI SEO (AEO / GEO) | `/ai-seo` | Search Engine Optimisation Hub | Dropdown / Footer | High |
| E-commerce SEO | `/ecommerce-seo` | Search Engine Optimisation Hub | Dropdown / Footer | Medium |
| Conversion Rate Optimisation | `/cro` | Search Engine Optimisation Hub | Dropdown / Footer | Medium |
| **Website Development Hub** | `/website-development` | Homepage | Header (Dropdown) | High |
| E-commerce Website Dev | `/ecommerce-development` | Website Development Hub | Dropdown / Footer | Medium |
| WordPress Website Dev | `/wordpress-development` | Website Development Hub | Dropdown / Footer | High |
| Landing Page Dev | `/landing-page-development` | Website Development Hub | Dropdown / Footer | Medium |
| Website Optimisation and Speed | `/website-optimisation` | Website Development Hub | Dropdown / Footer | Medium |
| **Google Ads Hub** | `/google-ads` | Homepage | Header (Dropdown) | High |
| Google Search Ads | `/google-search-ads` | Google Ads Hub | Dropdown / Footer | High |
| Google Shopping Ads | `/google-shopping-ads` | Google Ads Hub | Dropdown / Footer | Medium |
| Google Remarketing | `/google-remarketing` | Google Ads Hub | Dropdown / Footer | Low |
| Performance Max Campaigns | `/performance-max` | Google Ads Hub | Dropdown / Footer | Medium |
| Landing Page Optimisation | `/landing-page-optimisation` | Google Ads Hub | Dropdown / Footer | Low |
| **Other Services Hub** | `/other-services` | Homepage | Header (Dropdown) | Medium |
| Call Tracking | `/call-tracking` | Other Services Hub | Dropdown / Footer | Medium |
| Web Hosting | `/web-hosting` | Other Services Hub | Dropdown / Footer | Low |
| WordPress Hosting | `/wordpress-hosting` | Other Services Hub | Dropdown / Footer | Low |
| Reseller Hosting | `/reseller-hosting` | Other Services Hub | Dropdown / Footer | Low |
| Email Hosting | `/email-hosting` | Other Services Hub | Dropdown / Footer | Low |
| **Small Business Marketing** | `/industries/small-business-marketing` | Homepage | Footer | Medium |
| **Local Business Marketing** | `/industries/local-business-marketing` | Homepage | Footer | Medium |
| **Automotive Marketing** | `/industries/automotive-marketing` | Homepage | Footer | Medium |
| **Window Tinting Marketing** | `/industries/window-tinting-marketing` | Homepage | Footer | Medium |
| **Childcare Marketing** | `/industries/childcare-marketing` | Homepage | Footer | Medium |
| **Dental Marketing** | `/industries/dental-marketing` | Homepage | Footer | Medium |
| **Christchurch Location** | `/location/christchurch` | Homepage | Footer | High |
| **Auckland Location** | `/location/auckland` | Homepage | Footer | High |

---

## 4. Navigation Spec

### Header Navigation
Designed to group our services into 4 dropdown columns to avoid choices overload.

*   **Logo:** (Left-aligned) links to `/`
*   **Item 1: Search Engine Optimisation** (Dropdown Menu):
    *   Overview / Core SEO (`/search-engine-optimisation`)
    *   Local SEO (`/local-seo`)
    *   AI SEO (AEO/GEO) (`/ai-seo`)
    *   E-commerce SEO (`/ecommerce-seo`)
    *   Conversion Rate Optimisation (`/cro`)
*   **Item 2: Website Development** (Dropdown Menu):
    *   WordPress Website Dev (`/wordpress-development`)
    *   E-commerce Website Dev (`/ecommerce-development`)
    *   Landing Page Dev (`/landing-page-development`)
    *   Website Optimisation and Speed (`/website-optimisation`)
*   **Item 3: Google Ads** (Dropdown Menu):
    *   Google Search Ads (`/google-search-ads`)
    *   Google Shopping Ads (`/google-shopping-ads`)
    *   Performance Max Campaigns (`/performance-max`)
    *   Google Remarketing (`/google-remarketing`)
    *   Landing Page Optimisation (`/landing-page-optimisation`)
*   **Item 4: Other Services** (Dropdown Menu):
    *   Call Tracking (`/call-tracking`)
    *   Web Hosting and WordPress Hosting (`/web-hosting`)
    *   Reseller Hosting (`/reseller-hosting`)
    *   Email Hosting (`/email-hosting`)
*   **Item 5: About Us** (`/about`)
*   **Item 6: Blog** (`/blog`)
*   **CTA Button (Rightmost):** "Free AI Search Audit" (links to `/ai-readiness-audit`)

### Footer Organisation
Structured in columns to act as a sitemap:

*   **Column 1: Search Engine Optimisation**
    *   Search Engine Optimisation Overview
    *   Local SEO
    *   AI SEO (AEO / GEO)
    *   E-commerce SEO
    *   Conversion Rate Optimisation (CRO)
*   **Column 2: Web Development**
    *   WordPress Development
    *   E-commerce Development
    *   Landing Page Development
    *   Website Optimisation
*   **Column 3: Google Ads**
    *   Google Search Ads
    *   Google Shopping Ads
    *   Performance Max
    *   Google Remarketing
    *   Landing Page Optimisation
*   **Column 4: Industries We Support**
    *   Small Business Marketing (`/industries/small-business-marketing`)
    *   Local Business Marketing (`/industries/local-business-marketing`)
    *   Automotive Marketing (`/industries/automotive-marketing`)
    *   Window Tinting Marketing (`/industries/window-tinting-marketing`)
    *   Childcare Marketing (`/industries/childcare-marketing`)
    *   Dental Marketing (`/industries/dental-marketing`)
*   **Column 5: Company and Locations**
    *   About Us
    *   Blog
    *   Contact Us
    *   Christchurch Location (`/location/christchurch`)
    *   Auckland Location (`/location/auckland`)

---

## 5. Internal Linking Plan

To climb to the **Top 1% of NZ Search Agencies**, we structure our pages in tight Hub-and-Spoke networks to maximise semantic context and pass page rank down from main hubs to specific spokes.

### Hub-and-Spoke Topic Clusters

#### Cluster 1: Search Engine Optimisation (Core Service Hub: 60% Revenue)
*   **Hub Page:** `/search-engine-optimisation`
*   **Spokes:** `/local-seo`, `/ai-seo`, `/ecommerce-seo`, `/cro`.
*   **Industry Links:** Links to `/industries/dental-marketing`, `/industries/childcare-marketing`, `/industries/window-tinting-marketing`, `/industries/small-business-marketing`.

#### Cluster 2: Website Development (20% Revenue)
*   **Hub Page:** `/website-development`
*   **Spokes:** `/wordpress-development`, `/ecommerce-development`, `/landing-page-development`, `/website-optimisation`.
*   **Industry Links:** Links to `/industries/automotive-marketing`, `/industries/local-business-marketing`, `/industries/small-business-marketing`.

#### Cluster 3: Google Ads (10% Revenue)
*   **Hub Page:** `/google-ads`
*   **Spokes:** `/google-search-ads`, `/google-shopping-ads`, `/performance-max`, `/google-remarketing`, `/landing-page-optimisation`.
*   **Industry Links:** Links to `/industries/window-tinting-marketing`, `/industries/small-business-marketing`, `/industries/local-business-marketing`.
