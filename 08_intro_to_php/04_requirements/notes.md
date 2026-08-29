# To learn PHP you need the following:

### Technical Requirements

1. **Web Hosting with PHP Support**
   - A shared hosting plan that supports **PHP** (most do, but confirm with your provider).
   - Ensure the server runs a supported version of **PHP** (as of 2023 training data, versions like 7.x or 8.x are standard — check [php.net](https://www.php.net) for current support).
   - You can create a webserver on your dev machine as well but it is not recommended as you will be exposed to the Internet and potentially run into security issues.

2. **FTP/SFTP Access**
   - Ability to upload files via FTP or SFTP to the server.
   - Tools: FileZilla (free), WinSCP (Windows), or your host's built-in file manager.

3. **Web Browser**
   - A modern browser like Chrome, Firefox, or Edge for testing and viewing results in a web browser.

4. **Text Editor or IDE**
   - Basic text editor (e.g., VS Code, Sublime Text) or a PHP-specific IDE (e.g., PhpStorm).
   - No need for advanced features — simple syntax highlighting will suffice at first.

5. **Local Testing (Optional but Recommended)**
   - A local development environment like **XAMPP**, **WAMP**, or **MAMP**.
   - Allows you to test code before deploying it live, avoiding errors on the shared server.

---

### Learning Resources

1. **PHP Documentation**
   - [https://www.php.net/manual/en/](https://www.php.net/manual/en/)
   - Official and up-to-date — essential for learning correct syntax and best practices.

2. **Tutorials & Courses (Beginner-Friendly)**
   - FreeCodeCamp, W3Schools, Codecademy
   - Search: "PHP for beginners" or "how to learn PHP with shared hosting"

3. **Books** (Optional)
   - _"PHP and MySQL Web Development"_ by Luke Welling and Laura Thomson — great for structured learning.

---

### Security & Best Practices

1. **Never Store Sensitive Data on Shared Hosting**
   - Avoid storing passwords, API keys, or other sensitive info in your code or database.
   - Use environment variables (if supported) or local development only for such data.

2. **Avoid Overwriting System Files**
   - Be careful not to modify files outside your own directory — shared hosting has many users and can cause conflicts or server errors.

3. **Use Version Control (Optional but Good Practice)**
   - Git + GitHub/GitLab can help you track changes, especially as you move from learning to real projects.

---

### Testing Your Setup

After setting up:

- Create a simple `index.php` file with the following content and upload it to your server:

```php
<?php
echo "Hello, PHP on shared hosting!";
?>
```

- Visit it in your browser via:  
  `http://yourdomain.com/index.php`

If you see the message, your setup is working.

---

### Risks & Limitations

- **Shared Hosting Restrictions**:
  - You may not have access to server-level config (e.g., `.htaccess`, PHP ini settings).
  - Some hosts restrict execution of certain functions (e.g., `exec()`).

- **Performance Limits**:
  - Shared hosting is not suitable for high-traffic or complex applications.

- **No Full Control**:
  - You can't install custom software, modify the server OS, or configure advanced PHP settings.

---

### Summary

To learn PHP on shared hosting:

1. Get a host that supports PHP.
2. Use FTP to upload files.
3. Write and test basic PHP scripts in your browser.
4. Learn from tutorials and documentation.
5. Avoid security pitfalls and overstepping server limits.
