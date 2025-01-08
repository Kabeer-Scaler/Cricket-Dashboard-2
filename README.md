Cricket Analytics Dashboard
1. Project Overview
Project Name: Cricket Analytics Dashboard
Description: A web-based platform to track real-time cricket scores, player statistics, and match analytics with interactive visualizations.
Objective: To create a user-friendly and dynamic dashboard for cricket enthusiasts to access live updates and deep insights in one place.
Target Audience: Cricket fans, analysts, and developers interested in sports analytics.
2. Features
Live score updates from matches around the world.
Upcoming series/matches scheduled.
List of different players' names.
3. Technology Stack
Frontend:
HTML, CSS, JavaScript
APIs:
Live cricket score API (e.g., CricAPI, SportsRadar).
4. Design and Architecture
Wireframes:
Main Dashboard (Live Scores Section, Stats Section).
Components:
Header 
Live Scores Section.
Player Stats Section.
Upcoming series schedule section
Data Flow:
API calls fetch live data → Processed using JavaScript → Rendered on the dashboard.
5. Implementation Details
5.1. Live Scores Module
Functionality: Fetches and displays live scores using APIs.
Code Explanation: Uses fetch() to retrieve data and update the DOM dynamically.
5.2. Player Statistics Module
Functionality: Displays individual and team stats with change after every few minutes.
Code Explanation: Data fetched from API is parsed and displayed.
5.3 Limitations
CricAPI is used in my project, which is a free API and it only allows around 100-106 hit requests per day, and after that it doesn't display any data, but to overcome that, my project displays the last fetched score before the request limit for the API exceeds.      


  

