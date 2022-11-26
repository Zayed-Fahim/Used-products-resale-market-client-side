import React from "react";
import img1 from '../../assets/blog/img-1.jpeg';

const Blogs = () => {
  return (
    <div className="container mx-auto lg:my-16 my-10 lg:p-0 p-3">
      <div>
        <h1 className="text-3xl font-semibold my-2">
          1.What are the different ways to manage a state in a React
          application?
        </h1>
        <p>
          {" "}
          <strong>ANS:</strong>
        </p>
        <h1 className="text-xl my-2">
          The Four Kinds of React State to Manage
        </h1>
        <p className="text-xl my-2">
          When we talk about state in our applications, it’s important to be
          clear about what types of state actually matter. <br /> <br /> There
          are four main types of state you need to properly manage in your React
          apps:
        </p>
        <div className="ml-4 my-4">
          <li className="text-xl">Local state</li>
          <li className="text-xl">Global state</li>
          <li className="text-xl">Server state</li>
          <li className="text-xl">URL state</li>
        </div>
        <p className="text-xl my-2">
          Let's cover each of these in detail: <br />
          <br /> <strong>Local (UI) state –</strong> Local state is data we
          manage in one or another component. <br />
          <br /> Local state is most often managed in React using the useState
          hook. <br />
          <br /> For example, local state would be needed to show or hide a
          modal component or to track values for a form component, such as form
          submission, when the form is disabled and the values of a form’s
          inputs. <br />
          <br /> <strong>Global (UI) state –</strong> Global state is data we
          manage across multiple components. <br />
          <br /> Global state is necessary when we want to get and update data
          anywhere in our app, or in multiple components at least. <br />
          <br /> A common example of global state is authenticated user state.
          If a user is logged into our app, it is necessary to get and change
          their data throughout our application. <br />
          <br />
          Sometimes state we think should be local might become global. <br />
          <br /> <strong>Server state –</strong> Data that comes from an
          external server that must be integrated with our UI state. <br />
          <br /> Server state is a simple concept, but can be hard to manage
          alongside all of our local and global UI state. <br />
          <br />
          There are several pieces of state that must be managed every time you
          fetch or update data from an external server, including loading and
          error state. <br /> Fortunately there are tools such as SWR and React
          Query that make managing server state much easier. <br />
          <br /> <strong>URL state –</strong> Data that exists on our URLs,
          including the pathname and query parameters. <br />
          <br /> URL state is often missing as a category of state, but it is an
          important one. In many cases, a lot of major parts of our application
          rely upon accessing URL state. Try to imagine building a blog without
          being able to fetch a post based off of its slug or id that is located
          in the URL! <br />
          <br /> There are undoubtedly more pieces of state that we could
          identify, but these are the major categories worth focusing on for
          most applications you build.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-semibold mt-10 my-2">
          2.How does prototypical inheritance work?
        </h1>
        <p className="text-xl">
          <strong>ANS:</strong>
          <p>
            In a class-based model, you have Classes, which are represented by
            the triple {"<Parents, Variables, Methods>"}. Where: <br />
            <br />
          </p>{" "}
          <div>
            <li>
              <strong>Parents</strong> is the list of classes you’re extending.
              Classes may only extend other classes;
            </li>
            <li>
              <strong>Variables</strong> is the number of variable slots that
              instances will have. For example, a{" "}
              {"class Point2d(int x, int y) { … }"} has 2 instance variables;
            </li>
            <li>
              <strong>Methods</strong> is a table of “name → function” that
              describes which services each instance of the class will support;
            </li>
          </div>
          <br />
          <p>
            Instances (or Objects) in a class-based model are represented with
            the tuple {"<Class, Values>"}. Where: <br />
            <br />
          </p>
          <div>
            <li>
              <strong>Class</strong> is a pointer to the class triple that
              defines how many variables this instance supports, and what
              methods you can call on it;
            </li>
            <li>
              <strong>Values</strong> is a list of the values for each variable
              the instance has
            </li>
          </div>
          <br />
          <p>
            In this model, Classes only describe how instances look like, and
            Instances are the only thing you can interact with. Classes cannot
            be instances, and you can’t inherit from Instances.
          </p>
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-semibold mt-10 my-2">
          3.What is a unit test? Why should we write unit tests?
        </h1>
        <p className="text-xl">
          <strong>ANS:</strong>
        </p>
        <p className="text-xl">
          <strong>Unit testing</strong> is a software development process in
          which the smallest testable parts of an application, called units, are
          individually and independently scrutinized for proper operation. This
          testing methodology is done during the development process by the
          software developers and sometimes QA staff. The main objective of unit
          testing is to isolate written code to test and determine if it works
          as intended. <br />
          <br /> Unit testing is an important step in the development process,
          because if done correctly, it can help detect early flaws in code
          which may be more difficult to find in later testing stages. <br />
          <br /> Unit testing is a component of test-driven development (TDD), a
          pragmatic methodology that takes a meticulous approach to building a
          product by means of continual testing and revision. This testing
          method is also the first level of software testing, which is performed
          before other testing methods such as integration testing. Unit tests
          are typically isolated to ensure a unit does not rely on any external
          code or functions. Testing can be done manually but is often
          automated.
        </p>
        <p className="text-2xl my-2 font-bold">
          Why should we write unit tests?
        </p>
        <div>
          <li className="text-xl">
            They enable you to catch bugs early in the development process.
          </li>
          <li className="text-xl">
            Automated unit tests help a great deal with regression testing.
          </li>
          <li className="text-xl">
            They detect code smells in your codebase. For example, if you’re
            having a hard time writing unit tests for a piece of code, it might
            be a sign that your function is too complex.
          </li>
        </div>
      </div>
      <div>
              <h1 className="text-3xl mt-10 font-semibold">4.React vs. Angular vs. Vue?</h1>
              <p className="text-xl"><strong>ANS:</strong></p>
              <div>
                  <img src={img1} alt="" />
              </div>
      </div>
    </div>
  );
};

export default Blogs;
