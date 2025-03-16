# InvestIQ 
## One-stop solution for every Investment needs

## Screenshots
![image](https://github.com/user-attachments/assets/3a675c0a-6e2c-4b69-a309-8ed4521607e7)

---
![image](https://github.com/user-attachments/assets/2edc9652-f3e3-4f9a-851c-d6a43a38eb55)

---
![image](https://github.com/user-attachments/assets/d89155bc-6c89-4a04-a48a-ba55bff7a413)

---
![image](https://github.com/user-attachments/assets/269c90f9-9453-4c8f-84d8-d00b4f7657d2)

---

Follow these steps to set up and run the project.  

---

## 📌 Prerequisites  

Ensure you have the following installed before proceeding:  

- [Node.js](https://nodejs.org/) installed on your system  
- A **MongoDB** connection URL  

---

## 🚀 Installation  

### 1️⃣ Navigate to the InvestIQ directory  
```sh
cd InvestIQ
```

## 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up environment variables

- Create a `.env` file in the **root** of the `backend` directory.  
- Add the following details inside the `.env` file:
  
  ```sh
  MONGODB_URL=your_mongodb_connection_url
  PORT=your_preferred_port_number
  ```

### 4️⃣ Initialize Data (One-time setup before running the server)  
```sh
cd extra/init
node index.js
cd ../..
```

## 5️⃣ Move to the src directory
```sh
cd src
```
## 6️⃣ Run the server
```sh
node app.js
```
---

## ✅ Expected Output  

Once the server is running, you should see an output similar to:  

```sh
Server is running on port [PORT]
Connected to MongoDB successfully
```

## 🤝 Contributing  

Feel free to contribute or raise issues if you encounter any problems.  

---

**Happy coding! 🚀**  
