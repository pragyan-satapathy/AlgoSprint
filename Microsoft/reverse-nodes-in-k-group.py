# https://leetcode.com/problems/reverse-nodes-in-k-group/description/?envType=company&envId=microsoft&favoriteSlug=microsoft-thirty-days
# https://leetcode.com/problems/reverse-nodes-in-k-group/submissions/2095055968/?envType=company&envId=microsoft&favoriteSlug=microsoft-thirty-days

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        def lenOfLinkedList(head):
            l = 0
            while head:
                head = head.next
                l += 1
            print(l)
            return l

        def reverseLinkedList(curr, k):
            prev = None
            while k:
                nxt = curr.next 
                curr.next = prev
                prev = curr
                curr = nxt
                k-=1
            return [prev, curr]

        l = lenOfLinkedList(head)
        ans = ListNode(None)
        tail = ans
        while l >= k:
            a = reverseLinkedList(head, k)
            tail.next = a[0]
            tail = head
            head = a[1]
            l -= k
        if l:
            tail.next = head
            
        
        return ans.next
