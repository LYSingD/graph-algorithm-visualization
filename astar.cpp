#include <queue>
#include <cmath>
#include <vector>
#include <iostream>

class Node
{
private:
    /* data */
    int x;
    int y;
    bool is_accessible = true;

public:
    Node(int row, int col) : x{row}, y{col} {};
};

class TraversableNode : public Node
{
private:
    double path_cost;           // g(x)
    double heuristic_estimate;  // h(x)
    double total_cost_estimate; // f(x)
public:
    TraversableNode(int row, int col) : Node(row, col)
    {
        path_cost = INFINITY;
        heuristic_estimate = INFINITY;
        total_cost_estimate = INFINITY;
    }

    friend std::ostream &operator<<(std::ostream &os, const TraversableNode &node);
};

std::ostream &operator<<(std::ostream &os, const TraversableNode &node)
{
    os << "Path Cost: " << node.path_cost << "\n"
       << "Heuristic Estimate: " << node.heuristic_estimate << "\n"
       << "Total Cost Estimate: " << node.total_cost_estimate << "\n";
    return os;
}

int main()
{
    /**
     *
     * Pseudocode
     *
     * read the input file where storing the matrix grid
     * validate the input file
     *  check the grid is m * n matrix
     *  check there is only one start point
     *  check there is only one end point
     *  return startpoint and endpoint
     *
     * if input file is invalid
     *  throw error and print proper message back to user
     *
     * initialize the open list with the start point as starting node
     * ** use priority queue for the open list
     * initialize an visited list for recording visited node with empty list
     *
     * while the open list is not empty:
     *  go through the open list
     *      if there is only one node, state it as current_node
     *      else find the node with lowest f score, state it as current_node
     *  if the current node is our destination node
     *     return the grid with updated path
     *     do backtracking for the updated path from end point to looking their parent
     *
     * remove all the node from the open list and move it to visited list
     * for each neighbor of the current node: (including diagonal):
     *  if the neighbour is an obstacle:
     *      continue to the next neighbour
     *  else:

     *      calculate neighbour's g score = current node's g score + squrt((neigbour_node.x - current_node.x)^2 + (neighbour_node.y - current_node.y)^2)
     *      calculate neighbour's h score = use Manhattan Distance = |neigbour_node.x - destination.x| + |neighbour.x - destination.y|
     *      calculate neighbour's f score = g + h
     *
     *      append it to the open list
     *
     * Return "No Path exists"
     */

    std::vector<std::vector<char>> grid = {
        {'0', '0', '0', '0', '0', '0', '0', '0', '0', '0'},
        {'0', '0', '1', '1', '0', '0', '1', '1', '1', '0'},
        {'0', '1', '1', '0', '0', '0', '0', '0', '1', '0'},
        {'S', '0', '0', '0', '1', '1', '0', '0', '0', '0'},
        {'0', '1', '1', '0', '0', '0', '1', '0', '0', '0'},
        {'0', '0', '0', '1', '1', '1', '0', '1', '1', '0'},
        {'0', '1', '0', '0', '0', '0', '0', '0', '0', '0'},
        {'0', '0', '0', '1', '1', '1', '0', '1', '1', '1'},
        {'0', '1', '0', '0', '0', '0', '1', '0', '0', '0'},
        {'0', '0', '0', '1', '1', '0', '0', '0', '0', 'E'},
    };

    int row = 0;
    int col = 0;
    TraversableNode current(row, col);
    std::cout << current << std::endl;
    // Let say we have a valid matrix grid, startpoint, endpoint
}