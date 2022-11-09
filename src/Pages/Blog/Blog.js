import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto mb-4">
      <h1 className="text-green-600 text-4xl font-bold m-4">
        Questions and Answers
      </h1>
      <hr />
      <div className="border-solid border-2 border-green-500 rounded-xl p-5 m-4">
        <h3 className="text-2xl font-semibold">
          1. Difference between SQL and NoSQL
        </h3>
        <p>
          SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL.
        </p>
        <p>There are five practical differences between SQL and NoSQL:</p>
        <ul>
          <li>1. Language</li>
          <li>2. Scalability</li>
          <li>3. Structure</li>
          <li>4. Properties</li>
          <li>5. Support and communities</li>
        </ul>
      </div>
      <div className="border-solid border-2 border-green-500 rounded-xl p-5 m-4">
        <h3 className="text-2xl font-semibold">
          2. What is JWT, and how does it work?
        </h3>
        <p>
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object. It is
          compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP).
          <p>
            Basically the identity provider(IdP) generates a JWT certifying user
            identity and Resource server decodes and verifies the authenticity
            of the token using secret salt / public key.
            <ul>
              <li>
                1. User sign-in using username and password or google/facebook.
              </li>
              <li>
                2. Authentication server verifies the credentials and issues a
                jwt signed using either a secret salt or a private key.
              </li>
              <li>
                3. User's Client uses the JWT to access protected resources by
                passing the JWT in HTTP Authorization header.
              </li>
              <li>
                4. Resource server then verifies the authenticity of the token
                using the secret salt/ public key.
              </li>
            </ul>
          </p>
        </p>
      </div>
      <div className="border-solid border-2 border-green-500 rounded-xl p-5 m-4">
        <h3 className="text-2xl font-semibold">
          3. What is the difference between javascript and NodeJS?
        </h3>
        <p>
          <ul>
            <li>
              1. JavaScript is a client-side scripting language that is
              lightweight, cross-platform, and interpreted. Both Java and HTML
              include it. Node.js, on the other hand, is a V8-based server-side
              programming language. As a result, it is used to create
              network-centric applications. It's a networked system made for
              data-intensive real-time applications. If we compare node js vs.
              python, it is clear that node js will always be the preferred
              option.
            </li>
            <li>
              2. JavaScript is a simple programming language that can be used
              with any browser that has the JavaScript Engine installed.
              Node.js, on the other hand, is an interpreter or execution
              environment for the JavaScript programming language. It requires
              libraries that can be conveniently accessed from JavaScript
              programming to be more helpful.
            </li>
            <li>
              3. Any engine may run JavaScript. As a result, writing JavaScript
              is incredibly easy, and any working environment is similar to a
              complete browser. Node.js, on the other hand, only enables the V8
              engine. Written JavaScript code, on the other hand, can run in any
              context, regardless of whether the V8 engine is supported.
            </li>
            <li>
              4. A specific non-blocking operation is required to access any
              operating system. There are a few essential objects in JavaScript,
              but they are entirely OS-specific. Node.js, on the other hand, can
              now operate non-blocking software tasks out of any JavaScript
              programming. It contains no OS-specific constants. Node.js
              establishes a strong relationship with the system files, allowing
              companies to read and write to the hard drive.
            </li>
            <li>
              5. The critical benefits of JavaScript include a wide choice of
              interfaces and interactions and just the proper amount of server
              contact and direct visitor input. Node.js, on the other hand,
              offers node package management with over 500 modules and the
              capacity to handle many requests at the same time. It also offers
              the unique ability to enable microservice architecture and the
              Internet of Things. Even when comparing node js vs. react js, node
              js always wins.
            </li>
          </ul>
        </p>
      </div>
      <div className="border-solid border-2 border-green-500 rounded-xl p-5 m-4">
        <h3 className="text-2xl font-semibold">
          4. How does NodeJS handle multiple requests at the same time?
        </h3>
        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;
