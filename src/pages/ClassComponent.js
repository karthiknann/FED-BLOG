import React from "react";

const ClassComponent = () => {
  return (
    <div className="classcomponent">
      <h1>WHAT IS CLASS COMPONENT ?</h1>
      <br></br>
      <p>React lets us define components as classes or functions.To define a React component class, We have to create a class and extend React.Component class.</p>
      <br></br>
      <h1>Example</h1>
      <br></br>
      <p>Lets say we want to create an Employee Component and this Component should return the Element which displays Employee Details. 
      <br/>
      Open Index.js file from our Demo-Project, Create Employee class and extend it from React.Component. Output of any Class Component we create is dependent on the return value of a Method Called render(). The render() method is the only required method needs to be implemented in a class component.</p>
      <p>lets create a div element which displays employee details like ID, Name , Location, Salary and return the div from this Method. To access the attributes that will be passed to this Component Class, in React we use this.props. Attribute Name. this.props contains the props that were defined by the caller of this component.</p>
      <br></br>
      <img src = "syntax.png" alt='syntax'/>
      <br></br>
      <p>Calling the Class Component and rendering remains as same as the Function Component.</p>
      <br></br>
      <img src="calling_class.png" alt="calling"/>
      <br></br>
      <p>Lets save these changes, navigate to the browser and we can see the output.</p>
      <p>Now lets create Department Component also as Class Component. So we create a Class, Name it as Department and extend React.Component. We will return an Element which displays Department Information like Department Name, Head of the Department Name and Use this Component in Employee Component.</p>
      <img src="create_class.png" alt="create"/>
      <p>Props are Read-Only</p>
      <p>Whether we declare a component as a function or a class, it must never modify its own props. </p>
      <p>To understand this with an Example, lets go and add a Constructor to the Employee Component Class and inside the Constructor, lets try to log the Property Object.</p>
      <img src="constructor.png" alt="constructor"/>
      <p>This Code will throw the Error and It is expecting us to call the Base Class Constructor and we do that by using Super();</p>
      <p>After adding the Base Class Constructor call, if we look at the Console in the browser, we get props value as undefined. To make sure that props object can be accessed in constructor, we have to add this parameter to the constructor and pass that to the base class constructor as well. Now if we save this, we can see that object data in the Console log.</p>
      <p>Now if we try to Change the Salary using props object,  we can see an error and error says.</p>
      <p>React is pretty flexible but it has a single strict rule. Props are read-only. Of course, application UIs are dynamic and change over time. a new concept named “state” allows React components to change their output over time in response to user actions without violating this rule. By now we are clear on how to create function component and A Class Component. Then the obvious question is when to use which one?</p>
      <p>If we are expecting features like</p>
      <ol>
        <li>Managing State of the Components</li>
        <li>Adding Life Cycle Methods to Components</li>
        <li>Need to Write Logic for Event Handlers</li>
      </ol>
      <p>Then we will go for Class Component and in rest of the cases we can go for Function Component.</p>
    </div>
  );
};

export default ClassComponent;
