ARQACARDS — COMPLETE WEBSITE DESIGN & BUILD INSTRUCTION BRIEF
================================================================
Version: 1.0
Prepared For: ZarqaCards, Rawalpindi, Pakistan
Document Type: Full UI/UX Build Instructions + Brand Protocol
================================================================
 
 
----------------------------------------------------------------
SECTION 01 — WHAT THIS DOCUMENT IS
----------------------------------------------------------------
 
This document is your complete instruction manual for building
the ZarqaCards website. Every developer, designer, or freelancer
you hire should read this before touching a single line of code.
It covers every page, every section, every component, every
image placement rule, every font size, every color, and every
interaction. Nothing should be guessed. Everything is specified
here.
 
The website you saw in the preview is a good foundation. This
document tells you exactly how to take it from that foundation
to a world-class premium brand website.
 
 
----------------------------------------------------------------
SECTION 02 — BRAND PERSONALITY (READ THIS FIRST)
----------------------------------------------------------------
 
Before any design decisions, understand what ZarqaCards IS.
 
ZarqaCards is not a printing shop. It is not a cheap design
service. It is a premium, heritage-rooted, Pakistani wedding
invitation brand. The website must feel like:
 
  - Opening a velvet box that contains a royal invitation
  - Walking into a high-end boutique in Lahore's Gulberg
  - Holding a card printed on thick cotton paper with gold foil
 
Three words that must guide EVERY design decision:
  1. CEREMONIAL — every section feels like an occasion
  2. HEIRLOOM — feels handcrafted, not mass-produced
  3. CONFIDENT — premium brands never shout, they whisper
 
What this website must NEVER feel like:
  - A cheap Fiverr gig page
  - A generic Canva template
  - Busy, cluttered, or overwhelming
  - Fast food — everything should feel slow and intentional
 
 
----------------------------------------------------------------
SECTION 03 — COLOR SYSTEM (EXACT HEX VALUES)
----------------------------------------------------------------
 
These colors are extracted directly from your logo. Do not
substitute or approximate. Every color has a specific purpose.
 
BACKGROUND COLORS:
  --brown-darkest   #1E0D04   Page base background
  --brown-deep      #2A1208   Main page background
  --brown-mid       #3D1A0A   Card backgrounds, nav
  --brown-warm      #4E2410   Hover states, elevated surfaces
  --brown-light     #6B3520   Borders, fine lines
 
GOLD COLORS:
  --gold-bright     #EDD26A   Main headings, hero title, key numbers
  --gold-primary    #C8A44A   Borders, icons, secondary text
  --gold-dim        #8A6520   Muted labels, captions, eyebrows
  --gold-ghost      #C8A44A at 5% opacity   Background textures only
 
TEXT COLORS:
  --cream-primary   #F2E4C4   Main body text on dark backgrounds
  --cream-muted     #C4A070   Paragraph text, descriptions
  --cream-faint     #8A6840   Very muted text, fine print
 
STRICT RULES:
  - Background is ALWAYS warm brown. Never pure black. Never white.
  - Gold is for text, borders, icons only. Not large filled areas.
  - No blue, green, red, or purple anywhere on the site. Ever.
  - Even the darkest surface has a brown undertone, not black.
  - The Islamic geometric pattern from the logo = your site texture.
    Use it at 4-6% opacity on section backgrounds throughout.
 
 
----------------------------------------------------------------
SECTION 04 — TYPOGRAPHY SYSTEM
----------------------------------------------------------------
 
Use exactly THREE font families. No more, no less.
 
FONT 1: Cormorant Garamond
  Source: Google Fonts (free)
  Used for: All headings, hero title, section titles, prices,
            large decorative numbers, pull quotes
  Why: It has extreme thick-thin contrast like your calligraphic Z.
       It feels classical, royal, and expensive.
 
  Sizes and weights:
    Hero title:        84px,  weight 300 (Light)
    Section headings:  42px,  weight 300 (Light)
    Card titles:       22px,  weight 400 (Regular)
    Price numbers:     48px,  weight 300 (Light)
    Pull quotes:       24px,  weight 300 (Italic)
    Testimonials:      22px,  weight 300 (Italic)
 
FONT 2: Jost
  Source: Google Fonts (free)
  Used for: Navigation, body text, buttons, labels, captions,
            all functional UI text
  Why: Clean geometric sans-serif. Pairs with Cormorant perfectly.
       One speaks poetry, one speaks precision.
 
  Sizes and weights:
    Navigation links:  10px,  weight 400, UPPERCASE, spacing 0.3em
    Body paragraphs:   13px,  weight 300 (Light)
    Button text:       10px,  weight 500 (Medium), UPPERCASE, spacing 0.3em
    Section labels:    9px,   weight 400, UPPERCASE, spacing 0.5em
    Card body text:    12px,  weight 300 (Light)
    Footer text:       11px,  weight 300 (Light)
 
