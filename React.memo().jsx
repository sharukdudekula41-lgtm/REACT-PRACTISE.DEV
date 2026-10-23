import React from "react";

const User = React.memo(function User({ name }) {

    console.log("User rendered");

    return <h2>{name}</h2>;

});

export default User;