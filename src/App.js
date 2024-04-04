import React, { useState } from 'react';
import cocoIn from './images/coco_in.jpg';
import cocoOut from './images/coco_out.jpg';
import cocoHappy from './images/cocohappy.jpg';
import './App.css';

function App() {
  const [image, setImage] = useState(cocoIn);
  const [clicks, setClicks] = useState(0);
  const [showModal, setShowModal] = useState(false); // 모달 표시 상태

  const handleMouseDown = () => {
    if (!showModal) { // 모달이 표시되지 않았을 때만 클릭 이벤트 처리
      const newClicks = clicks + 1;
      setClicks(newClicks);
      if (newClicks === 407) {
        setShowModal(true);
      }
      setImage(cocoOut);
    }
  };

  const handleMouseUp = () => {
    if (!showModal) {
      setImage(cocoIn);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const resetClicks = () => {
    setClicks(0); // 클릭 횟수 초기화
  };

  return (
    <div className="App">
      <header>
        <h1>Click HamSter</h1>
      </header>
      <p>잠자고 있는 햄스터를 깨워주세요.<br/> 아마도 <b>406번</b>이상은 클릭하셔야합니다. </p>
      <main>
        <img src={image} alt="클릭 가능한 햄스터" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} style={{ cursor: 'pointer' }} />
        <p>햄스터를 깨운 횟수: {clicks}</p>
        <button onClick={resetClicks}>다시 깨우기</button>
      </main>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>생일 초대장</h2>
            <p>안녕하세요 <br/>
              이번 4월 7일에 오는 <b>만 1살 코코의 생일에</b> <br/>
              당신을 초대합니다. <br/>
            </p>
            <img src={cocoHappy} alt="행복한 코코" style={{ maxWidth: '100%', height: 'auto' }} />
            <p>
              장소 : 코코네 집 <br/>
              날짜 : 2024.04.07 (일요일) <br/>
              <b>* 생일 초대장 캡처본이 필요합니다.</b>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