FONT 3: Noto Nastaliq Urdu
  Source: Google Fonts (free)
  Used for: One decorative Urdu line per section maximum
            Hero accent phrase, footer tagline, card Urdu names
  Why: This is what makes ZarqaCards uniquely Pakistani.
 
  IMPORTANT RULES FOR URDU FONT:
    - Use it sparingly. One line per section. That is it.
    - Never use it for functional text like buttons or nav.
    - Always center-align Urdu text.
    - Size range: 14px to 20px for decorative use.
    - Color: always --gold-dim or --gold-primary, never cream.
 
TYPOGRAPHY RULES — NON-NEGOTIABLE:
  - Heading font-weight is NEVER above 400. Thinness = luxury.
  - All button text is UPPERCASE with wide letter-spacing. Always.
  - Body text line-height: 1.9 — generous breathing room.
  - Never mix more than 2 fonts in one component.
  - No bold text in body paragraphs. Let the words speak.
 
 
----------------------------------------------------------------
SECTION 05 — LAYOUT & SPACING SYSTEM
----------------------------------------------------------------
 
Base unit: 8px. Every spacing value is a multiple of 8.
 
SPACING SCALE:
  Extra Small:   8px    Icon gaps, tight inline spacing
  Small:        16px    Between related elements
  Medium:       24px    Component internal padding
  Large:        40px    Between components in a section
  XL:           64px    Section top/bottom padding (minimum)
  2XL:          96px    Between major sections
  3XL:         128px    Hero padding, landmark sections
 
GRID SYSTEM:
  Desktop (1024px+):  12 columns, 80px side margins, 24px gaps
  Tablet (768-1023px): 8 columns, 40px side margins, 16px gaps
  Mobile (0-767px):    4 columns, 20px side margins, 12px gaps
  Maximum content width: 1200px, always centered
 
LAYOUT RULES:
  - Every section is separated by a 0.5px gold border line.
  - Sections alternate slightly in background shade for depth.
  - Content never touches the screen edge on any device.
  - Negative space is intentional. Never fill every pixel.
  - No border-radius on any element except pill tags (20px pill).
  - All cards, buttons, containers = sharp right-angle corners.
 
 
----------------------------------------------------------------
SECTION 06 — HERO SECTION (MOST IMPORTANT SECTION)
----------------------------------------------------------------
 
The hero is the first thing every visitor sees. It must be
unforgettable. Here is the exact specification.
 
HERO LAYOUT:
  - Full viewport height: 100vh (fills the entire screen)
  - Content centered both horizontally and vertically
 
BACKGROUND IMAGE SCROLLER — HOW IT WORKS:
  This is the key upgrade from the current design. Instead of
  a flat brown background, the hero background is a slow
  full-screen image slideshow. Here is how to build it:
 
  IMAGES TO USE:
    - 4 to 6 high-quality images of your best card designs
    - Show actual invitation card mockups on surfaces like:
        * A card lying flat on dark brown velvet fabric
        * A card held by elegant hands with henna
        * A card on a marble surface with dried flowers
        * An open envelope showing the card inside
        * Cards arranged in a flat lay composition
    - Images must be high resolution: minimum 1920x1080px
    - All images must have warm, dark, brown and gold tones
    - No white backgrounds in any hero image. Ever.
 
  SCROLLER BEHAVIOR:
    - Images transition every 5 seconds automatically
    - Transition type: Ken Burns effect
        * What is Ken Burns: The image VERY slowly zooms in
          (scale from 1.0 to 1.08 over 5 seconds) while a
          new image fades in. This creates cinematic depth.
        * The zoom should be barely noticeable — elegant, not
          dramatic. Think luxury hotel lobby screen, not slideshow.
    - Transition between images: Cross-fade, 1.5 second duration
    - No slide left/right transitions — only fade + subtle zoom
    - Navigation dots: 4 to 6 small dots at the very bottom
      center of the hero. 6px circles in gold. Active dot is
      filled gold. Inactive dots are outlined gold. Nothing else.
    - No left/right arrow buttons visible. Dots only.
 
  OVERLAY ON TOP OF IMAGES:
    - A dark overlay sits between the image and the text content
    - Overlay color: #1E0D04 at 65% opacity
    - This ensures text is always readable regardless of image
    - The overlay is a single flat color — no gradients
 
HERO CONTENT LAYERS (from back to front):
  Layer 1: Background image scroller (described above)
  Layer 2: Dark overlay at 65% opacity
  Layer 3: Islamic geometric pattern SVG at 6% opacity on top
            of the overlay (same pattern from your logo)
  Layer 4: Two ghost circles (from logo ring) in gold at 3% —
            800px and 1000px diameter, centered behind the text
  Layer 5: All text and button content
 
