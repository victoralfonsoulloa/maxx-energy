# MAXX Energy API Documentation

##  Authentication

### POST /api/login
- **Description:** Authenticates user and returns a JWT token.
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Returns:**
  ```json
  {
    "token": "YOUR_JWT_TOKEN"
  }
  ```

---

##  Protected Routes (Require Bearer Token)

Add this header:
```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

### GET /api/v1/energyData/accounts
- **Params:** `?page=1&limit=10&role=Executive`
- **Description:** Returns account data. Non-executive roles get masked accounts.

---

### GET /api/v1/energyData/usage
- **Params:**  
  `account_no=12345`  
  `start_date=YYYY-MM-DD`  
  `end_date=YYYY-MM-DD`  
  `page=1&limit=10`  
  `role=Executive`  
- **Description:** Returns hourly usage for a specific account and date range.

---

### GET /api/v1/energyData/substations
- **Params:** `?page=1&limit=10`
- **Description:** List of substations and transformers

---

### GET /api/v1/energyData/distinctAccounts
- **Params:** `?page=1&limit=10&role=Executive`
- **Description:** List of unique account numbers

---

### GET /api/v1/plant/plantid
- **Description:** Returns distinct plant IDs

---

## ⚙️ Notes
- All `/api/v1/*` endpoints require Authorization
- Pagination is applied using `page` and `limit` query parameters
- Account numbers are masked unless `role=Executive`
