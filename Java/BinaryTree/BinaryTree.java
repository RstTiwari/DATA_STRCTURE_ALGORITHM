package BinaryTree;

import java.util.*;

public class BinaryTree {

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        List<Integer> ans = bottomView(root);
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

    public static List<List<Integer>> orderLevelTrasversal(TreeNode node) {
        List<List<Integer>> list = new ArrayList<>();
        orderTrasversalHelper(node, list);
        return list;
    }

    public static void orderTrasversalHelper(TreeNode node, List<List<Integer>> list) {
        if (node == null) {
            return;
        }
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(node);
        while (!q.isEmpty()) {
            List<Integer> level = new ArrayList<>();
            int size = q.size();
            for (int i = 0; i < size; i++) {
                TreeNode element = q.poll();
                level.add(element.val);
                if (element.left != null) {
                    q.offer(element.left);
                }
                if (element.right != null) {
                    q.offer(element.right);
                }
            }
            list.add(level);
        }
    }

    public static List<Integer> bottomView(TreeNode node) {
        List<Integer> list = new ArrayList<>();
        bottomViewHelper(node, list);
        return list;
    }

    public static void bottomViewHelper(TreeNode node, List<Integer> list) {
        if (node == null) {
            return;
        }

        Map<Integer, Integer> mpp = new TreeMap<>();
        Queue<Pair<TreeNode, Integer>> q = new LinkedList<>();
        q.offer(new Pair(node, 0));
        while (!q.isEmpty()) {
            Pair<TreeNode, Integer> pair = q.poll();
            TreeNode element = pair.getKey();
            int line = pair.getValue();
            mpp.put(line, element.val);

            if (element.left != null) {
                q.offer(new Pair(element.left, line - 1));
            }

            if (element.right != null) {
                q.offer(new Pair(element.right, line + 1));
            }
        }
        for (Map.Entry< Integer, Integer> entry : mpp.entrySet()) {
            list.add(entry.getValue());
        }

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

class Pair<U, V> {

    private U key;
    private V value;

    public Pair(U key, V value) {
        this.key = key;
        this.value = value;
    }

    public U getKey() {
        return key;
    }

    public V getValue() {
        return value;
    }

}