HERO TEXT CONTENT (exact order, top to bottom):
  1. Eyebrow line
     Font: Jost 9px, UPPERCASE, letter-spacing 0.6em
     Color: --gold-dim
     Text: "Est. 2024  ·  Rawalpindi, Pakistan  ·  Premium Invitations"
     Margin below: 24px
 
  2. Main title
     Font: Cormorant Garamond 84px, weight 300
     Color: --cream-primary
     Text: "ZarqaCards" — the Z should be in --gold-bright
     Letter-spacing: 0.06em
     Margin below: 8px
 
  3. Urdu accent line
     Font: Noto Nastaliq Urdu 18px
     Color: --gold-dim
     Text: One poetic Urdu phrase (example: خوبصورت کارڈز — آپ کی خوشیوں کے لیے)
     Margin below: 28px
 
  4. Service pill tags (horizontal row)
     4 pills: WEDDING  |  MEHNDI  |  WALIMA  |  AQEEQA
     Style: 0.5px solid --gold-dim border, transparent fill
     Font: Jost 9px, UPPERCASE, letter-spacing 0.3em, --gold-dim
     Padding: 8px 20px
     Gap between pills: 12px
     Margin below: 40px
 
  5. Two CTA buttons (side by side)
     Button 1 — Primary:
       Background: --gold-primary
       Text color: --brown-darkest
       Text: "VIEW COLLECTION"
       Font: Jost 10px, weight 500, UPPERCASE, spacing 0.3em
       Padding: 14px 36px
       No border-radius
 
     Button 2 — Ghost:
       Background: transparent
       Border: 0.5px solid --gold-primary
       Text color: --gold-primary
       Text: "WHATSAPP ORDER"
       Same font and padding as Button 1
       Gap between buttons: 16px
 
  6. Scroll indicator (at very bottom of hero, centered)
     A vertical line 40px tall in --gold-dim at 40% opacity
     Below the line: a 6px diamond shape in --gold-dim
     This suggests to the visitor to scroll down
 
HERO IMAGE CONTENT REQUIREMENTS:
  Before the website is built, you need these photographs or
  mockups prepared. Either hire a photographer for Rs 3,000-5,000
  or use digital mockup templates from:
    - Freepik.com (search: invitation card mockup brown)
    - Mockupworld.co
    - Placeit.net
 
  Required images for hero slideshow (6 images):
    Image 1: Your best wedding card design — overhead flat lay
             on dark velvet or suede fabric, gold accents visible
    Image 2: Card held in both hands (female hands, henna optional)
             Dark background, warm lighting on the card
    Image 3: Envelope with card partially pulled out, on wood
             surface with rose petals or dried flowers nearby
    Image 4: Multiple cards fanned out on a dark marble surface
             Showing variety of your designs
    Image 5: Close-up of card typography/pattern detail
             Sharp focus on gold foil or calligraphy elements
    Image 6: Card standing upright in an envelope, gift box
             nearby, ribbon, bokeh background
 
  COLOR RULE FOR ALL IMAGES:
    Every image must be in warm brown and gold tones.
    Cool blue or white photography will DESTROY the brand feel.
    If you use photographer: brief them with "warm, moody,
    brown and gold tones, like old Mughal painting lighting."
 
 
----------------------------------------------------------------
SECTION 07 — NAVIGATION BAR
----------------------------------------------------------------
 
STRUCTURE: Logo (left) — Nav links (center) — CTA button (right)
 
HEIGHT: 72px on desktop, 60px on mobile
 
