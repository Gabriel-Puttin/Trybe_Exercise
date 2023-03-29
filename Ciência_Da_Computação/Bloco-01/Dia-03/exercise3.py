import re

def validated_email(email: str):
    regex = re.compile(r'^[\w-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$')
    if regex.search(email) != None:
        return email
    else:
        raise ValueError("Invalid email")

print(validated_email('gabriel@email.com'))
