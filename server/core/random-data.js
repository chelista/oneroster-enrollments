const RandomData = {
  /**
   * To generate some random values to be used as id for the values
   *
   * This should be unique. If there are classes then the method would
   * need to be enhanced to use the id of the record or search the
   * database to check for uniqueness.
   *
   * @returns {string}
   */
  creationId: () => {
    return Math.random().toString(36).slice(2).toUpperCase();
  },

  username: data => {
    const username = data.first_name.substr(0, 3)
        + data.last_name.substr(0, 3)
        + Math.random().toString(16).slice(2);

    return username.substr(0, 8);
  }
};

export default RandomData;