BACKGROUND: --brown-mid (#3D1A0A) with 0.5px --gold-dim border bottom
 
LOGO in nav:
  Line 1: ZARQA  —  Cormorant Garamond 20px, weight 600,
                    --gold-bright, letter-spacing 0.35em
  Line 2: CARDS · زرقا  —  Jost 9px, --gold-dim, spacing 0.25em
  Both lines stacked, left-aligned
 
NAVIGATION LINKS (5 links):
  COLLECTION  |  SERVICES  |  PROCESS  |  GALLERY  |  CONTACT
  Font: Jost 10px, UPPERCASE, letter-spacing 0.3em, --gold-dim
  Hover: color transitions to --gold-primary over 300ms
  Active page: --gold-primary color + 0.5px gold underline
 
CTA BUTTON in nav:
  Text: ORDER NOW
  Style: 0.5px solid --gold-dim border, transparent background
  Text color: --gold-primary
  Hover: background becomes --gold-mute, border becomes --gold-primary
  Padding: 10px 24px
 
SCROLL BEHAVIOR:
  When user scrolls past 100px from top:
    - Nav background darkens to #1A0803
    - Border bottom becomes slightly more visible
    - Smooth transition over 400ms
 
MOBILE NAV:
  - Hide all links, show logo + "MENU" text button (not hamburger icon)
  - When MENU is tapped: full-screen overlay slides in from right
  - Overlay background: --brown-darkest
  - Links stack vertically, centered, 24px apart
  - Cormorant Garamond 28px for mobile nav links
  - Close button: small X top-right in --gold-dim
  - WhatsApp number visible at bottom of mobile menu
 
 
----------------------------------------------------------------
SECTION 08 — TICKER / MARQUEE BAR
----------------------------------------------------------------
 
A thin horizontal strip that scrolls text endlessly.
Sits immediately below the hero section.
 
HEIGHT: 44px
BACKGROUND: --brown-mid
BORDERS: 0.5px --gold-dim top and bottom
 
SCROLLING TEXT (repeating):
  Wedding Cards  ✦  Mehndi Invitations  ✦  Walima Cards  ✦
  Digital Delivery  ✦  Custom Design  ✦  24hr Turnaround  ✦
  Aqeeqa Cards  ✦  Birthday Invites  ✦  All Over Pakistan  ✦
 
FONT: Jost 9px, UPPERCASE, letter-spacing 0.4em, --gold-dim
SEPARATOR: ✦ symbol in --gold-primary
SPEED: 25 seconds per full cycle, continuous loop
DIRECTION: Right to left
 
 
----------------------------------------------------------------
SECTION 09 — SOCIAL PROOF STATS BAR
----------------------------------------------------------------
 
4 numbers in a horizontal row immediately after the ticker.
 
BACKGROUND: --brown-deep (slightly darker than page)
HEIGHT: 120px
LAYOUT: 4 equal columns, separated by 0.5px --gold-dim vertical lines
 
STAT 1:  500+     Cards Delivered
STAT 2:  5 Stars  Client Rating
STAT 3:  3 Days   Avg Turnaround
STAT 4:  100%     Custom Design
 
NUMBER STYLE: Cormorant Garamond 40px, weight 300, --gold-bright
LABEL STYLE:  Jost 9px, UPPERCASE, letter-spacing 0.35em, --gold-dim
Gap between number and label: 6px
 
 
----------------------------------------------------------------
SECTION 10 — SERVICES SECTION
----------------------------------------------------------------
 
SECTION LABEL (above heading):
  "OUR SERVICES" — Jost 9px, UPPERCASE, spacing 0.5em, --gold-dim
  Below label: 32px gold line (0.5px, 40px wide)
 
SECTION HEADING:
  "Our Services" — Cormorant Garamond 42px, weight 300, --cream-primary
  Right-aligned Urdu text opposite the heading: خدمات ہماری
 
GRID: 3 columns x 2 rows = 6 service cards total
  Services:
    1. Wedding Invitations
    2. Mehndi Cards
    3. Walima Cards
    4. Aqeeqa Cards
    5. Birthday Invitations
    6. Custom Designs
 
CARD STRUCTURE (each card):
  Background: --brown-mid
  Border: none — the 1px gap between cards filled with --border
          color creates the separator (grid gap = the border)
  Padding: 32px 28px
  No border-radius
 
  Inside each card (top to bottom):
    a) Index number: "01" — Cormorant 11px, --gold-dim, spacing 0.15em
    b) Icon: 32x32px container, 0.5px --gold-dim border, custom SVG
       The icon is a simple 2-stroke line illustration of the
       service (envelope for wedding, moon for mehndi, etc.)
    c) Card title: Cormorant Garamond 22px, --cream-primary
    d) Description: Jost 12px, line-height 1.9, --cream-muted
       2-3 sentences max
    e) Arrow: Bottom-right corner, 24x24px, 0.5px gold border,
       contains a simple → arrow in --gold-dim
 
  Hover state:
    - Background lightens to --brown-warm
    - Border-top: 1px solid --gold-primary appears
    - Arrow border and color brightens to --gold-primary
    - Transition: 250ms ease
 
IMAGE NOTE FOR SERVICES SECTION:
  This section uses NO photography. Only SVG line icons.
  Icons should be custom drawn, not downloaded from icon packs.
  Brief for icon style: single-stroke, minimal, 14px within 32px
  container, the style of a luxury hotel's room service icons.
 
 
----------------------------------------------------------------
SECTION 11 — THE PROCESS SECTION
----------------------------------------------------------------
 
HEADING: "The Process" — Cormorant 42px, centered
BACKGROUND: --brown-warm (slightly lighter than page — stands out)
 
4 STEPS in a horizontal row:
 
  Step 1: Consultation
  Step 2: Design
  Step 3: Revisions
  Step 4: Delivery
 
STEP STRUCTURE:
  a) Giant ghost number: "01" Cormorant 72px, --gold-bright at 7% opacity
  b) Step title: Cormorant 18px, --gold-primary
  c) Description: Jost 11px, --cream-muted, line-height 1.8
  d) A short vertical gold tick at the right edge of each step
     EXCEPT the last step — this visually connects steps
 
CONNECTOR LINE:
  A hairline horizontal gold line runs through all 4 steps at
  the height of the step numbers. The ticks are part of this line.
  This is done with a single absolute-positioned line, not borders.
 
 
----------------------------------------------------------------
SECTION 12 — GALLERY / OUR WORK SECTION
----------------------------------------------------------------
 
THIS IS WHERE IMAGE PLACEMENT IS MOST IMPORTANT.
Read this section very carefully.
 
