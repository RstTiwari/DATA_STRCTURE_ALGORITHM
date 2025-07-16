package ArrayList;

import java.util.Arrays;

public class RotateImageBy90 {

    public void rotateRowBy90(int[][] mat) {
        int[][] transMat = transpose(mat);
        System.out.println(".()" + Arrays.deepToString(transMat) + " " + 3 / 2);
        for (int i = 0; i < transMat.length; i++) {
            for (int j = 0; j < transMat.length / 2; j++) {
                int tem = transMat[i][j];
                transMat[i][j] = transMat[i][transMat.length - 1 - j];
                transMat[i][transMat.length - 1 - j] = tem;
            }
        }
    }

    public int[][] transpose(int[][] mat) {
        for (int i = 0; i < mat.length; i++) {
            for (int j = i; j < mat[0].length; j++) {
                int tem = mat[i][j];
                mat[i][j] = mat[j][i];
                mat[j][i] = tem;
            }
        }

        return mat;
    }

    public static void main(String[] var) {
        int[][] mat = {{7, 4, 1}, {8, 5, 2}, {9, 6, 3}};
        RotateImageBy90 rotatedImageClass = new RotateImageBy90();
        rotatedImageClass.rotateRowBy90(mat);
        // if you want to rotate the matrix by 180 degree rotate it twice in positions
        rotatedImageClass.rotateRowBy90(mat);
        String string = Arrays.deepToString(mat);
        System.out.println(".()" + string);
    }
}
