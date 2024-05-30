
 ## Tree Reconciliation and Tree Edit Distance Problem
 * - Looking at the minimum number of nodes it takes to edit the tree
 * - After reconciling the difference, how long does it take to edit the tree
 * - Efficiency is very important to compare the trees to update one tree to
 * Look like the other tree.
 * - There is an Algorithm for the Tree Edit Distance Problem in the React library - You are looking at the Fiber Tree which is the Work-In-Progress Tree.
 * - The React Element tree is like a Blue Print - But the Fiber Tree is updated by adding a new branch or node on the area that contains the mis-match. This is the Work-In-Progress piece of the Fiber Tree.
 * - Basically we change the connection between the previously pointed node to actually be the new node on the tree.