HEADING: "Our Work" — same style as other sections
Section label above + Urdu accent opposite
 
GRID LAYOUT — ASYMMETRIC MASONRY:
  This is NOT equal columns. The layout is intentional and
  architectural. Follow this exact pattern:
 
  ROW 1:
    Left cell:  66% width, 280px height   — Label: "Wedding Collection"
    Right cell: 34% width, 280px height   — Label: "Mehndi Series"
 
  ROW 2:
    Left cell:  34% width, 220px height   — Label: "Diwane Cover"
    Middle cell: 33% width, 220px height  — Label: "Walima Edition"
    Right cell: 33% width, 220px height   — Label: (no label — decorative)
 
  ROW 3:
    Left cell:  34% width, 260px height   — Label: "Aqeeqa Designs"
    Right cell: 66% width, 260px height   — Label: "Custom Work"
 
  Total: 7 image cells in 3 rows.
  The asymmetry makes it feel editorial, not like an Instagram grid.
 
IMAGE PLACEMENT RULES FOR GALLERY:
  a) Every cell is filled 100% with the image (object-fit: cover)
  b) Images should show actual card designs placed in real settings
  c) No plain white backgrounds in any gallery image
  d) Image should fill the entire cell — no borders, no padding
     The gold border IS the 1px gap between cells
  e) Each cell must have a text label showing the collection name
 
  LABEL OVERLAY ON GALLERY CELLS:
    - The label appears in the bottom-left of each cell
    - It is only visible on hover (not by default)
    - On hover: a --brown-darkest overlay at 70% opacity slides
      up from the bottom of the cell, covering the bottom 40%
    - The collection name appears in this overlay area
    - Font: Cormorant Garamond 18px, --cream-primary
    - Below the name: a small Urdu translation in --gold-dim
    - A "VIEW →" button in tiny Jost 9px UPPERCASE
 
  DEFAULT STATE (no hover):
    - Cells show only the image
    - No text visible
    - A very subtle 0.5px gold border surrounds each cell
 
  HOVER STATE:
    - Overlay slides up over 400ms ease-out
    - Border brightens to full --gold-primary
    - The image very slightly zooms (scale 1.0 to 1.04)
      over 400ms — just barely noticeable
 
IMAGES NEEDED FOR GALLERY (7 images):
  Image 1 (Wedding Collection — large):
    A beautiful wedding card design, landscape orientation
    Must be your most impressive piece
    Show the full card with all its ornamental details visible
 
  Image 2 (Mehndi Series — tall):
    A mehndi night invitation, portrait orientation
    Warm orange and gold tones preferred
    Can show 2-3 cards fanned out vertically
 
  Image 3 (Diwane Cover):
    Close-up detail shot of a card cover
    Focus on texture, pattern, gold foil
    Macro photography style if possible
 
  Image 4 (Walima Edition):
    Walima card — elegant, formal
    Consider showing it in an envelope setting
 
  Image 5 (Decorative — no label):
    A pure texture/pattern detail shot
    Islamic geometric pattern close-up
    Or calligraphy detail — no need to show full card
 
  Image 6 (Aqeeqa Designs):
    Aqeeqa card — softer, family-oriented
    Pink or cream tones acceptable here
 
  Image 7 (Custom Work — large):
    Your most unique/creative custom design
    This is the showstopper — make it the best image
    Could be a premium design with complex details
 
ALL 7 GALLERY IMAGES — PHOTOGRAPHY RULES:
  - Warm color temperature: 2700K-3200K (candlelight range)
  - Dark surfaces only: velvet, marble, wood, suede
  - Props allowed: dried flowers, ribbons, wax seal, pen
  - No smartphones in shot. No people unless hands/henna only.
  - No studio white background photography here
  - Consistent warm brown tone across ALL 7 images
  - If you have a DSLR: shoot in golden hour light or with
    a warm LED panel. If using phone: download Lightroom
    mobile and apply "warm moody" preset
 
 
----------------------------------------------------------------
SECTION 13 — PRICING SECTION
----------------------------------------------------------------
 
HEADING: "Pricing" — centered, Cormorant 42px
Sub: "Transparent pricing for every occasion" — Jost 12px
 
3 PRICING CARDS:
 
  CARD 1 — BASIC (Rs. 2,500)
    Label: BASIC
    Amount: Rs. 2,500
    Description: "Perfect for single-event digital cards"
    Features list (5 items):
      · 1 Design Concept
      · 2 Revisions
      · Digital File Only
      · 48hr Delivery
      · 1 Card Size
 
  CARD 2 — PREMIUM (Rs. 5,000) ← FEATURED
    Label: PREMIUM
    Badge: "MOST POPULAR" — gold badge pinned at top center
    Amount: Rs. 5,000
    Description: "Full suite for complete wedding events"
    Features list (7 items):
      · 3 Design Concepts
      · Unlimited Revisions
      · All 3 Event Cards
      · 24hr Delivery
      · Multiple Sizes
      · WhatsApp Support
      · Print-Ready File
 
  CARD 3 — LUXURY (Rs. 9,000)
    Label: LUXURY
    Amount: Rs. 9,000
    Description: "Bespoke designs for the discerning family"
    Features list (8 items):
      · 5 Design Concepts
      · Unlimited Revisions
      · Full Wedding Suite
      · Same Day Delivery
      · Print + Digital Files
      · Priority WhatsApp
      · Custom Monogram
      · Premium Typography
 
