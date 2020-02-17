import React, { Fragment } from 'react';

export function ClassConcept() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Class System</h2>
        <h3>Overview</h3>
        <p>A big challenge in providing a common code architecture that is:</p>
        <ul>
          <li>Familiar and simple to learn</li>
          <li>Fast to develop, easy to debug, and painless to deploy</li>
          <li>Organized, extensible, and maintainable</li>
        </ul>
        <p>
          Because JavaScript is a classless, prototype-oriented language, one of its most powerful features is flexibility.
          There are multiple solutions to any problem using many different coding styles and techniques.
          However, this comes with the cost of being unpredictable.
          Without a unified structure, JavaScript code can be difficult to understand, maintain, and re-use.
        </p>
        <p>
          Class-based programming, on the other hand, is still the most popular model of Object Oriented Programming.
          Class-based languages usually requires strong-typing, encapsulation, and standard coding conventions.
          By making developers adhere to a large set of principles, code is more likely to be predictable, extensible, and scalable over time.
          However, this model doesn't have JavaScript's dynamic capability.
        </p>
        <p>Each approach has pros and cons, but can we keep the good parts of both while hiding the bad parts?</p>
      </div>
    </div>
  </Fragment>
}