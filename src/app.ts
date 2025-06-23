import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { userRoutes } from './app/modules/user/user.route';
import { adminRoutes } from './app/modules/admin/admin.route';



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



app.use('/api/v1/user', userRoutes); 
app.use('/api/v1/admin', adminRoutes); 



//live response
app.get('/', (req: Request, res: Response) => {
  res.send(
    '<h1 style="text-align:center; color:#A55FEF; font-family:Verdana;">ph health care running</h1>',
  );
});


export default app;