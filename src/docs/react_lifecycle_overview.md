## React Component Lifecycle Overview

### Mount Phase
| Step | Hook / Method | When it runs |
|------|----------------|---------------|
| **Render** | (component function) | Before DOM exists |
| **Commit** | — | DOM created and refs assigned |
| **Layout effects** | `useLayoutEffect` | After DOM commit, before paint |
| **Paint** | — | Browser paints |
| **Passive effects** | `useEffect` | After paint |

### Update Phase
| Step | Hook / Method | When it runs |
|------|----------------|---------------|
| **Render** | — | Re-renders with new props/state |
| **Commit** | — | DOM updated |
| **Layout cleanup → layout effect** | `useLayoutEffect` | Before & after paint |
| **Passive cleanup → passive effect** | `useEffect` | Before & after paint |

### Unmount Phase
| Step | Hook / Method | When it runs |
|------|----------------|---------------|
| **Cleanup** | Cleanup functions from effects | Before DOM removed |

