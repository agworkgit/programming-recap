# Partition
# An iterative algorithm which is used in the **quick sort** algorithm.
# It selects the first element as the **pivot**.
# Then, we should **reorder the list** so that elements **smaller** than the pivot are placed **before the pivot** and elements with **greater values** than the pivot are placed **after the pivot**.

unordered_list = [14, 3, 16, 7, 28, 13, 1, 9, 27, 21]

print(unordered_list)

# Practice implementation (naive solution)

def practice_algo(list):
    pivot = list[0]
    smaller = []
    greater = []
    i = 0
    while i < len(list):
        if list[i] < pivot:
            smaller.append(list[i])
        elif list[i] > pivot:
            greater.append(list[i])
        i = i + 1
    return smaller + [pivot] + greater


# print(practice_algo(unordered_list))

# The correct implementation (in-place with i and j)

# Beware that starting index is 0, in the pseudocode it's 1-indexed

def partition_algo(list):
    pivot = list[0]
    i = 1
    j = len(list) - 1

    while i < j:
        while i <= j and list[i] <= pivot:
            i += 1
        while i <= j and list[j] >= pivot:
            j -= 1
        if i < j:
            list[i], list[j] = list[j], list[i]
    list[0], list[j] = list[j], list[0]

    return j

# pivot_position = partition_algo(unordered_list)

# print(unordered_list)
# print(pivot_position)

# Quick sort

def quick_sort(list):

    if len(list) <= 1:
        return list
    j = partition_algo(list)
    left = list[:j]
    pivot = list[j]
    right = list[j + 1:]

    return quick_sort(left) + [pivot] + quick_sort(right)

sorted_list = quick_sort(unordered_list)
print(sorted_list)
