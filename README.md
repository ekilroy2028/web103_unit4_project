# WEB103 Project 4 - Bolt Bucket

Submitted by: Elizabeth Kilroy

Bolt Bucket is a full-stack car customization web app built with React, Node.js, Express, and PostgreSQL. Users can design their dream car by selecting from a range of customizable features, including exterior color, wheel type, interior material, and engine type.

Time spent: 40 hours

## Required Features

The following **required** functionality is completed:

- [X] **The web app uses React to display data from the API.**
- [X] **The web app is connected to a PostgreSQL database, with an appropriately structured `CustomItem` table.**
  - [X]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [X]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [X] **Users can view **multiple** features of the `CustomItem` (e.g. car) they can customize, (e.g. wheels, exterior, etc.)**
- [X] **Each customizable feature has multiple options to choose from (e.g. exterior could be red, blue, black, etc.)**
- [X] **On selecting each option, the displayed visual icon for the `CustomItem` updates to match the option the user chose.**
- [X] **The price of the `CustomItem` (e.g. car) changes dynamically as different options are selected *OR* The app displays the total price of all features.**
- [X] **The visual interface changes in response to at least one customizable feature.**
- [X] **The user can submit their choices to save the item to the list of created `CustomItem`s.**
- [X] **If a user submits a feature combo that is impossible, they should receive an appropriate error message and the item should not be saved to the database.**
- [X] **Users can view a list of all submitted `CustomItem`s.**
- [X] **Users can edit a submitted `CustomItem` from the list view of submitted `CustomItem`s.**
- [X] **Users can delete a submitted `CustomItem` from the list view of submitted `CustomItem`s.**
- [X] **Users can update or delete `CustomItem`s that have been created from the detail page.**


The following **optional** features are implemented:

- [X] Selecting particular options prevents incompatible options from being selected even before form submission

The following **additional** features are implemented:

- [X] List anything else that you added to improve the site's functionality!

  • Sound toggle to enable or disable audio feedback
  • Visual indicators for sound status (on/off)
  • Horn sound plays when saving a car, clank sound for all other interactions



## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  GIF tool here

[Kap](https://getkap.co/) for macOS


## Notes
Features:
  • Dynamic Pricing — Total price updates in real time as options are selected, starting at a base price of $25,000.

  • Visual Preview — The car preview changes color in real time as the user selects different exterior options.

  • Full CRUD — Save, view, edit, and delete custom car builds. 

  • Validation — Prevents impossible feature combinations and alerts the user with an error message. 

  • Early Combo Detection — Incompatible options are disabled before submission (e.g., electric engine + carbon fiber wheels). 

Tech stack:
  • Frontend: React, Vite, React Router 
  • Backend: Node.js, Express 
  • Database: PostgreSQL (hosted on Render)

To start:
  1. Clone the repo
  2. Run `npm install` in the root folder
  3. Add your database credentials to `server/.env`
  4. Run `npm run db:reset` to set up the database
  5. Run `npm run dev` to start the app
  6.Save it, then commit and push! 

## License

Copyright [2026] [Elizabeth Kilroy]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
