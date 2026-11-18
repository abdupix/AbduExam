/* ------------------------------------------------------------------
   sets.js  -  list of question files to load automatically.

   To add a new set: upload your .json file next to index.html, then add
   its file name to the list below (inside quotes, followed by a comma).
   You never need to edit index.html.

   Optional: the display name is taken from the file name
   (underscores become spaces). To choose your own name use:
     {file:"Week3.json", name:"Week 3 Cardiac"}
------------------------------------------------------------------- */
window.QUIZ_SETS = [
  "PSYC406_2024.json",
  "PSYC406_2025.json",
  "PSYC406_EOB_2026.json"
  // "MyNewSet.json",
];

/* On GitHub Pages, also pick up every other .json file in the repo root
   automatically (set to false if you only want the files listed above). */
window.QUIZ_AUTO_SCAN_GITHUB = true;
