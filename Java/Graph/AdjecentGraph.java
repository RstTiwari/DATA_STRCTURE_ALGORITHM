package Graph;

import java.util.*;

public class AdjecentGraph {

    private int V;
    private LinkedList<Integer>[] adjList;

    public AdjecentGraph(int v) {
        V = v;
        adjList = new LinkedList[v];
        for (int i = 0; i < V; i++) {
            adjList[i] = new LinkedList<>();
        }
    }

    public void addEdege(int u, int v) {
        adjList[u].add(v);
        adjList[v].add(u);
    }

    public void printGraph() {
        for (int i = 0; i < V; i++) {
            System.out.println(i);
            for (int negibhour : adjList[i]) {
                System.out.println(negibhour);
            }
            System.out.println();
        }
    }

    public List<Integer> bfs(int start) {
        boolean vis[] = new boolean[V];
        Queue<Integer> q = new LinkedList<>();
        List<Integer> trasversal = new ArrayList<>();
        vis[start] = true;
        q.add(start);
        while (!q.isEmpty()) {
            int current = q.poll();
            trasversal.add(current);

            for (Integer neighbor : adjList[current]) {
                if (!vis[neighbor]) {
                    q.add(neighbor);
                    vis[neighbor] = true;
                }
            }

        }
        return trasversal;
    }

    public static void main(String[] args) {
        AdjecentGraph g = new AdjecentGraph(5);
        g.addEdege(0, 1);
        g.addEdege(0, 2);
        g.addEdege(1, 3);
        g.addEdege(3, 4);
        g.addEdege(2, 4);
        g.printGraph();
        List<Integer> trasversal = g.bfs(0);
        System.out.println(trasversal);
    }

}
