This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md).

This was created as a Stackathon project for [Fullstack Academy](https://www.fullstackacademy.com/).

Database for Dungeon Masters 5e
========
Database for Dungeon Masters 5e is an application that runs as a window locally on your machine and helps you, the Dungeon Master, manage your role playing sessions by removing a lot of the encumberments that come with pen traditional pen and paper approaches. 

## Overview
 * <strong>Reference</strong> 
Database for Dungeon Masters 5e has access to the 5e Systems Reference Document (SRD) data provided by Wizards of the Coast with the Open Game License (OGL). The app allows you to search through all the standard 5e monsters, spells, and magic items so you don't have to thumb through the rule books in the middle of a session.
 * <strong>Create</strong>
Dungeons and Dragons has a great active community that enjoys writing original content that is compatible with the base rules. Database for Dungeon Masters 5e allows you to import your original content into the app with a built in creation feature. All of your content can be saved locally and used in the application alongside the standard 5e content.   
 * <strong>Play</strong>
A good fantasy setting should feel immersive and concrete. As a dungeon master often times it is hard to generate content on the spot if your players do something unexpected. Sometimes you need something generated for you so you can focus on telling the story and keeping your players immersed in the world. I hope to bring many features that assist you in making your worlds seem concrete and immersive such as:
    * **Loot Generator** - For chests, furniture, dead bodies, you name it!
    * **Building Generator** - For when your party visits places you were not expecting. 
    * **NPC Generator** - Randomly generated NPC's with backgrounds, character traits, appearance, quirks, and secrets so every social encounter feels deep.
    * **Combat Tracker** - Keeps track of initiative, stats, and health points for whatever monsters you throw at your players.

## Features
1. Monster Search - [Working]
2. Spell Search - [Working]
3. Magic Item Search - [Working]

	* Search TODO: Save 'recent' at top of list 

4. Create Monster - [Working]
5. NPC Generator - [Working]
6. Dice Roller - [Working]
7. Building Generator - [In Progress]
8. Create Spell - [In Progress]
9. Create Magic Item - [In Progress]
10. Create Playable Character - [In Progress]
11. Combat Tracker - [In Progress]
12. Loot Generator - [Not Started]
13. Store Inventory Generator - [Not Started]

## Installation

Database for Dungeon Masters 5e is currently in early development and has been written as an Electron app with React, Redux, and SCSS. To run Database for Dungeon Masters 5e on your machine do the following:

1. Run`git clone https://github.com/FrostyCupCakes/5e-Database-for-Dungeon-Masters.git`
2. Install `node` using instructions from [here](https://nodejs.org/en/download/package-manager/)
3. Install `electron` with `npm install electron --save-dev --save-exact`
4. In the root directory of the project run `npm install`
5. Run `npm start`
