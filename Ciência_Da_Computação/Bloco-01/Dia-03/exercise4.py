import re

emails = ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]

def validated_email(email: str):
    regex = re.compile(r'^[\w-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$')
    if regex.search(email) != None:
        return email

def select_valid_emails(emails: list[str]):
    result = []
    for email in emails:
        if validated_email(email):
            result.append(email)
    return result

print(select_valid_emails(emails))