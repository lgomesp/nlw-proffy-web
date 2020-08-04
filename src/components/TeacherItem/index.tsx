import React from 'react';

import whatsappIcon from './../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/14145821?s=460&u=095497ff915574d68b6b47f62b241485bea2d840&v=4" alt="Lucas Gomes" />
                <div>
                    <strong>Lucas Gomes</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /><br /> Dolores nobis cupiditate, necessitatibus voluptatum reiciendis amet. Accusamus quibusdam, molestiae facere velit voluptatibus commodi, distinctio rerum nulla cum perferendis tenetur voluptatem iste!</p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem