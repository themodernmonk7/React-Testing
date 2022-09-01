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
- Jest and React Testing Library
- Fundamentals of writing a test
- Test components with user interactions
- Test components wrapped in a provider
- Test components with mocking
- Static analysis testing

##  Prerequisites
- React fundamentals
- TypeScript fundamentals

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
- Unit tests
- Integration tests
- E2E test

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

```
const getFullName = (fname, lname) => {
  return `${fname} ${lname}`
}


const actualFullName = getFullName("Bruce", "Wayne")
const expectedFullName = "Bruce Wayne" //correct
const expectedFullName = "BruceWayne" //throw error


if (actualFullName !== expectedFullName) {
  throw new Error(`${actualFullName} is not equal to ${expectedFullName}`)
}
```

## test
```
test(name, fn, timeout)
```

Example: 

```
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

The first argument is the test name used to identify the test.

The second argument is a function that contains the expectation to test.

The third argument is timeout which is an optional argument for specifying how long to wait before aborting the test. The default timeout value is 5 seconds.

## Test Driven Development (TDD)
Test driven development is a software development process where you write tests before writing the actual software code.

Once the test have been written, you then write the code to ensure the tests pass.

1. Create tests that verify the functionality of a specific feature.
2. Write software code that will run the tests successfully when re-executed.
3. Refactor the code for optimization while ensuring the tests continue to pass.

Also called red-green testing as all tests go from a red failed state to a green passes state.

## Jest Watch Mode
Watch mode is an option that we can pass to Jest asking to watch files that have changed since the last commit and execute tests related only to those changed files.

An optimization designed to make your tests run fast regardless of how many tests you have.

## Filtering Tests

// Run all test
// Run test only in changed files
// Run test by file name
// Run test by test name
// test.only and test.skip for filter test (specific test)

## describe
describe(name, fn)
The first argument is the group name
The second argument is a function that contains the expectations to test.

## Filename Conventions
With CRA jest will look for test files with any of the following naming conventions.
  - Files with .test.js or test.tsx suffix.
  - Files with .spec.js or .spec.tsx suffix.
  - Files with .js or .tsx suffix in __tests__ folders.
and this can be located at any depth in the source folder the Recommendation is to always put your tests next to the code they are testing so that relative imports are shorter.

## Code Coverage
A metric that can help you understand how much of your software code is tested.
  - Statement coverage: how many of the statements in the software code have been executed.
  - Branches coverage: how many of the branches of the control structures (if statements for instance) have been executed.
  - Function coverage: how may of the functions defined have been called.
  - Line coverage: how may of lines of source code have been tested.

## Assertions
When writing tests, we often need to check that values meet certain conditions.
Assertions decide if a test passes or fails.

### Expect
expect(value)
With jest assertions are carried out with the global expect method, this method accepts a value as its argument. 

The argument should be the value that your code produces.

Typically, you will use expect along with a "matcher" function to assert something about a value.

A matcher can optionally accept an argument which is the correct expected value.

## What to test?
  - Test component renders
  - Test component renders with props
  - Test component renders in different states
  - Test component reacts to events

## What not to test?
  - Implementation details
  - Third party code
  - Code that is not important from a user point of view

## React Testing Library (RTL) Queries
Every test we write generally involves the following basic steps
1. Render the component. (render method from RTL) 
 - E.g: ```render(<App/>)```

2. Find an element rendered by the component. (responsibility of RTL Queries) 
  - E.g: ```const linkElement = screen.getByText(/This is React Testing Tutorial)```

3. Assert against the element found in step 2 which will pass or fail the test. (we use expect, passing in a value and combine it with a matcher function from jest or jest dom) 
  - E.g: ```expect(linkElement).toBeInTheDocument()```

To render the component, we use the render method from RTL

For assertion, we user expect passing in a value and combine it with a matcher function from jest or jest-dom

Queries are the methods that Testing Library provides to find elements on the page

To find a single element on the page, we have
    - getBy..
    - queryBy..
    - findBy..

To find multiple elements on the page, we have
    - getAllBy..
    - queryAllBy
    - findAllBy..
The suffix (...) can be one of Role, LabelText, PlaceholderText, Text, DisplayValue, AltText, Title and finally TestId

### getBy... queries
getBy.. class of queries return the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found.

#### getByRole
getByRole queries for elements with the given role.

Role refers to the ARIA (Accessible Rich Internet Applications) role which provides semantic meaning to content to ensure people using assistive technologies are able to use them.

By default, many semantic elements in HTML have a role.

button element has a button role, anchor element has a link role, h1 to h6 elements have a heading role, checkboxes have a checkbox role, radio buttons have a radio role and so on.

If you're working with elements that do not have a default role or if you want to specify a different role, the role attribute can be used to add the desired tole.

To use an anchor element as a button in the navbar, you can add role='button'.

##### getByRole Options
  - name
  - level

The accessible name is for simple cases equal to -
1. the label of a form element
2. the text content of a button or
3. the value of the aria-label attribute

There are few more options that we can use with the getByRole query. (Go through the documentation for more information about each of them)
  - hidden
  - selected 
  - checked
  - pressed

#### getByLabelText
getByLabelText will search for the label that matches the given text, then find the element associated with that label.

#### getByPlaceholderText
getByPlaceholderText will search for all elements with a placeholder attribute and find one that matches the given text.

#### getByText
getByText will search for all elements that have a text node with textContent matching the given text

Typically, you'd use this to find paragraph, div or span elements.

