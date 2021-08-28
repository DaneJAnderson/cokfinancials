<?php 

  class Post {

    // DB stuff
    private $conn;
    private $table = 'promotion_responses';

    // Post Properties 

     public $first_name;
     public $last_name;
     public $telephone_number;
     public $email;
     public $promotion_name;
     public $promotion_id;
     public $place_of_employment;
     public $parish;
     public $employment_status;
     public $loan_amount;

    //$country;  `status``created_at`, `created_by`, `updated_at`, `updated_by`

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Create Post
    public function create() {
          // Create query
        //   $query = 'INSERT INTO ' . $this->table . ' SET title = :title, body = :body, author = :author, category_id = :category_id';

          $query = 'INSERT INTO ' . $this->table . ' SET first_name = :first_name, last_name = :last_name,
           telephone_number = :telephone_number, email = :email, promotion_name = :promotion_name, promotion_id = :promotion_id,
           place_of_employment = :place_of_employment, parish = :parish, employment_status = :employment_status, loan_amount = :loan_amount';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->first_name = htmlspecialchars(strip_tags($this->first_name));
          $this->last_name = htmlspecialchars(strip_tags($this->last_name));
          $this->telephone_number = htmlspecialchars(strip_tags($this->telephone_number));
          $this->email = htmlspecialchars(strip_tags($this->email));
          $this->promotion_id = htmlspecialchars(strip_tags($this->promotion_id));
          $this->promotion_name = htmlspecialchars(strip_tags($this->promotion_name));
          $this->place_of_employment = htmlspecialchars(strip_tags($this->place_of_employment));
          $this->parish = htmlspecialchars(strip_tags($this->parish));
          $this->employment_status = htmlspecialchars(strip_tags($this->employment_status));
          $this->loan_amount = htmlspecialchars(strip_tags($this->loan_amount));

          // Bind data
          $stmt->bindParam(':first_name', $this->first_name);
          $stmt->bindParam(':last_name', $this->last_name);
          $stmt->bindParam(':telephone_number', $this->telephone_number);
          $stmt->bindParam(':email', $this->email);
          $stmt->bindParam(':promotion_name', $this->promotion_name);
          $stmt->bindParam(':promotion_id', $this->promotion_id);
          $stmt->bindParam(':place_of_employment', $this->place_of_employment);
          $stmt->bindParam(':parish', $this->parish);
          $stmt->bindParam(':employment_status', $this->employment_status);
          $stmt->bindParam(':loan_amount', $this->loan_amount);

          // Execute query
          if($stmt->execute()) {
            return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }

    

    
  }