CARD STYLING:
  Regular cards background: --brown-mid
  Featured card background: --brown-warm (slightly lighter)
  Featured card TOP border: 1px solid --gold-primary ONLY
  (Not all sides — just the top accent line. This is the
   architectural differentiation, not a full gold box.)
 
  Feature list items:
    Separated by 0.5px --gold-dim horizontal lines
    Preceded by 4x4px gold diamond bullet: ◆
    Font: Jost 11px, --cream-muted, line-height 1.8
 
  Button in each card:
    Text: GET STARTED
    Basic card: ghost button (transparent + gold border)
    Featured card: primary button (gold fill + dark text)
    Luxury card: ghost button
 
NO IMAGES in pricing section. Pure typography and layout.
 
 
----------------------------------------------------------------
SECTION 14 — TESTIMONIALS SECTION
----------------------------------------------------------------
 
HEADING: "What Our Clients Say" — Cormorant 42px, centered
 
LAYOUT: Single testimonial displayed at a time, centered
        Not a card — just text floating in the section
 
STRUCTURE:
  a) Opening quotation mark: Cormorant 80px, --gold-primary at 35%
  b) Quote text: Cormorant Italic 22px, --cream-primary, centered
     Maximum width: 640px, centered on page
  c) Gold ornamental divider: 40px line + small diamond
  d) Client name: Jost 11px, UPPERCASE, spacing 0.4em, --gold-dim
  e) Occasion + City: Jost 9px, --cream-faint
 
NAVIGATION:
  Previous and Next arrows on left and right
  Style: just two thin lines forming an arrow — no button box
  Color: --gold-dim, brightens to --gold-primary on hover
  These arrows are positioned far left and far right of the quote
 
AUTO-ROTATE: Changes testimonial every 6 seconds
TRANSITION: Cross-fade, 600ms
 
TESTIMONIALS TO WRITE (write these yourself, based on real client
feedback or create 3 believable sample quotes):
 
  Quote 1: Something about how the card design felt personal
  Quote 2: Something about fast delivery and professional service
  Quote 3: Something about the card being better than expected
 
NO IMAGES in testimonials section. Pure text and elegance.
 
 
----------------------------------------------------------------
SECTION 15 — CTA BANNER SECTION
----------------------------------------------------------------
 
PURPOSE: Convert hesitating visitors into WhatsApp contacts
 
BACKGROUND: --brown-warm (slightly lighter than page)
PADDING: 120px top and bottom
LAYOUT: Centered, all content center-aligned
 
LEFT AND RIGHT DECORATIVE ELEMENTS:
  A single vertical gold line runs the full height of the section
  on the left side (40px from content edge) and the right side.
  Think of it as the border on a wedding card itself.
  Color: --gold-dim
  Width: 0.5px
 
CONTENT (top to bottom):
  a) Eyebrow: Jost 9px, UPPERCASE, --gold-dim, spacing 0.5em
     "PREMIUM INVITATION DESIGN"
 
  b) Heading: Cormorant Garamond 52px, weight 300, --cream-primary
     "Ready to Make Your Occasion Unforgettable?"
 
  c) Urdu accent: Noto Nastaliq 16px, --gold-dim
     "آج ہی اپنا آرڈر دیں"
 
  d) Gold ornamental divider (small)
 
  e) Two buttons side by side:
     Button 1: Primary — "ORDER NOW"
     Button 2: Ghost — "WHATSAPP US"
     Gap: 16px
 
NO IMAGES in this section.
 
 
----------------------------------------------------------------
SECTION 16 — FOOTER
----------------------------------------------------------------
 
BACKGROUND: #1A0803 (darkest brown — the footer is the basement)
TOP BORDER: 0.5px --gold-dim
 
LAYOUT: 4 columns
  Column 1 (wider, 2/4): Brand column
  Column 2 (1/4): Services links
  Column 3 (1/4): Pages links
  Column 4 (1/4): Contact info
 
COLUMN 1 — BRAND:
  Logo: ZARQA in Cormorant 24px, --gold-bright, spacing 0.35em
  Tagline Urdu: Noto Nastaliq 14px, --gold-dim
  Description: Jost 11px, --cream-muted, max-width 200px,
    "Premium wedding invitation design based in Rawalpindi,
    crafting beautiful cards for every occasion."
  WhatsApp: Jost 11px, --gold-primary (clickable)
 
