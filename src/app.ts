import cors from 'cors';
import express, { Application, Request, Response } from 'express';


const app: Application = express();

//body parser
app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);





//live response
app.get('/', (req: Request, res: Response) => {
  res.send(
    '<h1 style="text-align:center; color:#A55FEF; font-family:Verdana;">ph health care running</h1>',
  );
});


export default app;