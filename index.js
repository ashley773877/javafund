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

  function analyzeData(courseInfo, assignmentGroup, learnerSubmissions) {
    // Validate course assignment group
    if (assignmentGroup.course_id !== courseInfo.id) {
      throw new Error("Invalid input: Assignment group does not belong to the specified course.");
    }
  
    const result = [];

    for (const submission of learnerSubmissions) {
        const learnerId = submission.learner_id;
        const assignmentId = submission.assignment_id;
        
        
        const assignment = assignmentGroup.assignments.find(a => a.id === assignmentId);
    
        if (!assignment) {
          console.error(`Assignment with ID ${assignmentId} not found in the assignment group.`);
          continue; 
        }
        const dueDate = new Date(assignment.due_at);
        const currentDate = new Date();

        if (currentDate > dueDate) {
          
            const latePenalty = 0.1 * assignment.points_possible;
            submission.submission.score = Math.max(0, submission.submission.score - latePenalty);
          } else {
            continue; 
          }

          const percentageScore = (submission.submission.score / assignment.points_possible) * 100;

          
          if (!result[learnerId]) {
            result[learnerId] = {
              "id": learnerId,
              "avg": 0,
            };
          }   
          result[learnerId][assignmentId] = percentageScore;

        
          result[learnerId].avg += (percentageScore * assignmentGroup.group_weight) / 100;
        }
      
       
        result.forEach(learnerData => {
          learnerData.avg /= assignmentGroup.group_weight / 100;
        });
      
        return result;
      }
      
     
      try {
        const result = analyzeData(courseInfo, assignmentGroup, learnerSubmissions);
        console.log(result);
      } catch (error) {
        console.error(error.message);
      }

      //section 2
      



