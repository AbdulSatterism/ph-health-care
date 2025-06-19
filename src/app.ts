import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { userRoutes } from './app/modules/user/user.route';


const app: Application = express();

//body parser
app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/v1/users', userRoutes); 



//live response
app.get('/', (req: Request, res: Response) => {
  res.send(
    '<h1 style="text-align:center; color:#A55FEF; font-family:Verdana;">ph health care running</h1>',
  );
});


export default app;