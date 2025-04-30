 const contacts = [];

    function addCon() {
      const input = document.getElementById("inputName");
      const name = input.value.trim();

      if (name === "") {
        alert("Please enter a name.");
        return;
      }

      if (contacts.length === 7) {
        contacts.shift(); 
      }

      contacts.push(name); 
      input.value = "";
      updateOutput();
    }

    function removeCon() {
      contacts.pop(); 
      updateOutput();
    }

    function updateOutput() {
      const list = document.getElementById("conList");
      list.innerHTML = ""; 

      for (const name of contacts) {
        const li = document.createElement("li");
        li.textContent = name;
        list.appendChild(li);
      }
    }
