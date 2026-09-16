from string import ascii_letters, digits, punctuation
from itertools import product

# Takes less than a second to go through 10,000 combinations made up from from 10 digits (4 chars)

# Takes about 2 min to go through combinations of 52 characters (26 lowecase, 26 uppercase) (4 chars)

# For a combination that has letters, digits, and punctuation, there are 6 quadrillion combinations to go through, significantly harder to find the correct passcode, in the worst case it would take 2 million years to brute force your way into such a system

for passcode in product(ascii_letters + digits + punctuation, repeat=8):
    print(passcode)

# Security
    # Rate limiting
    # Two-factor authentication
    # Hashing (deterministic password encryption)
    # Rainbow table attacks (long prepared hash/password tables)
    # Salting (adding in noise before the hashing process)
    # Public/Private key cryptography (SSH/RSA)
# Privacy
    # End-to-end encryption
# Secure Deletion
    # Sanitised in a non-recoverable way
# Full-Disk Encryption
    # Password protected encryption at rest
# Randsomware
    # Ill fated applications of these processes
    # Keep a backup store of your data elsewhere