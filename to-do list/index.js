const addBtn = document.querySelector("#addbtn");
const main = document.querySelector("#main");

// save function 
const saveNotes=()=>{
  const notes=document.querySelectorAll(".note textarea")
  const data=[]
  notes.forEach(
    (note)=>{
data.push(note.value)
    }
  )
//   console.log(data)
localStorage.setItem("notes",JSON.stringify(data))
}

addBtn.addEventListener("click", function () {
  addNote();
});
const addNote = () => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tool">
    <i class="save fa-solid fa-floppy-disk"></i>
    <i class="trash fa-sharp fa-solid fa-trash"></i>
  </div>
  <textarea></textarea>`;
  note.querySelector(".trash").addEventListener("click", function () {
    note.remove();
    saveNotes()
  });
  note.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });
  main.appendChild(note);
  saveNotes()
};
