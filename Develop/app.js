$('#notes').on('submit', (event) => {
    event.preventDefault();
    // - create an activity object
    const newNote = {
      title: $('.noteTitle').val(),
      text: $('.noteText').val(),

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