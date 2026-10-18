# Components

## Container Components (manage state and logic)

| Component | Holds | Purpose |
|---|---|---|
| **App** | `tasks[]`, `filter` | Top-level state. Passes data and handlers down to children. |
| **ContactForm** | `formData` | Manages its own form state (controlled component). |

## Presentational Components (display only)

| Component | Receives | Renders |
|---|---|---|
| **Nav** | (nothing) | Header with links to routes |
| **TodoList** | `tasks[]`, `onToggle`, `onDelete` | The list of tasks |
| **TodoItem** | `task`, `onToggle`, `onDelete` | One task row with complete + delete buttons |
| **AddTodoForm** | `onAdd` | Input + submit button for new tasks |
| **FilterButtons** | `filter`, `onFilterChange` | All / Completed / Incomplete buttons |
| **Contact** | (nothing) | Wraps ContactForm with a heading |

## Data FlowX

- **App** holds all the important state
- App passes state and callbacks down to **TodoList**, **AddTodoForm**, **FilterButtons**
- **TodoList** passes each individual task to **TodoItem**
- When a user clicks a button in **TodoItem**, the callback fires, and **App** updates state
- **ContactForm** is self-contained — no interaction with the task side of the app

## Component Tree

# Components

## Container Components (manage state and logic)

| Component | Holds | Purpose |
|---|---|---|
| **App** | `tasks[]`, `filter` | Top-level state. Passes data and handlers down to children. |
| **ContactForm** | `formData` | Manages its own form state (controlled component). |

## Presentational Components (display only)

| Component | Receives | Renders |
|---|---|---|
| **Nav** | (nothing) | Header with links to routes |
| **TodoList** | `tasks[]`, `onToggle`, `onDelete` | The list of tasks |
| **TodoItem** | `task`, `onToggle`, `onDelete` | One task row with complete + delete buttons |
| **AddTodoForm** | `onAdd` | Input + submit button for new tasks |
| **FilterButtons** | `filter`, `onFilterChange` | All / Completed / Incomplete buttons |
| **Contact** | (nothing) | Wraps ContactForm with a heading |

## Data Flow

- **App** holds all the important state
- App passes state and callbacks down to **TodoList**, **AddTodoForm**, **FilterButtons**
- **TodoList** passes each individual task to **TodoItem**
- When a user clicks a button in **TodoItem**, the callback fires, and **App** updates state
- **ContactForm** is self-contained — no interaction with the task side of the app

## Component Tree
# Components

## Container Components (manage state and logic)

| Component | Holds | Purpose |
|---|---|---|
| **App** | `tasks[]`, `filter` | Top-level state. Passes data and handlers down to children. |
| **ContactForm** | `formData` | Manages its own form state (controlled component). |

## Presentational Components (display only)

| Component | Receives | Renders |
|---|---|---|
| **Nav** | (nothing) | Header with links to routes |
| **TodoList** | `tasks[]`, `onToggle`, `onDelete` | The list of tasks |
| **TodoItem** | `task`, `onToggle`, `onDelete` | One task row with complete + delete buttons |
| **AddTodoForm** | `onAdd` | Input + submit button for new tasks |
| **FilterButtons** | `filter`, `onFilterChange` | All / Completed / Incomplete buttons |
| **Contact** | (nothing) | Wraps ContactForm with a heading |

## Data Flow

- **App** holds all the important state
- App passes state and callbacks down to **TodoList**, **AddTodoForm**, **FilterButtons**
- **TodoList** passes each individual task to **TodoItem**
- When a user clicks a button in **TodoItem**, the callback fires, and **App** updates state
- **ContactForm** is self-contained — no interaction with the task side of the app

## Component Tree
App
├── Nav
├── Routes
├── /todos
│ ├── AddTodoForm
│ ├── FilterButtons
│ └── TodoList
│ └── TodoItem (one per task)
└── /contact
└── Contact
└── ContactForm