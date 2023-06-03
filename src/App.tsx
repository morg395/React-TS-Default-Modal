import React, { useState } from "react";
import Overlay from "./components/Overlay/Overlay";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModalHandler() {
        setIsModalOpen(true);
    };

    function closeModalHandler() {
        setIsModalOpen(false);
    };

    return (
        <>
            <h1 className="app-title">Default modal created with React and Typescript</h1>
            <Button onClick={openModalHandler}>Open modal</Button>
            {isModalOpen && (
                <Overlay>
                    <Modal onCloseModal={closeModalHandler} />
                </Overlay>
            )}
        </>
    );
}

export default App;
