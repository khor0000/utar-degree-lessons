# UTAR degree lessons

Study notes written as interactive micro-lessons, one folder per course.

| Folder | Course | When |
|---|---|---|
| `Y1/Sem3/UCCD1024-Data-Structure-and-Algorithmic-Problem-Solving/` | UCCD1024 Data Structure and Algorithmic Problem Solving | Year 1, Sem 3 |
| `Y2/Sem1/UCCD2123-User-Experience-Design/` | UCCD2123 User Experience Design | Year 2, Sem 1 |

## How to use

1. Clone or download the whole repo, not single files. Each course's `lessons/` loads shared CSS and JS from the `assets/` folder beside it.
2. Open any `.html` file in a course's `lessons/` folder in your browser. No server needed.

## Folder structure

```
Y<year>/
└── Sem<n>/
    └── <course code>-<full course name>/
        ├── assets/      shared CSS and JS for that course's lessons
        ├── lessons/     one HTML file per concept
        └── reference/   cheat sheets and glossary (where present)
```
