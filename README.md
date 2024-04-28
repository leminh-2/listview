# React ListView Project

This project demonstrates a ListView in React that supports both pull-to-refresh and load more functionality.

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-listview-project.git
   ```
2. Navigate into the project directory:
   ```bash
   cd react-listview-project
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the project:
   ```bash
   npm start
   ```

## Features

- **ListView of Items**: The main screen displays a ListView of items. Each item is a random 3-character string.

- **Pull-to-Refresh**: The ListView supports pull-to-refresh functionality. When you pull to refresh, the items in the ListView are replaced with new random strings.

- **Load More**: The ListView supports load more functionality. When you scroll to the bottom, 20 more items are loaded and appended to the ListView.

## Code Overview

The main component is `App`. It uses the `useState` hook to manage the state of the items in the ListView and whether more items can be loaded.

The `generateRandomString` function generates a random 3-character string.

The `fetchMoreData` function is called when the user scrolls to the bottom of the ListView. It appends 20 more items to the ListView. If there are already 100 items, it sets `hasMore` to `false` to prevent more items from being loaded.

The `handleRefresh` function is called when the user performs a pull-to-refresh action. It replaces the items in the ListView with new random strings.

## Dependencies

- `react`
- `react-dom`
- `react-infinite-scroll-component`
- `react-pull-to-refresh`
