/*
  const handleSearch = async (): Promise<MoreInfo> => {
    const [IdOne, IdTwo] = await Promise.all([
      fetchID(personOne),
      fetchID(personTwo),
    ]);

    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TEST_TOKEN}&language=en-US&sort_by=primary_release_date.desc&page=1&with_people=${IdOne},${IdTwo}`
    ).then((res) => res.json());
    setMoreInfo(data);
    return data;
  };
   */
