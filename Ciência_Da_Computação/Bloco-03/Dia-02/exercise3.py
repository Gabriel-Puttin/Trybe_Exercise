from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options


options = Options()
options.add_argument("--headless")

firefox = webdriver.Firefox(options=options)


def scrape(url):
    firefox.get(url)
    result = []
    cards = firefox.find_elements(By.CLASS_NAME, "post-outer")

    for card in cards:
        content = dict()
        content["title"] = (
            card.find_element(By.CLASS_NAME, "entry-title")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )
        content["link"] = (
            card.find_element(By.CLASS_NAME, "entry-title")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )
        result.append(content)
    return result


print(scrape("https://diolinux.com.br/"))
