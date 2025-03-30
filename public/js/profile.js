// async function addMoney() {
//     const userId = getUserId();
//     if (!userId) {
//         alert("User ID is missing!");
//         return;
//     }

//     const amount = parseFloat(document.getElementById('amount').value);
//     if (isNaN(amount) || amount <= 0) {
//         alert("Please enter a valid positive amount.");
//         return;
//     }

//     const url = `/wallet/${userId}/add`;

//     try {
//         const response = await fetch(url, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ amount })
//         });

//         const data = await response.json();
        
//         if (response.ok) {
//             document.getElementById('balance').textContent = `$${data.newBalance.toFixed(2)}`;
//         } else {
//             alert(data.message || "Failed to add money.");
//         }
//     } catch (error) {
//         console.error("Network error:", error);
//         alert("Network error. Please try again.");
//     }
// }

// async function withdrawMoney() {
//     const userId = getUserId();
//     if (!userId) {
//         alert("User ID is missing!");
//         return;
//     }

//     const amount = parseFloat(document.getElementById('amount').value);
//     if (isNaN(amount) || amount <= 0) {
//         alert("Please enter a valid positive amount.");
//         return;
//     }

//     const url = `/wallet/${userId}/sub`;

//     try {
//         const response = await fetch(url, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ amount })
//         });

//         const data = await response.json();

//         if (response.ok) {
//             document.getElementById('balance').textContent = `$${data.newBalance.toFixed(2)}`;
//         } else {
//             alert(data.message || "Insufficient funds or an error occurred.");
//         }
//     } catch (error) {
//         console.error("Network error:", error);
//         alert("Network error. Please try again.");
//     }
// }

// // Function to get userId safely
// function getUserId() {
//     const userIdElement = document.getElementById('userId');
//     return userIdElement ? userIdElement.value : null;
// }
