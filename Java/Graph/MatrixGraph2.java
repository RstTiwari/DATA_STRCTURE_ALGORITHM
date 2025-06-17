package Graph;

class MatrixGraph2 {

    final int[][] matRix;
    private int V;

    public MatrixGraph2(int n) {
        matRix = new int[n][n];
        V = n;
    }

    public void addEdege(int u, int v) {
        matRix[u][v] = 1;
        matRix[v][u] = 1;
    }

    public void prntGraph() {
        for (int i = 0; i < V; i++) {
            System.out.println(1 + ":");
            for (int j = 0; j < V; j++) {
                System.out.println(matRix[i][j]);
            }
        }
    }

    public static void main(String[] args) {
        MatrixGraph2 g = new MatrixGraph2(6);
        g.addEdege(0, 1);
        g.addEdege(0, 2);
        g.addEdege(2, 4);
        g.addEdege(1, 3);

        g.prntGraph();
    }
}
