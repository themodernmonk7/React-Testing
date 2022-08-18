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

## Types of Tests
Unit tests
Integration tests
E2E test

## Unit Tests
Focus is on testing the individual building blocks of an application such as a class or a function or a component.

Each unit or building block is tested in isolation, independent of other units.

Dependencies are mocked.

Run in a short amount of time and make it very easy to pinpoint failures.

Relatively easier to write and maintain.

## Integration Tests
Focus is on testing a combination of units and ensuring they work together.

Take longer than unit tests.

## E2E tests
Focus is on testing the entire application flow and ensuring it works as designed form start to finish.

Involves in a real UI, a real backend database, real services etc.

Take the longest as they cover the most amount of code.

Have a cost implication as you interact with real APIs that may charge based on the number of requests.

## Testing pyramid
Unit test -> Integration tests -> E2E tests (bottom to top)

## RTL Philosophy
"The more your tests resemble the way your software is used, the more confidence they can give you."

Tests we are going to learn to write in this series strike a balance between unit tests in the sense they are at a component level and easy to write and maintain and E2E tests in the sense they resemble the way a user would interact with the component.

With RTL, we are not concerned about the implementation details of a component.

Instead we are testing how the component behaves when a user interacts with it.

RTL will not care if you add 4+4 or 5+3 to display the number 8.

Refactoring will not affect your test as long as the end result is the same.

## What is Test?
const getFullName = (fname, lname) => {
  return `${fname} ${lname}`
}

const actualFullName = getFullName("Bruce", "Wayne")
const expectedFullName = "Bruce Wayne" //correct
const expectedFullName = "BruceWayne" //throw error


if (actualFullName !== expectedFullName) {
  throw new Error(`${actualFullName} is not equal to ${expectedFullName}`)
}