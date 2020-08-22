import React from 'react';
import '../styles/Home.scss';

const HomePage = () => {
  return (
    <div className="Home">
      <section className="carousel">
        <img
          src="https://image.laftel.net/origin/carousel_item_SS_TUMBLBUG.jpg"
          alt=""
        />
      </section>
      <section className="new-ani-list">
        <h2>2020년 3분기 기대신작 애니</h2>
        <ul className="contents-wrap">
          <li>
            <div className="thumbnail"></div>
            <div className="details">
              <div className="gnre">액션 / 판타지</div>
              <div className="title">
                역시 내 청춘 러브코메디는 잘못됐다. 완
              </div>
            </div>
          </li>
          <li>
            <div className="thumbnail"></div>
            <div>
              <div className="gnre">액션 / 판타지</div>
              <div className="title">
                역시 내 청춘 러브코메디는 잘못됐다. 완
              </div>
            </div>
          </li>
          <li>
            <div className="thumbnail"></div>
            <div>
              <div className="gnre">액션 / 판타지</div>
              <div className="title">
                역시 내 청춘 러브코메디는 잘못됐다. 완
              </div>
            </div>
          </li>
          <li>
            <div className="thumbnail"></div>
            <div>
              <div className="gnre">액션 / 판타지</div>
              <div className="title">
                역시 내 청춘 러브코메디는 잘못됐다. 완
              </div>
            </div>
          </li>
          <li>
            <div className="thumbnail"></div>
            <div>
              <div className="gnre">액션 / 판타지</div>
              <div className="title">
                역시 내 청춘 러브코메디는 잘못됐다. 완
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
