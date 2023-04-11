from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options


options = Options()
options.add_argument('--headless')

firefox = webdriver.Firefox(options=options)

response = firefox.get("https://www.wikimetal.com.br/iron-maiden-"
                       "scorpions-kiss-veja-melhores-albuns-1982/")

paragraphs = firefox.find_elements(By.TAG_NAME, 'p')
list_paragraphs = [p.text for p in paragraphs]
print(list_paragraphs)
