from selenium import webdriver


class Clicker:
    def start_clicking(self):
        driver = webdriver.Chrome()
        driver.get("https://pep.pxl.be/Personeelsregister/PersoneelZoeken.aspx")

        name_field = driver.find_element_by_id("ctl00_ContentPlaceHolder1_txtZoekenNaam")
        name_field.click()
        name_field.send_keys("willekens")
        driver.find_element_by_id("ctl00_ContentPlaceHolder1_btnZoeken").click()

        driver.find_element_by_css_selector("#ctl00_ContentPlaceHolder1_gridZoekResultaat_ctl02_hlnkNaam").click()
