"use client";

import styles from "@/styles/style.module.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import StudentList from "@/components/StudentList";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.root}>
        <StudentList />
        {/* <div className={styles.container}>
          <div className={styles.left}>
            <ul className={styles.studentul}>
              <li className={styles.studentli}></li>
            </ul>
          </div>
          <div className={styles.boarder}></div>
          <div className={styles.right}>
            <div className={styles.content}>
              <div className={styles.intro}>김우진 소개</div>
              <div className={styles.introContent}>
                김우진 Lorem ipsum dolor sit amet consectetur. Mauris vitae
                nullam suspendisse ut amet quis nibh pellentesque. Non ut neque
                pellentesque nisl imperdiet turpis nulla ut. Ut id massa eu eu
                rhoncus elementum adipiscing metus. Mi risus nulla phasellus
                nisl molestie dignissim risus arcu elementum. Habitasse tortor
                tempus sed enim lectus duis volutpat. Pellentesque lacinia
                suspendisse sit malesuada sit a faucibus sed mattis. Egestas
                mauris id mattis id pulvinar nunc euismod id diam. Amet amet
                aliquet pharetra sed nam ipsum aenean dis tempor. Nisl in
                egestas cursus sagittis sed in integer. Sed sed cursus tempor
                porttitor. Cras viverra arcu sed laoreet volutpat enim sem
                sapien. Est nibh velit eu ipsum praesent vitae vestibulum
                aliquam. Sagittis nisi faucibus libero luctus tincidunt.
                Porttitor laoreet tellus maecenas tempor. Vehicula ut vulputate
                lorem congue. Eget dignissim aliquam integer tincidunt massa
                nulla duis mauris. ellentesque aenean sit mauris morbi. Dolor
                non aliquam elit risus elementum dictumst. Eu egestas turpis
                diam dictum. Dictumst leo senectus velit porta. Pretium tortor
                velit nulla sit ipsum vel sagittis. Eget elit donec sed amet vel
                in mattis aenean nibh. Fermentum et ac purus diam sit erat in
                vitae tellus. In at sit ornare fermentum. Risus blandit amet
                eget id.
              </div>
              <div className={styles.str}>김우진 장점</div>
              <div className={styles.strContent}>
                김우진 Lorem ipsum dolor sit amet consectetur. Consectetur morbi
                fames in id sit turpis egetlectus ut. Neque orci hendrerit
                scelerisque nam ac ac eu dui urna. Aliquet vulputate tortor odio
                ut. Turpis nam sagittis non iaculis. Eu purus mollis cursus
                sagittis sit. Tempor tempor tincidunt ac in. Ullamcorpeeros
                ullamcorper tincidunt sagittis.Libero massa nec gravida
                libero.Volutpat orci bibendum morbi porta mauris
                pellentesque.Natoque gravida at penatibus vestibulum purus
                tristique mollis imperdiet amet.Sed magna dignissim luctus cras
                nulla.Ultrices sapien sed quis consectetur turpis fusce sem
                facilisis eget.
              </div>
            </div>
            <div className={styles.search}>
              <input
                className={styles.searchinput}
                type="text"
                placeholder="Write your name"
              />
              <button className={styles.searchbutton}>SHOW</button>
            </div>
          </div>
        </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
