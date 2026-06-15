# Ẩm Thực Việt - Vietnamese Food Listicle

Submitted by: **Duc Tran**

This web app is a listicle of iconic Vietnamese dishes. Users can browse a curated list of 7 traditional Vietnamese foods, each with detailed information including origin, category, price range, ingredients, and a fun fact.

Time spent: **X** hours spent in total

## Required Features

The following **required** features are completed:

- [x] The web app uses only HTML, CSS, and JavaScript without a frontend framework
- [x] Front page of web app is functional and appropriately styled
  - [x] The web app displays a title
  - [x] Website displays at least five unique list items
  - [x] Each list item includes at least three displayed attributes (name, origin, category, price, rating, description)
- [x] Each list item has a corresponding page
  - [x] The user can click on each item in the list to see a detailed view of it, including all database fields
    - e.g., `localhost:3000/dishes/pho` and `localhost:3000/dishes/banh-mi`
  - [x] The web app serves an appropriate 404 page when no matching route is defined
- [x] The webpage is styled with Picocss

## Stretch Features

The following **optional** features are implemented:

- [x] List items are displayed in a unique format (card grid with hover animations)

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='walkthrough.gif' title='Video Walkthrough' alt='Video Walkthrough' />

GIF created with [LiceCap](https://www.cockos.com/licecap/) or [ScreenToGif](https://www.screentogif.com/).

## Notes

- Used Picocss v2 for base styling, extended with custom card grid layout
- 7 Vietnamese dishes with attributes: name, slug, origin, category, description, price, rating, image, ingredients, funFact
- Each dish has its own detail route at `/dishes/:slug`
- 404 page is served for both unknown dish slugs and any undefined routes

## License

Copyright **2026** **Duc Tran**

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
