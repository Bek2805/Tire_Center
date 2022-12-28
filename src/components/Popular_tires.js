import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const Popular_tires = () => {
    return (
<section className="autotire">
    <div className="container">
        <h2 className="autotire__title">Популярные шины</h2>
        <div className="autotire__nav">
            <NavLink end to="/" className="autotire__link">Автомобильные</NavLink>
            <NavLink end to="/trucktire" className="autotire__link">Грузовые</NavLink>
            <NavLink end to="/mototire" className="autotire__link">Мотошины</NavLink>
        </div>
    </div>
</section>

    );
};

export default Popular_tires;