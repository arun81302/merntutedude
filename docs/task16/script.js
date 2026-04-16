
    
    const students = [
  { name: "Arun Singh", marks: 85, class: 10, address: "Delhi" },
  { name: "Rahul Sharma", marks: 78, class: 9, address: "Mumbai" },
  { name: "Priya Verma", marks: 92, class: 10, address: "Jaipur" },
  { name: "Amit Kumar", marks: 67, class: 8, address: "Patna" },
  { name: "Sneha Gupta", marks: 88, class: 9, address: "Lucknow" },
  { name: "Rohit Mehta", marks: 74, class: 8, address: "Ahmedabad" },
  { name: "Neha Agarwal", marks: 91, class: 10, address: "Kolkata" },
  { name: "Vikas Yadav", marks: 69, class: 7, address: "Noida" },
  { name: "Pooja Singh", marks: 83, class: 9, address: "Varanasi" },
  { name: "Karan Malhotra", marks: 77, class: 8, address: "Chandigarh" },
  { name: "Anjali Sharma", marks: 95, class: 10, address: "Bhopal" },
  { name: "Deepak Verma", marks: 72, class: 7, address: "Indore" },
  { name: "Simran Kaur", marks: 89, class: 9, address: "Amritsar" },
  { name: "Manish Tiwari", marks: 64, class: 8, address: "Kanpur" },
  { name: "Ritika Jain", marks: 90, class: 10, address: "Udaipur" },
  { name: "Saurabh Mishra", marks: 76, class: 9, address: "Allahabad" },
  { name: "Nikita Kapoor", marks: 87, class: 8, address: "Gurgaon" },
  { name: "Harsh Patel", marks: 81, class: 9, address: "Surat" },
  { name: "Tanya Arora", marks: 93, class: 10, address: "Ludhiana" },
  { name: "Aditya Joshi", marks: 70, class: 7, address: "Dehradun" },
  { name: "Meena Reddy", marks: 84, class: 9, address: "Hyderabad" },
  { name: "Arjun Nair", marks: 79, class: 8, address: "Kochi" }
];  

    const container = document.getElementById("cardContainer");
    const searchInput = document.getElementById("search");

    
    function renderCards(data) {
      container.innerHTML = data.map(student => `
        <div class="card">
          <h3>${student.name}</h3>
          <p>Class: ${student.class}</p>
          <p>Marks: ${student.marks}</p>
          <p>Address: ${student.address}</p>
        </div>
      `).join("");
    }

    
    renderCards(students);

    
    searchInput.addEventListener("input", () => {
      const value = searchInput.value.toLowerCase();

      const filteredStudents = students.filter(student =>
        student.name.toLowerCase().startsWith(value)
      );

      renderCards(filteredStudents);
    });

