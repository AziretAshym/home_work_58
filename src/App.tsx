import Modal from './components/UI/Modal/Modal.tsx';
import { useState } from 'react';
import Alert from './components/UI/Alert/Alert.tsx';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [alerts, setAlerts] = useState({
    primary: false,
    success: false,
    danger: false,
    warning: false
  });
  const closeModalWindow = () => {setShowModal(!showModal)};

  const showAlert = (type: keyof typeof alerts) => {
    setAlerts(prevState => ({ ...prevState, [type]: true }));
  };

  const closeAlert = (type: keyof typeof alerts) => {
    setAlerts(prevAlerts => ({ ...prevAlerts, [type]: false }));
  };


  return (
    <>
      <Modal
        show={showModal}
        onClose={closeModalWindow}
        title={"Модальное окно"}
      >
        <p className={"p-3"}>
          Чтобы закрыть модальное окно, нажмите на крестик.
        </p>
      </Modal>
      <div className="container d-flex justify-content-center mt-4 mb-4">
        <div className="card text-center" style={{width: "450px"}}>
          <div className="card-header">
            <h1>
              <strong>LVL 1</strong>
            </h1>
          </div>
          <div className="card-body text-start">
            <p className={"text-xxl-start"}>
              Для показа модального окна, нажмите на кнопку
            </p>
          </div>
          <button
            type={"button"}
            className="btn btn-primary p-3"
            onClick={() => setShowModal(!showModal)}
          >
            Показать модальное окно
          </button>
        </div>
      </div>


      <div className="container d-flex justify-content-center mt-4 mb-4">
        <div className="card text-center" style={{width: '450px'}}>
          <div className="card-header">
            <h1><strong>LVL 2</strong></h1>
          </div>
          <div className="card-body text-start">
            <p>Нажмите на одну из кнопок, чтобы показать соответствующий алерт.</p>

            <div className="mb-3">
              <button className="btn btn-primary me-2" onClick={() => showAlert('primary')}>Show Primary</button>
              <button className="btn btn-success me-2" onClick={() => showAlert('success')}>Show Success</button>
              <button className="btn btn-danger me-2" onClick={() => showAlert('danger')}>Show Danger</button>
              <button className="btn btn-warning" onClick={() => showAlert('warning')}>Show Warning</button>
            </div>

            {alerts.primary && <Alert type="primary">Primary alert</Alert>}
            {alerts.success && <Alert type="success">Success alert</Alert>}
            {alerts.danger && <Alert type="danger" onDismiss={() => closeAlert('danger')}>Danger alert</Alert>}
            {alerts.warning && <Alert type="warning" onDismiss={() => closeAlert('warning')}>Warning alert</Alert>}
          </div>
        </div>
      </div>

    </>
  );
};

export default App;
