"use client";

import React, { useState } from "react";
import styles from "@/styles/style.module.scss";

// 학생 정보를 나타내는 인터페이스로, `name` 속성
interface Student {
  name: string;
}

// `useState`를 사용하여 학생 목록(`students`)과 선택된 학생(`selectedStudent`)을 관리
const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([
    { name: "김우진" },
    { name: "김현" },
    { name: "방승희" },
    { name: "변호녕" },
    { name: "소사무엘" },
    { name: "송영준" },
    { name: "신동현" },
    { name: "오승민" },
    { name: "유승민" },
    { name: "윤준현" },
    { name: "이민구" },
    { name: "이유안" },
    { name: "이채이" },
    { name: "정영식" },
    { name: "최은철" },
    { name: "최성민" },
    { name: "홍문기" },
  ]);

  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [searchName, setSearchName] = useState<string>("");

  //  `handleClick` 함수는 학생 목록에서 학생을 클릭할 때 호출되어, 선택된 학생 업데이트
  const handleClick = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleSearch = () => {
    const foundStudent = students.find(
      (student) => student.name === searchName
    );

    if (foundStudent) {
      handleClick(foundStudent);
    } else {
      // 이름이 일치하지 않는 경우: selectedStudent 초기화
      setSelectedStudent(null);
    }
  };

const shouldShowInitialStudent = !selectedStudent && !searchName;

  // `map` 함수를 사용하여 학생 목록을 순회하고, 각 학생에 대한 리스트 아이템을 렌더링
  // 학생을 클릭하면 `handleClick` 함수가 호출되어 `selectedStudent`가 업데이트
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ul className={styles.studentul}>
          {students.map((student, index) => (
            <li
              key={index}
              className={`${styles.studentli} ${
                selectedStudent === student ? `${styles.selected} ${styles.dot}` : styles.notSelected
              }`}
              onClick={() => handleClick(student)}
            >
              {student.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.boarder}></div>
      <div className={styles.right}>
        {selectedStudent && (
          <div className={styles.content}>
            <div className={styles.intro}>{selectedStudent.name} 소개</div>
            <div className={styles.introContent}>
              {selectedStudent.name} Lorem ipsum dolor sit amet consectetur.
              Mauris vitae nullam suspendisse ut amet quis nibh pellentesque.
              Non ut neque pellentesque nisl imperdiet turpis nulla ut. Ut id
              massa eu eu rhoncus elementum adipiscing metus. Mi risus nulla
              phasellus nisl molestie dignissim risus arcu elementum. Habitasse
              tortor tempus sed enim lectus duis volutpat. Pellentesque lacinia
              suspendisse sit malesuada sit a faucibus sed mattis. Egestas
              mauris id mattis id pulvinar nunc euismod id diam. Amet amet
              aliquet pharetra sed nam ipsum aenean dis tempor. Nisl in egestas
              cursus sagittis sed in integer. Sed sed cursus tempor porttitor.
              Cras viverra arcu sed laoreet volutpat enim sem sapien. Est nibh
              velit eu ipsum praesent vitae vestibulum aliquam. Sagittis nisi
              faucibus libero luctus tincidunt. Porttitor laoreet tellus
              maecenas tempor. Vehicula ut vulputate lorem congue. Eget
              dignissim aliquam integer tincidunt massa nulla duis mauris.
              ellentesque aenean sit mauris morbi. Dolor non aliquam elit risus
              elementum dictumst. Eu egestas turpis diam dictum. Dictumst leo
              senectus velit porta. Pretium tortor velit nulla sit ipsum vel
              sagittis. Eget elit donec sed amet vel in mattis aenean nibh.
              Fermentum et ac purus diam sit erat in vitae tellus. In at sit
              ornare fermentum. Risus blandit amet eget id.
            </div>
            <div className={styles.str}>{selectedStudent.name} 장점</div>
            <div className={styles.strContent}>
              {selectedStudent.name} Lorem ipsum dolor sit amet consectetur.
              Consectetur morbi fames in id sit turpis egetlectus ut. Neque orci
              hendrerit scelerisque nam ac ac eu dui urna. Aliquet vulputate
              tortor odio ut. Turpis nam sagittis non iaculis. Eu purus mollis
              cursus sagittis sit. Tempor tempor tincidunt ac in. Ullamcorpeeros
              ullamcorper tincidunt sagittis.Libero massa nec gravida
              libero.Volutpat orci bibendum morbi porta mauris
              pellentesque.Natoque gravida at penatibus vestibulum purus
              tristique mollis imperdiet amet.Sed magna dignissim luctus cras
              nulla.Ultrices sapien sed quis consectetur turpis fusce sem
              facilisis eget.
            </div>
          </div>
        )}
        <div className={styles.search}>
          <input
            className={styles.searchinput}
            type="text"
            placeholder="Write your name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <button className={styles.searchbutton} onClick={handleSearch}>
            SHOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