COLUMN 2 — SERVICES:
  Heading: Jost 9px, UPPERCASE, --gold-dim, spacing 0.35em, "SERVICES"
  Links: Jost 11px, --cream-muted, hover = --gold-primary
    Wedding Invitations
    Mehndi Cards
    Walima Cards
    Aqeeqa Cards
    Custom Designs
    Birthday Cards
 
COLUMN 3 — PAGES:
  Heading: "PAGES" (same style)
  Links: Home, Collection, Services, Process, Gallery,
         Pricing, Contact, Order Now
 
COLUMN 4 — CONTACT:
  Heading: "CONTACT" (same style)
  Content: Jost 11px, --cream-muted
    WhatsApp: [your number]
    Email: [your email]
    City: Rawalpindi, Pakistan
    Hours: Mon–Sat, 9am–9pm
 
BOTTOM BAR:
  0.5px --gold-dim top border
  Left: Copyright © 2024 ZarqaCards. All Rights Reserved.
  Right: آپ کی خوشیاں ہمارے کارڈز میں
  Font: Jost 10px, --cream-faint
 
NO IMAGES in footer.
 
 
----------------------------------------------------------------
SECTION 17 — MOBILE FLOATING WHATSAPP BUTTON
----------------------------------------------------------------
 
APPEARS ON: Mobile only (hide on desktop)
POSITION: Fixed, bottom-right, 20px from right, 20px from bottom
SIZE: 56px circle
BACKGROUND: --gold-primary
ICON: WhatsApp icon in --brown-darkest, 24px
BEHAVIOR: Always visible when user scrolls on mobile
          Tapping opens WhatsApp with pre-filled message:
          "Hi ZarqaCards, I want to order a card."
 
 
----------------------------------------------------------------
SECTION 18 — ANIMATION & INTERACTION RULES
----------------------------------------------------------------
 
PHILOSOPHY:
  Every animation should feel like cloth unfolding.
  Not like a screen refreshing. Slow, intentional, dignified.
 
WHAT TO ANIMATE AND HOW:
 
  Page load:
    Elements fade in from opacity 0 to 1
    No movement, no slide — pure fade
    Duration: 600ms, ease-out
 
  Scroll into view (all sections):
    Element starts at: opacity 0, translateY 24px
    Animates to: opacity 1, translateY 0
    Duration: 700ms
    Easing: cubic-bezier(0.16, 1, 0.3, 1)
    Trigger: when element enters 80% of viewport
    Stagger: if multiple cards in a row, delay each by 100ms
 
  Nav link hover:
    Color transition only, 300ms ease
 
  Button hover:
    Primary: background darkens 10%, 300ms
    Ghost: background fills with --gold-ghost, 300ms
 
  Card hover:
    Background lightens, border-top appears, 250ms ease
 
  Gallery cell hover:
    Overlay slides up, image scales 1.04, 400ms ease-out
 
  Hero image transition:
    Ken Burns zoom: scale 1.0 to 1.08 over 5000ms
    Cross-fade between images: 1500ms
    Easing: linear for zoom, ease-in-out for fade
 
WHAT YOU MUST NEVER DO:
  - No bounce or spring physics animations
  - No scale-up on page load (no "pop in" effects)
  - No parallax scrolling
  - No rotating or spinning elements
  - No particle effects or floating shapes
  - No confetti or celebration animations
  - No loading spinners — use skeleton screens in brown instead
  - No element that slides in from left or right — only up or fade
 
 
----------------------------------------------------------------
SECTION 19 — TECHNOLOGY STACK
----------------------------------------------------------------
 
FRONTEND FRAMEWORK:
  Next.js 14 (React based)
  Why: Fast loading, SEO friendly, works great with Pakistani
  hosting, excellent for image optimization
 
STYLING:
  Tailwind CSS with custom configuration for your design tokens
  All color variables defined in tailwind.config.js
 
FONTS:
  Loaded via next/font from Google Fonts
  Cormorant Garamond, Jost, Noto Nastaliq Urdu
 
ANIMATIONS:
  Framer Motion for scroll animations and page transitions
  CSS transitions for hover states (not Framer — too heavy)
 
IMAGES:
  next/image component for all images — auto-optimizes
  WebP format preferred, JPEG as fallback
  Lazy loading on all gallery images
 
HERO SLIDESHOW:
  Build with CSS + JavaScript (no library needed)
  Use Intersection Observer for scroll triggers
  requestAnimationFrame for smooth Ken Burns effect
 
CONTACT / ORDER SYSTEM:
  WhatsApp link with pre-filled message (no backend needed)
  Optional: Simple form using Formspree.io (free, no backend)
 
HOSTING:
  Vercel (free tier handles this size website easily)
  Connect your .pk domain from PKNIC to Vercel
 
DOMAIN:
  zarqacards.pk — register at PKNIC.net
  Cost: approximately Rs. 1,500 per year
 
