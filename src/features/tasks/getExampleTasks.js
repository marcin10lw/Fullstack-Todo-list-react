export const getExampleTasks = async () => {
  const response = await fetch(`${process.env.PUBLIC_URL}/exampleTasks.json`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
