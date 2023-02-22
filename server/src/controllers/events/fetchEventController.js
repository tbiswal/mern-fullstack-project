const fetchEventController = async ({ fetchEventPersistence }) => {
  const events = await fetchEventPersistence();
  return events;
};

export default fetchEventController;
