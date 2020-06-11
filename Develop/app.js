$('#activity-form').on('submit', (event) => {
    event.preventDefault();
    // - create an activity object
    const newActivity = {
      mileage: $('#mileage').val(),
      duration: $('#duration').val(),
      date: $('#date').val(),
    };

    // - POST activity data to API @ /api/activities
    axios
      .post('/api/activities', newActivity)
      .then((response) => {
        // - when response, display message to user that the activity was tracked
        alert('Activity tracked successfully!');
        $('#mileage').val('');
        $('#duration').val('');
        $('#date').val('');

        loadGraphs();
      })
      .catch((err) => {
        const message = err.response.data.message;
        alert(message);
      });
  });