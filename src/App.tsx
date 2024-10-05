import Modal from "./components/UI/Modal/Modal.tsx";
import { useState } from "react";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModalWindow = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Modal
        show={showModal}
        closeModal={closeModalWindow}
        title={"Модальное окно"}
      >
        <p className={"p-3"}>
          Чтобы закрыть модальное окно, нажмите на крестик.
        </p>
      </Modal>
      <div className="container d-flex justify-content-center mt-4">
        <div className="card text-center" style={{ width: "450px" }}>
          <div className="card-header">
            <h1>
              <strong>LVL 1</strong>
            </h1>
          </div>
          <div className="card-body">
            <p className={"text-xxl-start"}>
              Используя модальное окно, которое было на занятии, (скопируйте
              оттуда этот компонент), дополните его следующим функционалом:
              <ul>
                <li>
                  Добавьте в само модальное окно кнопку "Закрыть", по клику на
                  которую также должна вызываться функция onClose
                </li>
              </ul>
            </p>
            <button
              type={"button"}
              className="btn btn-primary p-3"
              onClick={() => setShowModal(!showModal)}
            >
              Показать модальное окно
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
