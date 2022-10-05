export default function handler(req, res) {
  console.log(req.body + '  <- request body');
  const newTaskContent = req.body.newTask;
  console.log(newTaskContent + '  <- new task content body');
  res.status(200).json({ text: newTaskContent });
}
