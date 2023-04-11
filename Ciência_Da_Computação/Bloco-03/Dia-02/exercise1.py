from selenium import webdriver
from selenium.webdriver.common.by import By


firefox = webdriver.Firefox()

response = firefox.get("https://quotes.toscrape.com/")

quote = firefox.find_element(By.CLASS_NAME, 'text').get_attribute('innerHTML')
print(quote)
