<!-- the html form that we input data into, what gets sent is the input and value fields -->
<form action="form_script.php" method="post">
    <h1>Application Form</h1>
    <br />
    <br />
    <hr />
    <br />
    <h2>Name:</h2>
    <label for="name">Your name:</label>
    <input type="text" name="name" required />
    <br />
    <br />
    <hr />
    <br />
    <h2>Uniform:</h2>
    <label for="uniform-sizes">Pick a size:</label>
    <select name="uniform-size">
        <option value="small" name="small">Small</option>
        <option value="medium" name="medium">Medium</option>
        <option value="large" name="large">Large</option>
    </select>
    <br />
    <br />
    <hr />
    <br />
    <h2>Select Work Availability:</h2>
    <fieldset>
        <label for="shift-1">Morning Shift</label>
        <input type="checkbox" name="shift-1" value="Morning Shift" />
        <label for="shift-2">Afternoon Shift</label>
        <input type="checkbox" name="shift-2" value="Afternoon Shift" />
        <label for="shift-3">Night Shift</label>
        <input type="checkbox" name="shift-3" value="Night Shift" />
    </fieldset>
    <br />
    <br />
    <hr />
    <br />
    <h2>Email:</h2>
    <label for="email">Your email:</label>
    <input type="email" name="email" required />
    <br />
    <br />
    <hr />
    <br />
    <input type="submit" />
</form>