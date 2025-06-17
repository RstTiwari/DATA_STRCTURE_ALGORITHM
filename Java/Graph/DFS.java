package Graph;

import java.util.*;

public class DFS {

    private int V;
    private LinkedList<Integer>[] adjList;

    public DFS(int v) {
        V = v;
        adjList = new LinkedList[v];
        for (int i = 0; i < V; i++) {
            adjList[i] = new LinkedList<>();
        }
    } 

    public void addEdge(int u, int v) {
        adjList[u].add(v);
        adjList[v].add(u);
    }

    public void printGraph() {
        for (int i = 0; i < V; i++) {
            for (int it : adjList[i]) {
                System.out.println(i + ":" + it);
            }
        }
    }

    public void dfsRecursion(int node, List<Integer> trasversal, boolean[] vis) {
        vis[node] = true;
        trasversal.add(node);

        for (Integer it : adjList[node]) {
            if (!vis[it]) {
                dfsRecursion(it, trasversal, vis);
            }

        }

    }

    public List<Integer> dfsGraph(int start) {
        List<Integer> traseversal = new ArrayList<>();
        boolean vis[] = new boolean[this.V + 1];
        vis[start] = true;
        dfsRecursion(start, traseversal, vis);
        return traseversal;

    }

    public static void main(String[] args) {
        DFS g = new DFS(9);
        g.addEdge(1, 2);
        g.addEdge(1, 3);
        g.addEdge(2, 5);
        g.addEdge(2, 6);
        g.addEdge(3, 4);
        g.addEdge(4, 7);
        g.addEdge(7, 8);
        g.addEdge(8, 3);
        g.printGraph();
        List<Integer> tra = g.dfsGraph(1);
        System.out.println(tra);

    }
}
