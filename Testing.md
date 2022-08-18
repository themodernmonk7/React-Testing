## Testing
As a developer, our primary goal is to build software that works.
To ensure our software works, we test the application.

## Manual Testing
An individual will open the website, interact with the website and ensure everything works as intended.
If a new feature is released, you repeat the same steps.
You may  have to test not only the new feature but also the existing features

Drawbacks: 
    1. Time Consuming
    2. Complex repetitive tasks has a risk of human error
    3. You may not get a chance to test all the features you should.

## Automated Testing
Automated tests are programs that automate the task of testing your software.
Write code to test the software code.
Additional effort required when you develop a feature

Advantages
    1. Not time consuming
    2. Reliable, consistent and not error prone
    3. Easy to identify and fix features that break tests
    4. Gives confidence when shipping software.

## Course Structure
Jest and React Testing Library
Fundamentals of writing a test
Test components with user interactions
Test components wrapped in a provider
Test components with mocking
Static analysis testing

##  Prerequisites
React fundamentals
TypeScript fundamentals

## Jest vs React Testing Library (RTL)
    - Jest
        👉 Jest is a javascript testing framework
        👉 Jest is a test runner that finds tests, runs the tests, determines whether the tests passed or failed and reports in a human readable manner
    
    - RTL
        👉 JavaScript testing utility that provides virtual DOM for testing React components
        👉 React Testing Library provides a virtual DOM which we can use to interact with and verify the behavior of a react component
        👉 Testing Library is infact a family of packages which helps test UI components
        👉 The core library is called DOM Testing library and RTL is simply a wrapper around this core library to test React applications in an easier way
