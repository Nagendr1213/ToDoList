import React from "react";
import ReactDOM from "react-dom";
const fname ="vinod";
const lname = "thapa";


ReactDOM.render(
<> 
<h1>
{`my first name is ${fname}
and my last name is ${lname}`}
</h1>
<p> my lucky number is {5+5} </p>
</>,
 document.getElementById("root")
);
