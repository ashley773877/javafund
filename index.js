// sample
const courseInfo = {
    "id": 1,
    "name": "Computer Science 101",
  };

  const assignmentGroup = {
    "id": 1,
    "name": "Homework",
    "course_id": 1,
    "group_weight": 30,
    "assignments": [
      {
        "id": 101,
        "name": "Assignment 1",
        "due_at": "2023-12-15T23:59:59Z",
        "points_possible": 100,
      },
   
    ],
  };

  const learnerSubmissions = [
    {
      "learner_id": 1,
      "assignment_id": 101,
      "submission": {
        "submitted_at": "2023-12-14T18:00:00Z",
        "score": 90,
      },
    },
   
  ];

