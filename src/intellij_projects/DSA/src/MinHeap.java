public class MinHeap {
    private int[] heap;
    private int size;
    private int maxSize;

    private static final int FRONT = 1;

    public MinHeap(int maxSize) {
        this.maxSize = maxSize;
        size = 0;

        heap = new int[this.maxSize + 1];
        heap[0] = Integer.MIN_VALUE;
    }

    // Returning the position of the parent of the node
    // currently at pos
    private int parent(int pos) {
        return pos / 2;
    }

    // Returning the position of the left child
    // for the node currently at pos
    private int leftChild(int pos) {
        return (2 * pos);
    }

    // Returning the position of the right child
    // for the node currently at pos
    private int rightChild(int pos) {
        return (2 * pos) + 1;
    }

    // Returning true if the passed node is a leaf node
    private boolean isLeaf(int pos) {
        if (pos > (size / 2)) {
            return true;
        }

        return false;
    }

    // Swap to nodes of the heap
    private void swap(int fpos, int spos) {
        int tmp;
        tmp = heap[fpos];

        heap[fpos] = heap[spos];
        heap[spos] = tmp;
    }

    // Heapify the node at pos
    private void minHeapify(int pos) {
        int swapPos = pos;
        if (!isLeaf(pos)) {
            // swap with the minimum of the two children
            // to check if right child exists. Otherwise default value
            // will be '0' and that will be swapped with parent node.
            if (rightChild(pos) <= size) {
                swapPos = heap[leftChild(pos)] < heap[rightChild(pos)] ? leftChild(pos) : rightChild(pos);
            } else {
                swapPos = leftChild(pos);
            }

            if (heap[pos] > heap[leftChild(pos)] || heap[pos] > heap[rightChild(pos)]) {
                swap(pos, swapPos);
                minHeapify(swapPos);
            }
        }
    }

    // insert a node into the heap
    public void insert(int element) {
        if (size >= maxSize) {
            return;
        }

        heap[++size] = element;
        int current = size;

        while (heap[current] < heap[parent(current)]) {
            swap(current, parent(current));
            current = parent(current);
        }
    }

    // print the contents of the heap
    public void print() {
        for (int i = 1; i <= (size/2); i++) {
            // printing the parent and both childrens
            System.out.print(
                    "PARENT : " + heap[i]
                    + " LEFT CHILD : " + heap[2 * i]
                    + " RIGHT CHILD : "
                    + ((2 * i + 1) <= size ? (heap[2 * i + 1]): "null")
            );
            System.out.println();
        }
    }

    public int remove() {
        int popped = heap[FRONT];
        heap[FRONT] = heap[size--];
        minHeapify(FRONT);

        return popped;
    }

    public static void main(String[] args) {
        // Display message
        System.out.println("The MinHeap is ");

        MinHeap minHeap = new MinHeap(15);
        minHeap.insert(5);
        minHeap.insert(3);
        minHeap.insert(17);
        minHeap.insert(10);
        minHeap.insert(84);
        minHeap.insert(19);
        minHeap.insert(6);
        minHeap.insert(22);
        minHeap.insert(9);

        // print all elements of the heap
        minHeap.print();

        // remove minimum value from above heap and print it
        System.out.println("The Min val is " + minHeap.remove());
        System.out.println("\n\n update minHeap");
        minHeap.print();

    }
}
