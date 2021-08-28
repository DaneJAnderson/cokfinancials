<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once './config.php';
  include_once './post.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $post = new Post($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));

  $data->status=1;

  echo json_encode($data);
  return json_encode($data);

  $post->first_name = $data->first_name;
  $post->last_name = $data->last_name;
  $post->telephone_number = $data->telephone_number;
  $post->email = $data->email;
  $post->promotion_name = $data->promotion_name;
  $post->promotion_id = $data->promotion_id;
  $post->place_of_employment = $data->place_of_employment;
  $post->parish = $data->parish;
  $post->employment_status = $data->employment_status;
  $post->loan_amount = $data->loan_amount;

  // Create post
  if($post->create()) {
    echo json_encode(
      array('message' => 'Post Created')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Created')
    );
  }