PERFORMANCE TARGETS:
  Google PageSpeed score: 90+ on mobile
  First contentful paint: under 1.5 seconds
  All images compressed to under 200KB each
  Total page weight: under 3MB
 
 
----------------------------------------------------------------
SECTION 20 — IMAGE PRODUCTION CHECKLIST
----------------------------------------------------------------
 
Before the website can be built fully, you need these images.
This is the complete checklist.
 
HERO SLIDESHOW (6 images, 1920x1080px each):
  [ ] Card on dark velvet flat lay — best wedding card
  [ ] Card held in elegant hands — warm lighting
  [ ] Card in envelope on wood surface — props allowed
  [ ] Multiple cards fanned out on marble
  [ ] Close-up calligraphy/pattern detail
  [ ] Card in gift box with ribbon
 
GALLERY SECTION (7 images, various sizes):
  [ ] Large landscape: Wedding Collection hero shot
  [ ] Tall portrait: Mehndi Series cards
  [ ] Square: Diwane cover detail
  [ ] Square: Walima card in setting
  [ ] Square: Pure texture/pattern (no card needed)
  [ ] Square: Aqeeqa card design
  [ ] Large landscape: Best custom work piece
 
OG/SHARE IMAGE (1 image, 1200x630px):
  [ ] Brand image for when link is shared on WhatsApp/Facebook
      Show logo + best card + "ZarqaCards — Premium Invitations"
 
FAVICON (1 image, 512x512px):
  [ ] Your logo icon only (the circle Z emblem)
      On brown background
 
TOTAL: 14 images needed before full launch
 
IMAGE EDITING TOOL RECOMMENDATIONS:
  Free: Snapseed (mobile) or GIMP (desktop)
  Paid: Adobe Lightroom (best — Rs. 1,200/month)
  Presets to use in Lightroom: "Warm Moody Dark" style
  All images should have consistent color grading
 
 
----------------------------------------------------------------
SECTION 21 — CONTENT WRITING GUIDELINES
----------------------------------------------------------------
 
ALL TEXT ON THE WEBSITE MUST:
  - Be written in a tone that sounds premium and confident
  - Never use salesy language like "best prices" or "cheapest"
  - Never use exclamation marks (!) — premium brands don't shout
  - Use short sentences. Brevity is luxury.
  - Mix English and Urdu naturally (one Urdu line per section)
 
EXAMPLES OF WRONG TONE:
  "Get the BEST wedding cards at the LOWEST prices!! Order NOW!"
  "We are the number 1 card makers in Pakistan!!"
 
EXAMPLES OF RIGHT TONE:
  "Every occasion deserves a card worthy of its memory."
  "Crafted with intention. Delivered with care."
  "Your wedding begins with the first impression you make."
 
SECTION HEADINGS — WRITE LIKE THIS:
  Services: "Crafted for Every Occasion"
  Process: "From Vision to Your Hands"
  Gallery: "Our Work"
  Pricing: "Transparent Pricing"
  Testimonials: "What Our Clients Say"
  CTA: "Ready to Make Your Occasion Unforgettable?"
 
 
----------------------------------------------------------------
SECTION 22 — LAUNCH CHECKLIST
----------------------------------------------------------------
 
Before going live, verify every item:
 
DESIGN:
  [ ] All colors match the specified hex values exactly
  [ ] No white backgrounds anywhere on any page
  [ ] All buttons are sharp corners (no border-radius)
  [ ] Urdu text renders correctly (Noto Nastaliq font loaded)
  [ ] Gold color is consistent across all sections
  [ ] Islamic pattern texture visible but subtle on sections
 
CONTENT:
  [ ] All 14 images uploaded and optimized
  [ ] Hero slideshow works on mobile and desktop
  [ ] Ken Burns effect is subtle, not jarring
  [ ] All prices are correct
  [ ] WhatsApp number is correct and clickable
  [ ] All Urdu text is grammatically correct
 
FUNCTIONALITY:
  [ ] WhatsApp button works and opens correct message
  [ ] All navigation links go to correct sections
  [ ] Mobile menu opens and closes properly
  [ ] Contact form submits (if using Formspree)
  [ ] Logo links back to homepage
 
PERFORMANCE:
  [ ] All images are compressed
  [ ] Google PageSpeed mobile score above 85
  [ ] Website loads in under 3 seconds on 4G
 
SEO:
  [ ] Page title: "ZarqaCards — Premium Wedding Invitation Cards Pakistan"
  [ ] Meta description written
  [ ] OG image uploaded for WhatsApp sharing
  [ ] Sitemap.xml generated
 
FINAL:
  [ ] Test on iPhone Safari (most common in Pakistan)
  [ ] Test on Android Chrome
  [ ] Test on desktop Chrome and Firefox
  [ ] Share link in WhatsApp and verify OG preview looks good
 
 
================================================================
END OF DOCUMENT
ZarqaCards Website Design & Build Brief v1.0
Prepared with full brand alignment to logo and design identity
================================================================