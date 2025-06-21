#Web Automation Assignment – WebdriverIO + Allure Report
This project contains automated test cases using **WebdriverIO** for the login and order workflows based on three user types.The test scripts are written with reusability in mind using the Page Object Model.


All test scenarios can be executed separately or sequentially, and test results are generated with  Allure Reports.
Tech Stack
- [WebdriverIO]
- JavaScript (Node.js)
- Mocha Test Framework
- Allure Reporting

Make sure you have the following installed:
- Node.js
- npm


To run all spec file one bye one:

-> npm run lockedOutUser_standardUser_glitchUser

To run all spec file in separate chrome browser :

-> npm run wdio

To generate and open allure report 

-> allure generate --clean allure-results

To open allure report 

-> open allure-report

Allure report has been showed below of this project:

<img width="952" alt="Screenshot 2025-06-21 201949" src="https://github.com/user-attachments/assets/f4d2af23-752c-46b1-ad9e-53ad0e6c55e4" />

