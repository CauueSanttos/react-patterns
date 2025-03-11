import React from "react";

export const UncontrolledForm = () => {

    const nameInputRef = React.createRef();
    const ageInputRef = React.createRef();

    const sumitHandler = (event) => {
        console.log(nameInputRef.current.value);
        console.log(ageInputRef.current.value);

        event.preventDefault();
    }

    return (
        <form onSubmit={sumitHandler}>
            <input type="text" id="name" name="name" placeholder="Name" ref={nameInputRef} />
            <input type="number" id="age" name="age" placeholder="Age" ref={ageInputRef} />
            <input type="submit" value="Submit" />
        </form>
    );
}