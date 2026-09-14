from random import choice, randint, shuffle

# coin = choice(["heads", "tails"])
# print(coin)

# num = randint(1, 10)
# print(num)

cards = ["jack", "queen", "king"]
shuffle(cards)
for card in cards:
    print(card)
