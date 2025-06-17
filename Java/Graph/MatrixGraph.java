package Graph;

public class MatrixGraph {

    final int V;
    final int[][] adjMat;

    public MatrixGraph(int v) {
        V = v;
        adjMat = new int[v][v];
    }

    public void addEdges(int i, int j) {
        adjMat[i][j] = 1;
        adjMat[j][i] = 1;
    }

    public void printGraph() {
        System.out.println("edge of Trees");
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                System.out.println(adjMat[i][j] + "");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        MatrixGraph g = new MatrixGraph(6);
        g.addEdges(0, 1);
        g.addEdges(0, 2);
        g.addEdges(1, 3);
        g.addEdges(3, 4);
        g.addEdges(2, 4);
        g.printGraph();

    }

}
