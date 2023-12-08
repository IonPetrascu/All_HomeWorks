const classroomsAcademys = [
  { name: "a40", seats: 16, faculty: "Facultatea de Biologie" },
  { name: "b20", seats: 15, faculty: "Facultatea de Fizică" },
  { name: "a40", seats: 20, faculty: "Facultatea de Chimie" },
  { name: "c2", seats: 7, faculty: "Facultatea de Biologie" },
];
//---------------------------------------------------------------------
function displayClassRooms(classRooms) {
  const div = document.createElement("div");
  document.body.append(div);
  classRooms.forEach((classRoom) => {
    const li = document.createElement("li");
    li.innerHTML = `Room:${classRoom.name} Seats:${classRoom.seats} Faculty:${classRoom.faculty}`;
    div.append(li);
  });
}
displayClassRooms(classroomsAcademys);

//----------------------------------------------------------------------

function facultyClassRoom(classRooms, faculty) {
  classRooms.forEach((classRoom) => {
    if (classRoom.faculty === faculty) console.log(classRoom);
  });
}
facultyClassRoom(classroomsAcademys, "Facultatea de Biologie");

//-----------------------------------------------------------------------

function grupClassRoom(grup) {
  classroomsAcademys.forEach((classRoom) => {
    if (
      grup.name === classRoom.name &&
      classRoom.seats >= grup.seats &&
      classRoom.faculty === grup.faculty
    ) {
      console.log(classRoom);
    }
  });
}

grupClassRoom({ name: "a40", seats: 14, faculty: "Facultatea de Biologie" });

//-----------------------------------------------------------------------

function sortBySeats(classRooms) {
  return [...classRooms].sort((a, b) => a.seats - b.seats);
}
console.log(sortBySeats(classroomsAcademys));

//-----------------------------------------------------------------------

function sorByAlphabet(classRooms) {
  return [...classRooms].sort((a, b) => a.name.localeCompare(b.name));
}

console.log(sorByAlphabet(classroomsAcademys));
