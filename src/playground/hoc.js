import React from 'react';
import ReactDOM from 'react-dom';

/*
  Higher-order components (HOFs) are a pattern for composing
  React applications. They are functions that receive a
  components as an argument and return a new component.
*/

function Info(props) {
  return (
    <div>
      <h1> Info </h1>
      <p> Here's the info: <i> {props.info} </i> </p>
    </div>
  );
}

function withAdminWarning(WrappedComponent) {
  return (props) => (
    <div>
      {props.isAdmin && <b> This is private info. Please don't share. </b>}
      <WrappedComponent {...props} />
    </div>
  )
}

function verifyAuth(WrappedComponent) {
  return (props) => (
    <div>
      {
        props.isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
          <i> You must be authenticated to view </i>
        )
      }
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const VerifiedInfo = verifyAuth(Info);
ReactDOM.render(
  <VerifiedInfo isAuthenticated={false} info='The peanut butter is in the pantry' />,
  document.getElementById('app')
);