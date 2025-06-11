package Graph;

import java.util.*;

class BFS {

    private int V;
    private LinkedList<Integer>[] adjList;

    public BFS(int v) {
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

    public List<Integer> bfs(int start) {
        List<Integer> trasversal = new ArrayList<>();
        boolean[] visit = new boolean[V];
        Queue<Integer> q = new LinkedList<>();

        visit[start] = true;
        q.add(start);
        while (!q.isEmpty()) {
            int current = q.poll();
            trasversal.add(current);

            for (Integer neb : adjList[current]) {
                if (!visit[neb]) {
                    q.add(neb);
                    visit[neb] = true;
                }
            }
        }
        return trasversal;
    }

    public static void main(String[] args) {
        BFS tree = new BFS(5);
        tree.addEdege(0, 1);
        tree.addEdege(0, 2);
        tree.addEdege(1, 3);
        tree.addEdege(2, 4);
        tree.addEdege(3, 4);
        List<Integer> bfs = tree.bfs(0);
        System.out.println(bfs);

    }

}
