## Run this decision tree module
`npm install`
`npm start`

## How to deploy

To host a React app on an **AWS S3 bucket** using the **build** folder, follow these steps:

---

### **Step 1: Build the React App**
Run the following command in your React project directory to generate the production-ready build:

```sh
npm run build
```
or if using Yarn:

```sh
yarn build
```

This will create a `build/` folder with optimized static files.

---

### **Step 2: Create an S3 Bucket**
1. Log in to **AWS Management Console**.
2. Go to **S3** and click **Create Bucket**.
3. Provide a **unique bucket name** (e.g., `my-react-app`).
4. Choose a region (e.g., `us-east-1`).
5. **Uncheck "Block all public access"** (to make it publicly accessible).
6. Click **Create bucket**.

---

### **Step 3: Enable Static Website Hosting**
1. Open the created bucket.
2. Go to the **Properties** tab.
3. Scroll down to **Static website hosting**.
4. Select **Enable**.
5. Choose **"Host a static website"**.
6. Set **Index document** to `index.html`.
7. (Optional) Set **Error document** to `index.html` (useful for React Router).
8. Copy the **Bucket website endpoint**—you'll need it later.
9. Click **Save**.

---

### **Step 4: Upload the Build Files**
1. Navigate to the **Objects** tab in your S3 bucket.
2. Click **Upload**.
3. Select all files inside the `build/` folder.
4. Click **Upload**.

---

### **Step 5: Set Bucket Policy for Public Access**
1. Go to the **Permissions** tab.
2. Under **Bucket Policy**, click **Edit** and add the following policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```
Replace `your-bucket-name` with the actual name of your S3 bucket.

3. Click **Save changes**.
