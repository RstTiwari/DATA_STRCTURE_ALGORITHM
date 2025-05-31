package Graph;

import java.util.*;

public class Graph {

    private int V; // no of vertices

    private LinkedList<Integer>[] agList;

    public Graph(int v) {
        V = v;
        agList = new LinkedList[v];
        for (int i = 0; i < v; i++) {
            agList[i] = new LinkedList<>();
        }
    }

    public void addEdge(int u, int v) {
        agList[u].add(v);
        agList[v].add(u);
    }

    public void printGraph() {
        for (int i = 0; i < V; i++) {
            System.out.println(i);
            for (Integer neighbor : agList[i]) {
                System.out.println(neighbor);
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Graph g = new Graph(5);
        g.addEdge(0, 1);
        g.addEdge(0, 4);
        g.addEdge(1, 2);
        g.addEdge(1, 3);
        g.addEdge(1, 4);
        g.addEdge(2, 3);
        g.addEdge(3, 4);
        g.printGraph();

    }
}
