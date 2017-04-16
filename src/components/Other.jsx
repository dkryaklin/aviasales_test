import React from 'react';

export const AppLoadingMessage = () => <div className="content">Загрузка</div>;

export const AppErrorMessage = ({ errorOnClick }) => (
    <div className="content error">
        <div className="error_message">Ошибка при загрузке</div>
        <button className="error_button" onClick={errorOnClick}>Повторить</button>
    </div>
);

export const AppNothingToShow = () => <div className="content">Ничего не найдено</div>;