document.getElementById("voteForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop default form submission

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !age) {
    alert("Please enter valid details");
    return;
  }

  const ageNum = parseInt(age);

  checkEligibility(name, ageNum)
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});

function checkEligibility(name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
}
