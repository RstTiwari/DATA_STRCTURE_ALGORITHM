package BinaryTree;

import java.util.*;

public class BinaryTree {

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        List<Integer> ans = inorderTrasversal(root);
        System.out.println(ans);
    }

    public static List<Integer> inorderTrasversal(TreeNode node) {
        List<Integer> result = new ArrayList<>();
        inorderTrasversalHelper(node, result);
        return result;
    }

    public static void inorderTrasversalHelper(TreeNode node, List result) {

        if (node == null) {
            return;
        }

        // print the left of side of node
        inorderTrasversalHelper(node.left, result);
        result.add(node.val);
        inorderTrasversalHelper(node.right, result);

    }
}

class TreeNode {

    int val;
    TreeNode left;
    TreeNode right;

    public TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

}
