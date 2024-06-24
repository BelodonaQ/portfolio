<?php
// Database configuration
$dbHost = 'localhost';
$dbUser = 'your_db_username';
$dbPass = 'your_db_password';
$dbName = 'your_db_name';

// Create database connection
$conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch featured articles
$limit = 3; // Number of featured articles
$query = "SELECT * FROM articles ORDER BY date DESC LIMIT $limit";
$result = $conn->query($query);

// Loop through the results and display the articles
while ($row = $result->fetch_assoc()) {
    $title = $row['title'];
    $description = $row['description'];
    $content = $row['content'];
    $date = $row['date'];

    // Display the article in the desired format
    // You can generate HTML elements or use a template engine for better organization
    echo "<div class='card'>";
    echo "<h3>$title</h3>";
    echo "<p>$description</p>";
    echo "<p>$date</p>";
    echo "</div>";
}

// Close the database connection
$conn->close();

?>


