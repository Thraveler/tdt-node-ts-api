import express, { Response, Request } from "express";

const app = express();

app.use((req: Request, res: Response) => {
  res.json({
    message: 'Hi from my express server!'
  })
})

app.listen(8000, () => {
  console.log('Server is running');

})