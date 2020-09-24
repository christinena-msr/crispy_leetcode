// Reverse a singly linked list

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const lowMemoryReverseList = function(head) {
    // set a variable that hold the current head
    // set a variable that captures current head.next
    // loop until you reach the end of the list
    // set a variable that saves head.next.next
    // set current.next to the new tail (current head)
    // set current head.next to null (make a new tail)
    // set the new head to current
    // set current to the next variable of remaining nodes in original list
    if(head && head.next) {
        let newHead = head;
        let current = head.next;
        let next = current.next;
        current.next = newHead;
        newHead.next = null;
        newHead = current;
        current = next;
            
        while(current) {
            next = current.next;
            current.next = newHead;
            newHead = current;
            current = next;
        }
        return newHead;
    }
    return head;
}

const fasterReverseList = function(head) {
    if(head && head.next) {
        let current = head.next;
        let next = current.next;
        current.next = head;
        head.next = null;
        head = current;
        current = next;

        while(current) {
            next = current.next;
            current.next = head;
            head = current;
            current = next;
        }
    }
    return head;
}

const test1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(test1);
console.log(reverseList(test1).next.next);

// results:
// runtime: 84 ms - 47.79% 
// memory: 38.1 MB - 95.45%

// second submission - remove newHead var and change head
// runtime: 72 ms - 95.27%
// memory: 38.8 MB - 44.20%

// recursive submission