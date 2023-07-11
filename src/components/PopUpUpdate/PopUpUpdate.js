import React from "react";
import "../PopUp/PopUp.css";

function PopUpUpdate(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__container">
        {props.isUpdate ? (
          <>
            <p className="popup__title">Данные успешно изменены!</p>
          </>
        ) : (
          <>
            <p className="popup__title">
              При обновлении профиля произошла ошибка.!
            </p>
          </>
        )}

        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopUpUpdate;
