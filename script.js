// function submitRoom(event) {
//   event.preventDefault(); // ป้องกันการรีเฟรชหน้า

//   let roomNumber = document.getElementById("roomNumber").value.trim();
//   let pattern = /^[abcABC]\d{3}$/; // A, B, C (หรือ a, b, c) ตามด้วย 3 ตัวเลข

//   if (pattern.test(roomNumber)) {
//     // ส่งค่าหมายเลขห้องไปยัง Google Apps Script Web App
//     fetch(
//       "https://script.google.com/macros/s/AKfycbw0E2-RAY8_30oUG_MySBsB6HlmR-XsH192lRuzzGoJaGlAiour8qizjghkBwsUntnAFw/exec?room=" +
//         encodeURIComponent(roomNumber)
//     )
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("result").innerText =
//           "Schedule Cleaning: " + data;
//         document.getElementById("result").style.color = "green";
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//         document.getElementById("result").innerText =
//           "Error retrieving schedule.";
//         document.getElementById("result").style.color = "red";
//       });
//   } else {
//     document.getElementById("result").innerText =
//       "Invalid format! Use A, B, or C followed by 3 digits.";
//     document.getElementById("result").style.color = "red";
//   }
// }

// // ผูกฟังก์ชันกับฟอร์ม
// document.getElementById("roomForm").addEventListener("submit", submitRoom);
